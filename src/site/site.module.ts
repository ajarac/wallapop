import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
    imports: [LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule],
    declarations: [MainLayoutComponent],
    exports: [MainLayoutComponent],
})
export class SiteModule {}
