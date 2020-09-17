import { Product } from '@product/domain/product';
import { ProductFeatureListComponent } from '@product/feature/product-feature-list/product-feature-list.component';

import { ProductMother } from './../../domain/product.mother';

describe('ProductFeatureListComponent', () => {
    let component: ProductFeatureListComponent;

    let productServiceMock;

    beforeEach(() => {
        productServiceMock = jasmine.createSpyObj('productService', ['list$', 'changeFavorite']);
        component = new ProductFeatureListComponent(productServiceMock);
    });

    it('should change favorite when receive change favorite', () => {
        const product: Product = ProductMother.random();

        component.changeFavorite(product);

        expect(productServiceMock.changeFavorite).toHaveBeenCalledWith(product, !product.favorite);
    });
});
