import { Observable } from 'rxjs';

import { ProductRepository } from './../../domain/product.repository';
import { Product } from '../../domain/product';

export class FindProductsUseCase {
    constructor(private repository: ProductRepository) {}

    execute(): Observable<Product[]> {
        return this.repository.getAll();
    }
}
