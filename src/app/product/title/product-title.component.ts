import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@product/application/service/product.service';
import { Product } from '@product/domain/product';

@Component({
    selector: 'app-product-title',
    templateUrl: 'product-title.component.html',
    styleUrls: ['./product-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTitleComponent {
    countFavorites$: Observable<number> = this.productService.listFavorite$.pipe(map((list: Product[]) => list.length));

    constructor(private productService: ProductService) {}
}
