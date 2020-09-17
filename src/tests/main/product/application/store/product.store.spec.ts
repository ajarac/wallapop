import { random } from 'faker';
import { of } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { LoadProductsAction } from '@product/application/store/product.action';
import { ChangeFavoriteProductAction } from '@product/application/store/product.action';
import { ProductSelector } from '@product/application/store/product.selector';
import { IProductState, ProductState } from '@product/application/store/product.state';
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

        expect(state).toEqual({ products: {} });
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

    it('should change favorite product by action', () => {
        const length = 10;
        const mockList: Product[] = ProductListMother.random(length, { favorite: false });
        productRepositoryMock.getProducts.and.returnValue(of(mockList));
        store.dispatch(new LoadProductsAction());
        const products: Product[] = store.selectSnapshot(ProductSelector.list);
        const product: Product = random.arrayElement(products);

        store.dispatch(new ChangeFavoriteProductAction(product, true));

        const favoriteProducts: Product[] = store.selectSnapshot(ProductSelector.listFavorite);
        const favoriteProduct: Product = favoriteProducts.find(({ id }: Product) => id === product.id);
        expect(favoriteProduct).toEqual({ ...product, favorite: true });
    });
});
