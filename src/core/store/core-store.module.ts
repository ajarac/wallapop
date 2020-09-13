import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

@NgModule({
    imports: [NgxsModule.forRoot(), environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot()],
})
export class CoreStoreModule {}
