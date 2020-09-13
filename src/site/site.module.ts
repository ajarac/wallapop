import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [SharedModule],
    declarations: [MainLayoutComponent, ToolbarComponent],
    exports: [MainLayoutComponent],
})
export class SiteModule {}
