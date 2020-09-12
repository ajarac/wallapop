import { uuid } from 'uuidv4';

import { Product } from '@product/domain/product';

import { ApiProductResponse } from './api-product.response';

export class ProductMapper {
    static toDomain(apiProduct: ApiProductResponse): Product {
        return {
            id: uuid(),
            title: apiProduct.title,
            description: apiProduct.description,
            price: apiProduct.price,
            email: apiProduct.email,
            image: apiProduct.email,
            favorite: false,
        };
    }
}
