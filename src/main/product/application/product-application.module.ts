import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { ProductService } from './service/product.service';
import { ProductPageState } from './store/page/product-page.state';
import { ProductState } from './store/product.state';

@NgModule({
    imports: [NgxsModule.forFeature([ProductState, ProductPageState])],
    providers: [ProductService],
})
export class ProductApplicationModule {}
