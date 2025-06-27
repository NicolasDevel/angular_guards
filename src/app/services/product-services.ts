import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listProducts } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {

  private apiUrl: string = 'https://login-products.onrender.com/api/'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<listProducts> {
    const token = localStorage.getItem('token')
    return this.http.get<listProducts>(this.apiUrl + 'product')
  }
}
