import { Product } from '@product/domain/product';

import { ProductDescriptionMother } from './product-description.mother';
import { ProductEmailMother } from './product-email.mother';
import { ProductFavoriteMother } from './product-favorite.mother';
import { ProductIdMother } from './product-id.mother';
import { ProductImageMother } from './product-image.mother';
import { ProductPriceMother } from './product-price.mother';
import { ProductTitleMother } from './product-title.mother';

export class ProductMother {
    static random(productArgs: Partial<Product> = {}): Product {
        return {
            id: productArgs.id || ProductIdMother.random(),
            title: productArgs.title || ProductTitleMother.random(),
            description: productArgs.description || ProductDescriptionMother.random(),
            price: productArgs.price || ProductPriceMother.random(),
            email: productArgs.email || ProductEmailMother.random(),
            image: productArgs.image || ProductImageMother.random(),
            favorite: productArgs.favorite || ProductFavoriteMother.random(),
        };
    }
}
