import { Observable } from 'rxjs';

import { InjectionToken } from '@angular/core';

import { Product } from './product';

export const PRODUCT_REPOSITORY: InjectionToken<ProductRepository> = new InjectionToken<ProductRepository>('PRODUCT_REPOSITORY');

export interface ProductRepository {
    getProducts(): Observable<Product[]>;
}
