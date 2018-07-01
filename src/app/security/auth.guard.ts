
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
                    : Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.isAccessTokenValid()) {
        if (next.data.role === !this.auth.hasAnyPermition(next.data.roles)) {
          this.router.navigate(['/nao-autorizado']);
          return false;
        }
      } else {
        console.log('Navegação com access token inválido. Obtendo novo token...');
        return this.auth.getNewAccessToken()
        .then(() => {
          if (!this.auth.isAccessTokenValid()) {
            this.router.navigate(['/login']);
            return true;
          }
        });
      }
    return true;
  }
}
