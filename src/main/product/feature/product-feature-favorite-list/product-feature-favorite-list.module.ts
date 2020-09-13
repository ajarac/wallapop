import { NgModule } from '@angular/core';
import { ProductFavoriteItemCardModule } from '@product/infrastructure/ui/product-favorite-item-card/product-favorite-item-card.module';
import { SharedModule } from '@shared/shared.module';

import { ProductFeatureFavoriteListComponent } from './product-feature-favorite-list.component';

@NgModule({
    imports: [ProductFavoriteItemCardModule, SharedModule],
    declarations: [ProductFeatureFavoriteListComponent],
    exports: [ProductFeatureFavoriteListComponent],
})
export class ProductFeatureFavoriteListModule {}
