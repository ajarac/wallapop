import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListConfig } from '@shared/models/list.config';

@Component({
    selector: 'app-dynamic-list',
    templateUrl: 'dynamic-list.component.html',
    styleUrls: ['./dynamic-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicListComponent<T> implements OnInit {
    @Input() list: Array<T>;
    @Input() listConfig: ListConfig<T>;

    dataSource: MatTableDataSource<T>;

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<T>(this.list);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
