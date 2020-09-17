import { of } from 'rxjs';

import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductTitleComponent } from '@app/product/title/product-title.component';
import { ProductService } from '@product/application/service/product.service';
import { Product } from '@product/domain/product';

import { ProductListMother } from './../../../main/product/domain/product-list.mother';

@Pipe({ name: 'translate' })
class PipeTranslate implements PipeTransform {
    transform(value: any): any {
        return value;
    }
}

describe('ProductTitleComponent', () => {
    let fixture: ComponentFixture<ProductTitleComponent>;
    let component: ProductTitleComponent;
    let dom;

    const productServiceMock = {
        listFavorite$: of(ProductListMother.random(20, { favorite: true })),
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [ProductTitleComponent, PipeTranslate],
            providers: [
                {
                    provide: ProductService,
                    useValue: productServiceMock,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductTitleComponent);
        fixture.autoDetectChanges(true);
        component = fixture.debugElement.componentInstance;
        dom = fixture.nativeElement;
    });

    it('should show count of favorite products in button', () => {
        const span = dom.querySelector('#count-product-fav');
        expect(span.textContent.includes(20)).toBeTruthy();
    });

    it('should emit favorite when click in button favorite', () => {
        const button = dom.querySelector('#btn-open-fav');
        spyOn(component.favorite, 'emit');

        button.click();

        expect(component.favorite.emit).toHaveBeenCalled();
    });
});
