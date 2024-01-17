import {Component, Input} from '@angular/core';
import {Product} from "../../core/models/product";
import {ActivatedRoute, Route, Router} from "@angular/router";
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  {

  @Input({required: true}) product: Product = {} as Product;

  constructor(private router: Router, private route: ActivatedRoute) { }

  routeToCategory(category: string) {
    this.router.navigate(['category', category])
  }
}
