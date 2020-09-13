import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ProductItemCardComponent } from './product-item-card.component';

@NgModule({
    imports: [SharedModule],
    declarations: [ProductItemCardComponent],
    exports: [ProductItemCardComponent],
})
export class ProductItemCardModule {}
