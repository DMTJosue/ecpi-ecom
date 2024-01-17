import { Component, OnInit } from '@angular/core';
import {ProductItemComponent} from "../components/product-item/product-item.component";
import { Product } from "../../core/models/product";
import {ProductService} from "../../core/services/product.service";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: value => this.products = value,
      error: err => alert('une erreur est survenue!')
    })
  }



}
