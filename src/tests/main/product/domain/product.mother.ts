import { Product, ProductArgs } from '@product/domain/product';

import { ProductDescriptionMother } from './product-description.mother';
import { ProductEmailMother } from './product-email.mother';
import { ProductFavoriteMother } from './product-favorite.mother';
import { ProductImageMother } from './product-image.mother';
import { ProductPriceMother } from './product-price.mother';
import { ProductTitleMother } from './product-title.mother';

export class ProductMother {
    static create(productArgs: ProductArgs): Product {
        return new Product(productArgs);
    }

    static random(productArgs: Partial<ProductArgs> = {}): Product {
        return ProductMother.create({
            title: productArgs.title || ProductTitleMother.random(),
            description: productArgs.description || ProductDescriptionMother.random(),
            price: productArgs.price || ProductPriceMother.random(),
            email: productArgs.email || ProductEmailMother.random(),
            image: productArgs.image || ProductImageMother.random(),
            favorite: productArgs.favorite || ProductFavoriteMother.random(),
        });
    }
}
