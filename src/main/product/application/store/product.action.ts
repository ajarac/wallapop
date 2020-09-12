import { Product } from '@product/domain/product';
const KEY_STATE = '[PRODUCT]';

export class LoadProductsAction {
    static type = `${KEY_STATE} Load Products`;
}

export class ProductsLoadedAction {
    static type = `${KEY_STATE} Products Loaded`;

    constructor(public products: Product[]) {}
}

export class ChangeFavoriteProductAction {
    static type = `${KEY_STATE} Change Favorite Product`;

    constructor(public product: Product, public isFavorite: boolean) {}
}
