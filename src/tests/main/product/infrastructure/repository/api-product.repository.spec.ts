import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CONFIG_ENVIRONMENT_TOKEN } from '@core/config/config.environment';
import { Environment } from '@env/environment.model';
import { Product } from '@product/domain/product';
import { ApiProductRepository } from '@product/infrastructure/repository/api-product.repository';
import { ApiProduct, ApiProductResponse } from '@product/infrastructure/repository/api-product.response';
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

    it('should adapter api response to domain Mapper', () => {
        const apiResponse: ApiProduct = ApiProductResponseMother.random();
        const id = 'test-id';

        const product: Product = ProductMapper.toDomain(apiResponse, id);

        expect(product).toEqual({
            title: apiResponse.title,
            description: apiResponse.description,
            price: apiResponse.price,
            email: apiResponse.email,
            image: apiResponse.image,
            id: 'test-id',
            favorite: false,
        });
    });

    it('should return an observable of products list', () => {
        const apiProductResponseMock: ApiProductResponse = ApiProductResponseMother.randomList();

        repository.getProducts().subscribe((products: Product[]) => {
            const listProductDomain: Product[] = apiProductResponseMock.items.map((apiProduct: ApiProduct, index: number) =>
                ProductMapper.toDomain(apiProduct, products[index].id),
            );
            expect(Array.isArray(products)).toBeTruthy();
            expect(products.length).toBe(apiProductResponseMock.items.length);

            expect(products).toEqual(listProductDomain);
        });

        const req = httpMock.expectOne(`${configMock.api}items.json`);
        expect(req.request.method).toBe('GET');
        req.flush(apiProductResponseMock);
    });
});
