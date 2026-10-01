import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  private products = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: 'Shirt',
      price: 300,
      quantity: 2,
    },
  ]);
  getProducts(): Observable<Product[]> {
    return this.products.asObservable();
  }
  addProduct(p: Product) {
    p.id = Date.now();
    const currentList = this.products;
    this.products.next([...currentList.value, p]);
  }
  updateProduct(updated: Product) {
    const current = this.products.value;
    const nextList = current.map((p) => (p.id === updated.id ? updated : p));
    this.products.next(nextList);
  }
}
