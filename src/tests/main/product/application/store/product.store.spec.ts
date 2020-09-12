import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { LoadProductsAction } from '@product/application/store/product.action';
import { ProductSelector } from '@product/application/store/product.selector';
import { ProductState } from '@product/application/store/product.state';
import { IProductState } from '@product/application/store/product.state';
import { Product } from '@product/domain/product';
import { PRODUCT_REPOSITORY } from '@product/domain/product.repository';

import { ProductListMother } from './../../domain/product-list.mother';

describe('[PRODUCT] Product State', () => {
    let store: Store;
    let productRepositoryMock;

    beforeEach(() => {
        productRepositoryMock = jasmine.createSpyObj('repository', ['getProducts']);
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([ProductState])],
            providers: [
                {
                    provide: PRODUCT_REPOSITORY,
                    useValue: productRepositoryMock,
                },
            ],
        });

        store = TestBed.inject(Store);
    });

    it('should be init state', () => {
        const state: IProductState = store.selectSnapshot(ProductState);

        expect(state).toEqual({ products: {}, loading: false });
    });

    it('should load products by repository', () => {
        const length = 10;
        const mockList: Product[] = ProductListMother.random(length);
        productRepositoryMock.getProducts.and.returnValue(of(mockList));

        store.dispatch(new LoadProductsAction());

        expect(productRepositoryMock.getProducts).toHaveBeenCalled();
    });

    it('should save list product as dictionary', () => {
        const length = 10;
        const mockList: Product[] = ProductListMother.random(length);
        const mockDict = mockList.reduce((dict, product) => ({ ...dict, [product.id]: product }), {});
        productRepositoryMock.getProducts.and.returnValue(of(mockList));

        store.dispatch(new LoadProductsAction());

        const { products }: IProductState = store.selectSnapshot(ProductState);
        expect(Array.isArray(products)).toBeFalsy();

        expect(products).toEqual(mockDict);
    });

    it('should set loading when is doing get product', fakeAsync(() => {
        const mockList: Product[] = ProductListMother.random();
        productRepositoryMock.getProducts.and.returnValue(of(mockList).pipe(delay(1000)));

        store.dispatch(new LoadProductsAction());
        let loading: boolean;
        loading = store.selectSnapshot(ProductSelector.isLoading);
        expect(loading).toBeTrue();

        tick(1000);
        loading = store.selectSnapshot(ProductSelector.isLoading);
        expect(loading).toBeFalse();
    }));
});
