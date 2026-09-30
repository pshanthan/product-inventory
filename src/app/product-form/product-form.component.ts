import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  productForm = new FormGroup({
    name: new FormControl('', (Validators.required, Validators.nullValidator)),
    price: new FormControl('', (Validators.required, Validators.nullValidator)),
    quantity: new FormControl(
      '',
      (Validators.required, Validators.nullValidator),
    ),
  });
}
