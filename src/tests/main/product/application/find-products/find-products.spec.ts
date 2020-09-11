import { of } from 'rxjs';

import { FindProductsUseCase } from '@product/application/find-products/find-products.use-case';
import { Product } from '@product/domain/product';

import { ProductListMother } from './product-list.mother';

describe('[PRODUCTS] Find Products', () => {
    let useCase: FindProductsUseCase;
    let productRepositoryMock;

    beforeEach(() => {
        productRepositoryMock = jasmine.createSpyObj('productRepository', ['getAll']);

        useCase = new FindProductsUseCase(productRepositoryMock);
    });

    it('should get all products', () => {
        const length = 20;
        const mockList: Product[] = ProductListMother.random(length);
        productRepositoryMock.getAll.and.returnValue(of(mockList));

        useCase.execute().subscribe((list: Product[]) => {
            expect(Array.isArray(list)).toBeTruthy();
            expect(list.length).toBe(20);
        });
    });
});
