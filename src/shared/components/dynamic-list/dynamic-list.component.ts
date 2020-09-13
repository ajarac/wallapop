import { NgForOfContext } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-dynamic-list',
    templateUrl: 'dynamic-list.component.html',
    styleUrls: ['./dynamic-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicListComponent<T> {
    @Input() set list(value: Array<T>) {
        this.dataSource.data = value;
    }

    @ContentChild(TemplateRef) templateItem: TemplateRef<NgForOfContext<T>>;

    dataSource: MatTableDataSource<T> = new MatTableDataSource([]);

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
