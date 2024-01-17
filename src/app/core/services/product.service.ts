import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getLimitedProducts(limit: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?limit=${limit}`);
  }

  getSortedProducts(sort: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?sort=${sort}`);
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  getProductsInCategory(category: string, limit?: number, sort?: string): Observable<Product[]> {
    const params = [`category=${category}`];
    if (limit) params.push(`limit=${limit}`);
    if (sort) params.push(`sort=${sort}`);

    const queryString = params.join('&');
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}?${queryString}`);
  }

  addNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }
}
