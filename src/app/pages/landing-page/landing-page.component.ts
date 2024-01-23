import {Component, OnInit} from '@angular/core';
import {Product} from "../../core/models/product";
import { ProductService } from '../../core/services/product.service';
import {ActivatedRoute, Route, Router} from "@angular/router";
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit  {

 
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getLimitedProducts(4).subscribe({
      next: value => this.products = value,
      error: err => alert('une erreur est survenue!')
    })
  }

  
}
