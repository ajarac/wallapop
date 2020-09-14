import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

@NgModule({
    imports: [
        NgxsModule.forRoot([], { developmentMode: !environment.production }),
        environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
    ],
})
export class CoreStoreModule {}
