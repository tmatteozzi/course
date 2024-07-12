import {CanMatchFn, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {take, skipWhile, map, tap} from 'rxjs';
import {inject} from '@angular/core';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signedin$.pipe(
    skipWhile(value => value === null),
    map(value => !!value),
    take(1),
    tap(authenticated => {
      if (!authenticated) {
        router.navigateByUrl('/');
      }
    })
  );
};
