import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { COMPONENTS } from './components';
import { ThemeModule } from './theme/theme.module';

@NgModule({
    imports: [ThemeModule, CommonModule, TranslateModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS, CommonModule, TranslateModule],
})
export class SharedModule {}
