import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { ProductFavoriteDialogComponent } from '@app/product/product-favorite/product-favorite-dialog.component';
import { ProductComponent } from '@app/product/product.component';

@Component({
    selector: 'app-product-title',
    template: '<div></div>',
})
class ProductTitleStub {
    @Output() favorite: EventEmitter<void> = new EventEmitter<void>();
}

describe('Product Component', () => {
    let fixture: ComponentFixture<ProductComponent>;
    let component: ProductComponent;
    let productTitleStub: ProductTitleStub;
    let dom;
    let matDialogMock;
    beforeEach(async () => {
        matDialogMock = jasmine.createSpyObj('matDialogService', ['open']);

        TestBed.configureTestingModule({
            declarations: [ProductComponent, ProductTitleStub],
            providers: [
                {
                    provide: MatDialog,
                    useValue: matDialogMock,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        fixture.autoDetectChanges(true);
        component = fixture.debugElement.componentInstance;
        dom = fixture.nativeElement;
        productTitleStub = fixture.debugElement.query(By.directive(ProductTitleStub)).componentInstance;
    });

    it('should open dialog when emit product title', () => {
        matDialogMock.open.and.callThrough();

        productTitleStub.favorite.emit();

        expect(matDialogMock.open).toHaveBeenCalledWith(ProductFavoriteDialogComponent, { width: 'auto' });
    });
});
