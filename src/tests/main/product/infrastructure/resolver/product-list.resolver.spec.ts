import { ProductListResolver } from '@product/infrastructure/resolver/product-list.resolver';

describe('[PRODUCT] Product List Resolver', () => {
    let resolver: ProductListResolver;
    let productServiceMock;

    beforeEach(() => {
        productServiceMock = jasmine.createSpyObj('productService', ['loadProducts']);

        resolver = new ProductListResolver(productServiceMock);
    });

    it('should resolve loading products', () => {
        productServiceMock.loadProducts.and.callThrough();

        resolver.resolve();

        expect(productServiceMock.loadProducts).toHaveBeenCalled();
    });
});
