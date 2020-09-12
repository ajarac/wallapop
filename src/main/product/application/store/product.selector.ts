import { Selector } from '@ngxs/store';
import { Product } from '@product/domain/product';

import { ProductId } from './../../domain/product-id';
import { IProductState, ProductState } from './product.state';

export class ProductSelector {
    @Selector([ProductState])
    static isLoading({ loading }: IProductState): boolean {
        return loading;
    }

    @Selector([ProductState])
    static list({ products }: IProductState): Product[] {
        return Object.keys(products).map((id: ProductId) => products[id]);
    }

    @Selector([ProductSelector.list])
    static listFavorite(products: Product[]): Product[] {
        return products.filter(({ favorite }: Product) => favorite);
    }
}
