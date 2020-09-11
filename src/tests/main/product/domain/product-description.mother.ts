import { lorem } from 'faker';

import { ProductDescription } from '@product/domain/product-description';

export class ProductDescriptionMother {
    static random(): ProductDescription {
        return lorem.sentence();
    }
}
