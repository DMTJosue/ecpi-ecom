import {Component, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {Product} from "../../../core/models/product";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input({required: true}) product: Product = {} as Product;

  constructor(private router: Router, private route: ActivatedRoute) { }

  routeToCategory(category: string) {
    this.router.navigate(['category', category])
  }

}
