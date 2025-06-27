import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  //intento obtener el token
  const token = localStorage.getItem('token')

  if(token) {
    router.navigate(['product-list'])
    return false
  }else{
    return true
  }
};
