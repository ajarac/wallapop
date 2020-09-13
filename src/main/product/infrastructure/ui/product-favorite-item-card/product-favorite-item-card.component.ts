import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@product/domain/product';

@Component({
    selector: 'app-product-favorite-item-card',
    templateUrl: 'product-favorite-item-card.component.html',
    styleUrls: ['./product-favorite-item-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFavoriteItemCardComponent {
    @Input() product: Product;

    @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();

    clickDelete(): void {
        this.deleteProduct.emit(this.product);
    }
}
