import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/Product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  constructor(public producService: ProductService) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.producService.getProducts().subscribe((p) => (this.products = p));
  }
}
