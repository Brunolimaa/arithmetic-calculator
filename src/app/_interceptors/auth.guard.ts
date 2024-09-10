import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().pipe(
      take(1),
      map(isAuth => !!isAuth),
      tap(isAuth => {
        if (!isAuth) {
          // Redirect to login if not authenticated
          this.router.navigate(['/home']);
        }
      })
    );
  }
}
