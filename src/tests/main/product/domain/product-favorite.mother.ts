import { random } from 'faker';

import { ProductFavorite } from '@product/domain/product-favorite';

export class ProductFavoriteMother {
    static random(): ProductFavorite {
        return random.boolean();
    }
}
