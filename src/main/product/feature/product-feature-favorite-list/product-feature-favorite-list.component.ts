import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@product/application/service/product.service';
import { Product } from '@product/domain/product';
import { ListConfig } from '@shared/models/list.config';

@Component({
    selector: 'app-product-feature-favorite-list',
    templateUrl: 'product-feature-favorite-list.component.html',
    styleUrls: ['./product-feature-favorite-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFeatureFavoriteListComponent {
    products$: Observable<Product[]> = this.productService.listFavorite$;

    listConfig: ListConfig<Product> = [
        {
            title: 'Title',
            property: 'title',
        },
    ];

    constructor(private productService: ProductService) {}

    changeFavorite(product: Product): void {
        console.log('changeFavorite', product);
        this.productService.changeFavorite(product, false);
    }

    trackFn(product: Product): string {
        return product.id;
    }
}
