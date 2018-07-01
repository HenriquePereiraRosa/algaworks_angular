import { environment } from './../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeUrl = `${environment.apiUrl}/tokens`;

  constructor(private http: AuthHttp,
              private auth: AuthService) { }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
      .toPromise()
      .then(() => {
        this.auth.deleteAccessToken();
      });
  }
}
