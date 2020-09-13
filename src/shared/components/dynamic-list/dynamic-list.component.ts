import { NgForOfContext } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListConfig } from '@shared/models/list.config';

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
    @Input() listConfig: ListConfig<T>;

    @Input() trackFn: (value: T) => any;

    @ContentChild(TemplateRef) templateItem: TemplateRef<NgForOfContext<T>>;

    dataSource: MatTableDataSource<T> = new MatTableDataSource([]);

    onChangeSort({ value }: MatSelectChange): void {
        console.log(value);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
