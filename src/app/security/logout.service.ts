import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ApiHttp } from './api-http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeUrl = `${environment.apiUrl}/tokens`;

  constructor(private http: ApiHttp,
              private auth: AuthService) { }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
      .toPromise()
      .then(() => {
        this.auth.deleteAccessToken();
      });
  }
}
