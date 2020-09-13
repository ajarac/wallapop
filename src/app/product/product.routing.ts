import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListResolver } from '@product/infrastructure/resolver/product-list.resolver';

import { ProductComponent } from './product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        resolve: {
            list: ProductListResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}
