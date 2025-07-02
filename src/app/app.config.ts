import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';
import { errorHandlingInterceptor } from './interceptors/error-handling-interceptor';
import { succesHandlingInterceptor } from './interceptors/succes-handling-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authTokenInterceptor, errorHandlingInterceptor, succesHandlingInterceptor])),
    provideAnimations(),
    provideToastr({
      timeOut: 3000, // 3 segundos // Cuanto tiempo dura la notificación
      positionClass: 'toast-bottom-center', // La notificación se vera en la parte inferior centrada
      preventDuplicates: true, 
      progressBar: true
    }),
  ]
};
