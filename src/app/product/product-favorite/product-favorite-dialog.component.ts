import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-product-favorite-dialog',
    templateUrl: 'product-favorite-dialog.component.html',
    styleUrls: ['./product-favorite-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFavoriteDialogComponent {}
