import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../models/Product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { QueueAction } from 'rxjs/internal/scheduler/QueueAction';
@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {}
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
  editingId: number | null = null;
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.editingId = Number(idParam);
      this.productService.getProducts().subscribe((products) => {
        const found = products.find((p) => p.id === this.editingId);
        if (found) {
          this.productForm.patchValue({
            name: found.name,
            price: String(found.price),
            quantity: String(found.quantity),
          });
        }
      });
    }
  }
  onSubmit() {
    const raw = this.productForm.getRawValue();
    const newProduct: Product = {
      name: raw.name,
      price: Number(raw.price),
      quantity: Number(raw.quantity),
    };
    if (this.editingId) {
      newProduct.id = this.editingId;
      this.productService.updateProduct(newProduct);
    } else {
      this.productService.addProduct(newProduct);
    }
    this.productForm.reset();
  }
}
