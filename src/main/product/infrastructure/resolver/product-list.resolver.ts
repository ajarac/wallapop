import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { ProductService } from './../../application/service/product.service';

@Injectable()
export class ProductListResolver implements Resolve<void> {
    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.productService.loadProducts();
    }
}
