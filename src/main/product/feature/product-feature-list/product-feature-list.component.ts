import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@product/application/service/product.service';
import { Product } from '@product/domain/product';
import { ListConfig } from '@shared/models/list.config';

@Component({
    selector: 'app-product-feature-list',
    templateUrl: 'product-feature-list.component.html',
    styleUrls: ['./product-feature-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFeatureListComponent {
    products$: Observable<Product[]> = this.productService.list$;

    listConfig: ListConfig<Product> = [
        {
            title: 'Title',
            property: 'title',
        },
        {
            title: 'Description',
            property: 'description',
        },
        {
            title: 'Price',
            property: 'price',
        },
        {
            title: 'Email',
            property: 'email',
        },
    ];

    constructor(private productService: ProductService) {}

    changeFavorite(product: Product): void {
        const isFavorite = !product.favorite;
        this.productService.changeFavorite(product, isFavorite);
    }

    trackFn(product: Product): string {
        return product.id;
    }
}
