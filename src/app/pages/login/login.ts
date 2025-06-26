import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AuthServices } from '../../services/auth-services';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = ''
  password: string = ''
  errorMessage: string = ''

  constructor(private authServices: AuthServices, private router: Router) {}



  onLogin(){

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}/

    if(!this.email.trim() || !this.password.trim() || !emailRegex.exec(this.email)){
      this.errorMessage = 'Por favor valida los datos ingresados'
      return 
    }

    this.errorMessage = ''

    this.authServices.login(this.email, this.password).subscribe({
      next: (response) => {
        const tokenVariable = response.token
        const user = response.user

        localStorage.setItem('token', tokenVariable)
        localStorage.setItem('user', JSON.stringify(user))

        this.router.navigate(['product-list'])
      },
      error: (err) => {
        this.errorMessage = err.error.message
      }
    })
  }
}
