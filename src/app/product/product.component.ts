import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProductFavoriteDialogComponent } from './product-favorite/product-favorite-dialog.component';

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    constructor(public dialog: MatDialog) {}

    openFavorite(): void {
        this.dialog.open(ProductFavoriteDialogComponent, {
            width: 'auto',
        });
    }
}
