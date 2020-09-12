import { ProductDescription } from './product-description';
import { ProductEmail } from './product-email';
import { ProductFavorite } from './product-favorite';
import { ProductId } from './product-id';
import { ProductImage } from './product-image';
import { ProductPrice } from './product-price';
import { ProductTitle } from './product-title';

export interface Product {
    id: ProductId;
    title: ProductTitle;
    description: ProductDescription;
    price: ProductPrice;
    email: ProductEmail;
    image: ProductImage;
    favorite: ProductFavorite;
}
