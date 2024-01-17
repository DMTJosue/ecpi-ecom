import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts'; 

  constructor(private http: HttpClient) {}

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}`);
  }

  getCartById(cartId: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${cartId}`);
  }

  
}