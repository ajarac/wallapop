import { image } from 'faker';

import { ProductImage } from '@product/domain/product-image';

export class ProductImageMother {
    static random(): ProductImage {
        return image.imageUrl();
    }
}
