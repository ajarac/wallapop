import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '@env/environment';

import { CONFIG_ENVIRONMENT_TOKEN } from './config/config.environment';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        {
            provide: CONFIG_ENVIRONMENT_TOKEN,
            useValue: environment,
        },
    ],
})
export class CoreModule {}
