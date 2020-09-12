import { random } from 'faker';

import { ProductId } from '@product/domain/product-id';

export class ProductIdMother {
    static random(): ProductId {
        return random.uuid();
    }
}
