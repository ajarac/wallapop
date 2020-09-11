import { random } from 'faker';

import { ProductPrice } from '@product/domain/product-price';

export class ProductPriceMother {
    static random(): ProductPrice {
        return random.number().toString();
    }
}
