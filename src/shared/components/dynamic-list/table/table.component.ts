import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListConfig, ListConfigProperty } from '@shared/models/list.config';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['./table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnInit {
    @Input() list: Array<T>;
    @Input() listConfig: ListConfig<T>;

    displayedColumns: string[];
    dataSource: MatTableDataSource<T>;

    ngOnInit(): void {
        this.displayedColumns = this.listConfig.map(({ title }: ListConfigProperty<T>) => title);
    }
}
