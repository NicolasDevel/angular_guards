import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

  //clonar la petición original para poder modificarla
  //Las peticiones http en angular son INMUTABLES

  //obtengo el token
  const token = localStorage.getItem('token')

  if(token){ //valido si el token existe
    const cloneRequest = req.clone({
    setHeaders: {
        'Authorization' : 'Bearer '+token
      }
    })

    return next(cloneRequest)
  }

  return next(req);
};
