import { random } from 'faker';

import { ApiProduct, ApiProductResponse } from '@product/infrastructure/repository/api-product.response';

import { ProductDescriptionMother } from './../../domain/product-description.mother';
import { ProductEmailMother } from './../../domain/product-email.mother';
import { ProductImageMother } from './../../domain/product-image.mother';
import { ProductPriceMother } from '../../domain/product-price.mother';
import { ProductTitleMother } from '../../domain/product-title.mother';

export class ApiProductResponseMother {
    static random(): ApiProduct {
        return {
            title: ProductTitleMother.random(),
            description: ProductDescriptionMother.random(),
            price: ProductPriceMother.random(),
            email: ProductEmailMother.random(),
            image: ProductImageMother.random(),
        };
    }

    static randomList(length: number = random.number({ min: 1, max: 50 })): ApiProductResponse {
        return { items: new Array(length).fill('').map(() => ApiProductResponseMother.random()) };
    }
}
