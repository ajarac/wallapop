import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ProductApplicationModule } from './application/product-application.module';
import { ProductInfrastructureModule } from './infrastructure/product-infrastructure.module';

@NgModule({
    imports: [ProductApplicationModule, ProductInfrastructureModule],
})
export class MainProductModule {
    constructor(@Optional() @SkipSelf() parentModule?: MainProductModule) {
        if (parentModule) {
            throw new Error('MainProductModule is already loaded. Import it in the AppModule only');
        }
    }
}
