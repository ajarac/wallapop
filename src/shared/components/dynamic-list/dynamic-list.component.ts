import { NgForOfContext } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListConfig } from '@shared/models/list.config';
import { IOrderList, OrderDirectionEnum } from '@shared/models/order-list.model';

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

    optionsOrderList: IOrderList<T>[] = [];

    dataSource: MatTableDataSource<T> = new MatTableDataSource([]);

    ngAfterViewInit(): void {
        this.buildPaginator();
        this.buildSort();
        this.buildOrderOptions();
    }

    onChangeSort({ value }: { value: IOrderList<T> }): void {
        if (value) {
            this.dataSource.sort.sort({ id: value.property as string, start: value.direction, disableClear: true });
        } else {
            this.defaultSort();
        }
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    private buildPaginator(): void {
        this.dataSource.paginator = this.paginator;
    }

    private buildSort(): void {
        const sorteable: Map<string, MatSortable> = new Map<string, MatSortable>();
        this.listConfig.forEach(({ property }: ListConfigProperty<T>) =>
            sorteable.set(property as string, { id: property as string, start: 'asc', disableClear: true }),
        );
        const sort: MatSort = new MatSort();
        sort.sortables = sorteable;
        this.dataSource.sort = sort;
        this.defaultSort();
    }

    private buildOrderOptions(): void {
        this.optionsOrderList = this.listConfig.reduce(
            (orderList: IOrderList<T>[], config: ListConfigProperty<T>) => [
                ...orderList,
                { ...config, direction: OrderDirectionEnum.ASC },
                { ...config, direction: OrderDirectionEnum.DESC },
            ],
            [],
        );
    }

    private defaultSort(): void {
        this.dataSource.sort.sort({ id: null, start: null, disableClear: true });
    }
}
