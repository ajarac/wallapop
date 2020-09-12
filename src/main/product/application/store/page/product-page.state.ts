import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { SetPageListProductAction } from './product-page.action';

interface IProductPageState {
    page: number;
    pageSize: number;
}

@State<IProductPageState>({
    name: 'productPage',
    defaults: {
        page: 1,
        pageSize: 5,
    },
})
@Injectable()
export class ProductPageState {
    @Action(SetPageListProductAction)
    setPage({ patchState }: StateContext<IProductPageState>, { page }: SetPageListProductAction): void {
        patchState({ page });
    }
}
