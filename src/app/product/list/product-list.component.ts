import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@product/application/service/product.service';
import { Product } from '@product/domain/product';

@Component({
    selector: 'app-product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
    products$: Observable<Product[]> = this.productService.list$;

    constructor(private productService: ProductService) {}

    changeFavorite(product: Product): void {
        const isFavorite = !product.favorite;
        this.productService.changeFavorite(product, isFavorite);
    }

    trackFn(product: Product): string {
        return product.id;
    }
}
