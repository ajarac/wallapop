import { random } from 'faker';

import { ProductTitle } from '@product/domain/product-title';

export class ProductTitleMother {
    static random(): ProductTitle {
        return random.words();
    }
}
