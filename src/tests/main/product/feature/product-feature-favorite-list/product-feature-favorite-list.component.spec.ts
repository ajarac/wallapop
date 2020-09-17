import { Product } from '@product/domain/product';
// tslint:disable-next-line: max-line-length
import { ProductFeatureFavoriteListComponent } from '@product/feature/product-feature-favorite-list/product-feature-favorite-list.component';

import { ProductMother } from './../../domain/product.mother';

describe('ProductFeatureFavoriteListComponent', () => {
    let component: ProductFeatureFavoriteListComponent;

    let productServiceMock;

    beforeEach(() => {
        productServiceMock = jasmine.createSpyObj('productService', ['list$', 'changeFavorite']);
        component = new ProductFeatureFavoriteListComponent(productServiceMock);
    });

    it('should hide favorite on change favorite', () => {
        const product: Product = ProductMother.random();

        component.changeFavorite(product);

        expect(productServiceMock.changeFavorite).toHaveBeenCalledWith(product, false);
    });
});
