import { ProductDescription } from './product-description';
import { ProductEmail } from './product-email';
import { ProductFavorite } from './product-favorite';
import { ProductImage } from './product-image';
import { ProductPrice } from './product-price';
import { ProductTitle } from './product-title';

export interface ProductArgs {
    title: ProductTitle;
    description: ProductDescription;
    price: ProductPrice;
    email: ProductEmail;
    image: ProductImage;
}

export class Product {
    private _title: ProductTitle;
    private _description: ProductDescription;
    private _price: ProductPrice;
    private _email: ProductEmail;
    private _image: ProductImage;
    private _favorite: ProductFavorite;

    constructor(productArgs: ProductArgs) {
        this._title = productArgs.title;
        this._description = productArgs.description;
        this._price = productArgs.price;
        this._email = productArgs.email;
        this._image = productArgs.image;
        this._favorite = false;
    }

    get title(): ProductTitle {
        return this._title;
    }

    get description(): ProductDescription {
        return this._description;
    }

    get price(): ProductPrice {
        return this._price;
    }

    get email(): ProductEmail {
        return this._email;
    }

    get image(): ProductImage {
        return this._image;
    }

    get favorite(): ProductFavorite {
        return this._favorite;
    }

    toggleFavorite(): void {
        this._favorite = !this._favorite;
    }
}
