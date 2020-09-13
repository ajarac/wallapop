import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ProductFavoriteItemCardComponent } from './product-favorite-item-card.component';

@NgModule({
    imports: [SharedModule],
    declarations: [ProductFavoriteItemCardComponent],
    exports: [ProductFavoriteItemCardComponent],
})
export class ProductFavoriteItemCardModule {}
