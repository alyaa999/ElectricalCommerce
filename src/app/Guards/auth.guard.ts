import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.isLoggIn.value){
    console.log(authService.isLoggIn.value);
      return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};
