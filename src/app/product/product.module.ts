import { NgModule } from '@angular/core';
import { MainProductModule } from '@product/main-product.module';
import { SharedModule } from '@shared/shared.module';

import { ProductListItemComponent } from './list/item/product-list-item.component';
import { ProductListComponent } from './list/product-list.component';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing';
import { ProductTitleComponent } from './title/product-title.component';

@NgModule({
    imports: [ProductRoutingModule, SharedModule, MainProductModule],
    declarations: [ProductComponent, ProductTitleComponent, ProductListComponent, ProductListItemComponent],
})
export class ProductModule {}
