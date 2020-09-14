import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ServerStateInterceptor } from '@server/interceptors/serverstate.interceptor';
import { TranslateInterceptor } from '@server/interceptors/translate.interceptor';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
    imports: [AppModule, ServerModule, ServerTransferStateModule, FlexLayoutServerModule],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServerStateInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TranslateInterceptor,
            multi: true,
        },
    ],
})
export class AppServerModule {}
