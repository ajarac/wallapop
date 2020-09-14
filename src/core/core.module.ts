import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { CONFIG_ENVIRONMENT_TOKEN } from './config/config.environment';
import { BrowserStateInterceptor } from './interceptors/browserstate.interceptor';
import { CoreStoreModule } from './store/core-store.module';
import { CoreTranslateModule } from './translate/core-translate.module';

@NgModule({
    imports: [HttpClientModule, CoreTranslateModule, CoreStoreModule, TransferHttpCacheModule],
    providers: [
        {
            provide: CONFIG_ENVIRONMENT_TOKEN,
            useValue: environment,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BrowserStateInterceptor,
            multi: true,
        },
    ],
})
export class CoreModule {}
