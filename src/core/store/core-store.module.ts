import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

@NgModule({
    imports: [
        TransferHttpCacheModule,
        NgxsModule.forRoot([], { developmentMode: !environment.production }),
        environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
    ],
})
export class CoreStoreModule {}
