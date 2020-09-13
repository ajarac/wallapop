import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@product/domain/product';

@Component({
    selector: 'app-product-item-card',
    templateUrl: 'product-item-card.component.html',
    styleUrls: ['./product-item-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemCardComponent {
    @Input() product: Product;
    @Output() changeFavorite: EventEmitter<Product> = new EventEmitter<Product>();

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map((result) => result.matches));

    constructor(private breakpointObserver: BreakpointObserver) {}
    toggleFavorite(): void {
        this.changeFavorite.emit(this.product);
    }
}
