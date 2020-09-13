import { NgForOfContext } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListConfig } from '@shared/models/list.config';

import { ListConfigProperty } from './../../models/list.config';

@Component({
    selector: 'app-dynamic-list',
    templateUrl: 'dynamic-list.component.html',
    styleUrls: ['./dynamic-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicListComponent<T> implements AfterViewInit {
    @Input() set list(value: Array<T>) {
        this.dataSource.data = value;
    }
    @Input() listConfig: ListConfig<T>;

    @Input() trackFn: (value: T) => any;

    @ContentChild(TemplateRef) templateItem: TemplateRef<NgForOfContext<T>>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource: MatTableDataSource<T> = new MatTableDataSource([]);

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        const sorteable: Map<string, MatSortable> = new Map<string, MatSortable>();
        this.listConfig.forEach(({ property }: ListConfigProperty<T>) =>
            sorteable.set(property as string, { id: property as string, start: 'asc', disableClear: true }),
        );
        const sort: MatSort = new MatSort();
        sort.sortables = sorteable;
        this.dataSource.sort = sort;
        this.onChangeSort({ value: null });
    }

    onChangeSort({ value }: { value: keyof T }): void {
        this.dataSource.sort.sort({ id: value as string, start: 'asc', disableClear: true });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
