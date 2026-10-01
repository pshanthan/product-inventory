import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../models/Product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  constructor(private productService: ProductService) {}
  productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    price: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    quantity: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  onSubmit() {
    const raw = this.productForm.getRawValue();
    const newProduct: Product = {
      name: raw.name,
      price: Number(raw.price),
      quantity: Number(raw.quantity),
    };
    this.productService.addProduct(newProduct);
    this.productForm.reset();
  }
}
