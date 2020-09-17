import { random } from 'faker';
import { Observable, of } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { Actions, NgxsModule, ofActionDispatched } from '@ngxs/store';
import { ProductService } from '@product/application/service/product.service';
import { LoadProductsAction } from '@product/application/store/product.action';
import { ChangeFavoriteProductAction } from '@product/application/store/product.action';
import { Product } from '@product/domain/product';
import { PRODUCT_REPOSITORY } from '@product/domain/product.repository';

import { ProductMother } from './../../domain/product.mother';
import { ProductListMother } from '../../domain/product-list.mother';

describe('[PRODUCT] ProductService', () => {
    let service: ProductService;
    let actions$: Actions;
    let productRepositoryMock;
    beforeEach(() => {
        productRepositoryMock = jasmine.createSpyObj('repository', ['getProducts']);
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([])],
            providers: [
                ProductService,
                {
                    provide: PRODUCT_REPOSITORY,
                    useValue: productRepositoryMock,
                },
            ],
        });

        actions$ = TestBed.inject(Actions);
        service = TestBed.inject(ProductService);
    });

    it('should dispatch load products', () => {
        actions$.pipe(ofActionDispatched(LoadProductsAction)).subscribe((action) => {
            expect(action instanceof LoadProductsAction).toBeTruthy();
        });

        service.loadProducts();
    });

    it('should dispatch a change favorite product', () => {
        const product: Product = ProductMother.random();

        actions$.pipe(ofActionDispatched(ChangeFavoriteProductAction)).subscribe((action) => {
            expect(action instanceof ChangeFavoriteProductAction);
        });

        service.changeFavorite(product, random.boolean());
    });

    it('should get products list', () => {
        const length = 10;
        const mockList: Product[] = ProductListMother.random(length);
        productRepositoryMock.getProducts.and.returnValue(of(mockList));

        const list$: Observable<Product[]> = service.list$;
        list$.subscribe((list: Product[]) => {
            expect(list.length).toBe(10);
            expect(list).toEqual(mockList);
        });
        service.loadProducts();
    });

    it('should get products favorite list', () => {
        const length = 10;
        const mockList: Product[] = ProductListMother.random(length);
        const favList: Product[] = mockList.filter(({ favorite }: Product) => favorite);
        productRepositoryMock.getProducts.and.returnValue(of(mockList));

        const favoriteList$: Observable<Product[]> = service.listFavorite$;
        favoriteList$.subscribe((list: Product[]) => {
            expect(list.length).toBe(favList.length);
            expect(list).toEqual(favList);
        });
        service.loadProducts();
    });
});
