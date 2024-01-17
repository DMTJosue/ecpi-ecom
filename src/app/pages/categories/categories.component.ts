import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../core/services/product.service";
import {Product} from "../../core/models/product";
import {ProductItemComponent} from "../components/product-item/product-item.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  category = '';
  products: Product[] = [];

  constructor(private activeRoute: ActivatedRoute,
              private productService: ProductService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe({
      next: value => this.category = value['id'] as string
    });
    this.productService.getProductsInCategory(this.category)
      .subscribe({
        next: (value) => this.products = value,
        error: (err) => alert('Une erreur est survenue. ' + err)
      })
  }
}
