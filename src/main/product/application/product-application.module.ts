import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { ProductService } from './service/product.service';
import { ProductState } from './store/product.state';

@NgModule({
    imports: [NgxsModule.forFeature([ProductState])],
    providers: [ProductService],
})
export class ProductApplicationModule {}
