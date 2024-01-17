import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { Cart } from '../../core/models/cart';
import { CartService } from '../../core/services/cart.service';
@Component({
  selector: 'app-carts-page',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './carts-page.component.html',
  styleUrl: './carts-page.component.scss'
})
export class CartsPageComponent implements OnInit {
  
  carts: Cart[] = [];
  constructor (private cartService : CartService){}

  ngOnInit() {
    this.cartService.getCarts().subscribe({
      next : value => this.carts = value,
      error(err) {
          alert('une erreur est survenue!')
      },
    })
  }
  
  

}
