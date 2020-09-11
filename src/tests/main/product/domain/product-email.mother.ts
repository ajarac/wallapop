import { internet } from 'faker';

import { ProductEmail } from '@product/domain/product-email';

export class ProductEmailMother {
    static random(): ProductEmail {
        return internet.email();
    }
}
