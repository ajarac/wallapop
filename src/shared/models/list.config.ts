export interface ListConfigProperty<T> {
    title: string;
    property: keyof T;
}

export type ListConfig<T> = Array<ListConfigProperty<T>>;
