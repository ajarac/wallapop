import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { COMPONENTS } from './components';
import { ThemeModule } from './theme/theme.module';

@NgModule({
    imports: [ThemeModule, CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS, CommonModule],
})
export class SharedModule {}
