import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Injectable, Injector } from '@angular/core';
import { ApiRepository } from '@core/repository/api/api.service';
import { Product } from '@product/domain/product';
import { ProductRepository } from '@product/domain/product.repository';

import { ApiProduct, ApiProductResponse } from './api-product.response';
import { ProductMapper } from './product.mapper';

@Injectable()
export class ApiProductRepository extends ApiRepository implements ProductRepository {
    private baseUrl = 'items.json';

    constructor(injector: Injector) {
        super(injector);
    }

    getProducts(): Observable<Product[]> {
        const url: string = this.buildUrl(this.baseUrl);
        return this.httpClient
            .get<ApiProductResponse>(url)
            .pipe(map(({ items }: ApiProductResponse) => items.map((apiProduct: ApiProduct) => ProductMapper.toDomain(apiProduct))));
    }
}
