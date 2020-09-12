import { random } from 'faker';

import { Product } from '@product/domain/product';

import { ProductMother } from '../domain/product.mother';

export class ProductListMother {
    static random(length: number = random.number({ min: 1, max: 50 })): Product[] {
        return new Array(length).fill('').map(() => ProductMother.random());
    }
}
