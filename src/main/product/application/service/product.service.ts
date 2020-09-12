import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Product } from '@product/domain/product';

import { ChangeFavoriteProductAction, LoadProductsAction } from './../store/product.action';
import { ProductSelector } from './../store/product.selector';

@Injectable()
export class ProductService {
    get list$(): Observable<Product[]> {
        return this.store.select(ProductSelector.list);
    }

    get listFavorite$(): Observable<Product[]> {
        return this.store.select(ProductSelector.listFavorite);
    }

    get isLoading$(): Observable<boolean> {
        return this.store.select(ProductSelector.isLoading);
    }

    constructor(private store: Store) {}

    loadProducts(): void {
        this.store.dispatch(new LoadProductsAction());
    }

    changeFavorite(product: Product, isFavorite: boolean): void {
        this.store.dispatch(new ChangeFavoriteProductAction(product, isFavorite));
    }
}
