import { HttpEventType, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const succesHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastrService)

  return next(req).pipe(
    tap(response => {
      if (response.type === HttpEventType.Response) {
        const httpResponse = response as HttpResponse<any>
        if (httpResponse.ok){
          
          const message = httpResponse.body.message!
          toast.success(message)
        }
      }
    })
  )
};
