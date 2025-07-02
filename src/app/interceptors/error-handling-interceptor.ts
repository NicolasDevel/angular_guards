import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {

  const snackBar = inject(ToastrService)


  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      let userNotification = 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo'

      //Distingui si el error proviene de la falta de intenet o alguna vpn
      if (error.error instanceof ErrorEvent) {
        userNotification = 'Error de conexión'
      }else {
        switch(error.status) {
          case 0:
            userNotification = 'Error de conexión, contacte con un administrador'
            break;
            default:
              userNotification = error.error.message
              break;
        }
      }

      snackBar.error(userNotification)

      return throwError(() => new Error(userNotification))
    })
  )
};
