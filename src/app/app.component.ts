import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-inventory';
}
