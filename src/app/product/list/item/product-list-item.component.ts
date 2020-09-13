import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@product/domain/product';

@Component({
    selector: 'app-product-list-item',
    templateUrl: 'product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListItemComponent {
    @Input() product: Product;
}
