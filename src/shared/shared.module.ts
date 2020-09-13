import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { DynamicListComponent } from './components/dynamic-list/dynamic-list.component';
import { CustomFieldComponent } from './components/forms/custom-field/custom-field.component';
import { ThemeModule } from './theme/theme.module';

@NgModule({
    imports: [ThemeModule, CommonModule, TranslateModule, FlexLayoutModule],
    declarations: [DynamicListComponent, CustomFieldComponent],
    exports: [DynamicListComponent, CustomFieldComponent, CommonModule, TranslateModule, ThemeModule, FlexLayoutModule],
})
export class SharedModule {}
