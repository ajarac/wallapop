import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
    langs: string[] = ['en', 'es'];

    constructor(private translateService: TranslateService) {}

    changeLang(lang: string): void {
        this.translateService.setDefaultLang(lang);
    }
}
