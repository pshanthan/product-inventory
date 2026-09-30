import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  getProducts(): Observable<Product[]> {
    return of([
      {
        name: 'Shirt',
        price: 300,
        quantity: 2,
      },
    ]);
  }
}
