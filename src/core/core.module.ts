import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '@env/environment';

import { CONFIG_ENVIRONMENT_TOKEN } from './config/config.environment';
import { CoreTranslateModuel } from './translate/core-translate.module';

@NgModule({
    imports: [HttpClientModule, CoreTranslateModuel],
    providers: [
        {
            provide: CONFIG_ENVIRONMENT_TOKEN,
            useValue: environment,
        },
    ],
})
export class CoreModule {}
