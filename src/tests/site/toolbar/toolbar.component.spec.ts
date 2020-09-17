import { random } from 'faker';

import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateService } from '@ngx-translate/core';
import { ToolbarComponent } from '@site/toolbar/toolbar.component';

@Pipe({ name: 'translate' })
class TranslatePipe implements PipeTransform {
    transform(value): any {
        return value;
    }
}

describe('ToolbarComponent', () => {
    let fixture: ComponentFixture<ToolbarComponent>;
    let component: ToolbarComponent;
    let dom;
    let translateServiceMock;
    let button;
    beforeEach(async () => {
        translateServiceMock = jasmine.createSpyObj('translateService', ['setDefaultLang']);

        TestBed.configureTestingModule({
            imports: [MatMenuModule, NoopAnimationsModule],
            declarations: [ToolbarComponent, TranslatePipe],
            providers: [
                {
                    provide: TranslateService,
                    useValue: translateServiceMock,
                },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolbarComponent);
        fixture.autoDetectChanges(true);
        component = fixture.debugElement.componentInstance;
        dom = fixture.nativeElement;
        button = dom.querySelector('#btn-lang');
    });

    it('should menu init closed', () => {
        const menu = dom.parentNode.querySelector('.mat-menu-panel');
        expect(menu).toBeFalsy();
    });

    it('open the menu when clicking on the account button', async () => {
        button.click();
        const menu = dom.parentNode.querySelector('.mat-menu-panel');
        expect(menu).toBeTruthy();
    });

    it('should change language when click in lang button', () => {
        const lang: string = random.arrayElement(fixture.componentInstance.langs);
        translateServiceMock.setDefaultLang.and.callThrough();
        button.click();

        console.log(dom.parentNode.querySelector('#btn-lang-' + lang).nativeElement);
        dom.parentNode.querySelector('#btn-lang-' + lang).click();

        expect(translateServiceMock.setDefaultLang).toHaveBeenCalledWith(lang);
    });
});
