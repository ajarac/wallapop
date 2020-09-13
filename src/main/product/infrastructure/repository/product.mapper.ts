import { v4 as uuidv4 } from 'uuid';

import { Product } from '@product/domain/product';

import { ApiProduct } from './api-product.response';

export class ProductMapper {
    static toDomain(apiProduct: ApiProduct, id?: string): Product {
        return {
            id: id || uuidv4(),
            title: apiProduct.title,
            description: apiProduct.description,
            price: apiProduct.price,
            email: apiProduct.email,
            image: apiProduct.image,
            favorite: false,
        };
    }
}
