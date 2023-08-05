import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (): any => {
  const router = inject(Router);

  if (localStorage.getItem('isLoggedIn') === 'true') {
    return true;
  }

  return router.parseUrl('/login');
};
