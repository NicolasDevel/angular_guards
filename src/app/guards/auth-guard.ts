import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  //Obtengo el dichoso token
  const token = localStorage.getItem('token')

  //Injectar por dependencia Router
  const router = inject(Router)

  //Valido si el token es diferente a null
  if (token){
    return true
  }else {
    router.navigate([''])
    return false
  }
};
