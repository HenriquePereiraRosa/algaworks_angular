import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { ApiHttp } from './api-http';
import { environment } from './../../environments/environment';

@Injectable()
export class LogoutService {

  tokensRevokeUrl: string;

  constructor(private http: ApiHttp,
              private auth: AuthService) {
    this.tokensRevokeUrl = `${environment.apiUrl}/token`;
               }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
      .toPromise()
      .then(() => {
        this.auth.deleteAccessToken();
      });
  }
}
