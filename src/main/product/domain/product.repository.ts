import { Observable } from 'rxjs';

import { Product } from './product';

export interface ProductRepository {
    getAll(): Observable<Product[]>;
}
