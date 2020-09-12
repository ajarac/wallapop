import { NgModule } from '@angular/core';

import { PRODUCT_REPOSITORY } from './../domain/product.repository';
import { ApiProductRepository } from './repository/api-product.repository';
import { ProductListResolver } from './resolver/product-list.resolver';

@NgModule({
    providers: [
        {
            provide: PRODUCT_REPOSITORY,
            useClass: ApiProductRepository,
        },
        ProductListResolver,
    ],
})
export class ProductInfrastructureModule {}
