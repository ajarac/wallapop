import { NgModule } from '@angular/core';
import { ProductFeatureFavoriteListModule } from '@product/feature/product-feature-favorite-list/product-feature-favorite-list.module';
import { ProductFeatureListModule } from '@product/feature/product-feature-list/product-feature-list.module';
import { MainProductModule } from '@product/main-product.module';
import { SharedModule } from '@shared/shared.module';

import { ProductFavoriteDialogComponent } from './product-favorite/product-favorite-dialog.component';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing';
import { ProductTitleComponent } from './title/product-title.component';

@NgModule({
    imports: [ProductRoutingModule, SharedModule, MainProductModule, ProductFeatureListModule, ProductFeatureFavoriteListModule],
    declarations: [ProductComponent, ProductTitleComponent, ProductFavoriteDialogComponent],
})
export class ProductModule {}
