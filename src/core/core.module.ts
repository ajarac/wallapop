import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '@env/environment';

import { CONFIG_ENVIRONMENT_TOKEN } from './config/config.environment';
import { CoreStoreModule } from './store/core-store.module';
import { CoreTranslateModule } from './translate/core-translate.module';

@NgModule({
    imports: [HttpClientModule, CoreTranslateModule, CoreStoreModule],
    providers: [
        {
            provide: CONFIG_ENVIRONMENT_TOKEN,
            useValue: environment,
        },
    ],
})
export class CoreModule {}
