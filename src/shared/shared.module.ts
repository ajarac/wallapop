import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { COMPONENTS } from './components';
import { ThemeModule } from './theme/theme.module';

@NgModule({
    imports: [ThemeModule, CommonModule, TranslateModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS, CommonModule, TranslateModule, ThemeModule, FlexLayoutModule],
})
export class SharedModule {}
