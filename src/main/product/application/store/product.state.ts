import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { Inject, Injectable } from '@angular/core';
import { Dictionary } from '@common/domain/dictionary';
import { Action, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { Product } from '@product/domain/product';
import { ProductRepository, PRODUCT_REPOSITORY } from '@product/domain/product.repository';

import { ChangeFavoriteProductAction, LoadProductsAction, ProductsLoadedAction } from './product.action';

export interface IProductState {
    products: Dictionary<Product>;
}

@State<IProductState>({
    name: 'product',
    defaults: {
        products: {},
    },
})
@Injectable()
export class ProductState {
    constructor(@Inject(PRODUCT_REPOSITORY) private repository: ProductRepository) {}

    @Action(LoadProductsAction)
    loadProducts({ dispatch }: StateContext<IProductState>): Observable<Product[]> {
        return this.repository.getProducts().pipe(tap((products: Product[]) => dispatch(new ProductsLoadedAction(products))));
    }

    @Action(ProductsLoadedAction)
    productsLoaded({ patchState }: StateContext<IProductState>, { products }: ProductsLoadedAction): void {
        const dictionary: Dictionary<Product> = products.reduce(
            (dict: Dictionary<Product>, product: Product) => ({ ...dict, [product.id]: product }),
            {},
        );
        patchState({ products: dictionary });
    }

    @Action(ChangeFavoriteProductAction)
    changeFavorite({ setState }: StateContext<IProductState>, { product, isFavorite }: ChangeFavoriteProductAction): void {
        setState(
            patch<IProductState>({
                products: patch<Dictionary<Product>>({ [product.id]: patch<Product>({ favorite: isFavorite }) }),
            }),
        );
    }
}
