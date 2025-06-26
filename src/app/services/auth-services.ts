import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Auth } from '../interfaces/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServices {

  private apiUrl: string = 'https://login-products.onrender.com/api/'

  constructor(private http: HttpClient) {}

  login(emailFromParameter: string, passwordFromParameter: string): Observable<Auth> {
    const url = this.apiUrl + 'auth/login'

    const body = {
      email : emailFromParameter,
      password: passwordFromParameter
    }

    return this.http.post<Auth>(url, body)
  }
}
