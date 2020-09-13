import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ProductItemCardModule } from '../../infrastructure/ui/product-item-card/product-item-card.module';
import { ProductFeatureFavoriteListComponent } from './product-feature-favorite-list.component';

@NgModule({
    imports: [ProductItemCardModule, SharedModule],
    declarations: [ProductFeatureFavoriteListComponent],
    exports: [ProductFeatureFavoriteListComponent],
})
export class ProductFeatureFavoriteListModule {}
