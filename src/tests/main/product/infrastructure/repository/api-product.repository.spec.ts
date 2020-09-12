import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CONFIG_ENVIRONMENT_TOKEN } from '@core/config/config.environment';
import { Environment } from '@env/environment.model';
import { Product } from '@product/domain/product';
import { ApiProductRepository } from '@product/infrastructure/repository/api-product.repository';
import { ApiProductResponse } from '@product/infrastructure/repository/api-product.response';
import { ProductMapper } from '@product/infrastructure/repository/product.mapper';
import { ConfigMother } from '@tests/core/config/config.mother';

import { ApiProductResponseMother } from './api-product.response.mother';

describe('[PRODUCT] ApiProductRepository', () => {
    let repository: ApiProductRepository;
    let httpMock: HttpTestingController;
    let configMock: Environment;

    beforeEach(() => {
        configMock = ConfigMother.random();
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ApiProductRepository,
                {
                    provide: CONFIG_ENVIRONMENT_TOKEN,
                    useValue: configMock,
                },
            ],
        });

        repository = TestBed.inject(ApiProductRepository);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should return an observable of products list', () => {
        const listMock: ApiProductResponse[] = ApiProductResponseMother.randomList();

        repository.getProducts().subscribe((products: Product[]) => {
            const listProductDomain: Product[] = listMock.map((apiProduct: ApiProductResponse, index: number) =>
                ProductMapper.toDomain(apiProduct, products[index].id),
            );
            expect(Array.isArray(products)).toBeTruthy();
            expect(products.length).toBe(listMock.length);

            expect(products).toEqual(listProductDomain);
        });

        const req = httpMock.expectOne(`${configMock.api}items.json`);
        expect(req.request.method).toBe('GET');
        req.flush(listMock);
    });
});
