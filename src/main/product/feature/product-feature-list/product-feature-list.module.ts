import { NgModule } from '@angular/core';
import { ProductItemCardModule } from '@product/infrastructure/ui/product-item-card/product-item-card.module';
import { SharedModule } from '@shared/shared.module';

import { ProductFeatureListComponent } from './product-feature-list.component';

@NgModule({
    imports: [ProductItemCardModule, SharedModule],
    declarations: [ProductFeatureListComponent],
    exports: [ProductFeatureListComponent],
})
export class ProductFeatureListModule {}
