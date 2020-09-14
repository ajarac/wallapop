import { ListConfigProperty } from './list.config';

export enum OrderDirectionEnum {
    ASC = 'asc',
    DESC = 'desc',
}

export interface IOrderList<T> extends ListConfigProperty<T> {
    direction: OrderDirectionEnum;
}
