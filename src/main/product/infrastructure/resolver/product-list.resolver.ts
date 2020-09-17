import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ProductService } from './../../application/service/product.service';

@Injectable()
export class ProductListResolver implements Resolve<void> {
    constructor(private productService: ProductService) {}

    resolve(): void {
        this.productService.loadProducts();
    }
}
