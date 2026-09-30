import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  productForm = new BehaviorSubject([
    {
      name: 'Shirt',
      price: 300,
      quantity: 2,
    },
  ]);
  getProducts(): Observable<Product[]> {
    return this.productForm;
  }
}
