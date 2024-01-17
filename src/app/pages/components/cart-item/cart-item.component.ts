import { Component , Input} from '@angular/core';
import { Cart } from '../../../core/models/cart';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
 @Input () cart : Cart = {} as Cart; 
  carts: any;

  


}
