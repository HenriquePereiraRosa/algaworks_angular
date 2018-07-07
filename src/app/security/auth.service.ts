import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  oauthTokenUrl: string;
  jwtPayLoad: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.loadToken();
   }

   login(user: string, password: string): Promise<void> {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/x-www-form-urlencoded')
        .append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy');

    const body = `username=${user}&password=${password}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.saveToken(response.access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }
        return Promise.reject(response);
      });
  }

  getNewAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
          .append('Content-Type', 'application/x-www-form-urlenconded')
          .append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy');

    const body = 'grant_type=refresh_token';

    return this.http.post<any>(this.oauthTokenUrl, body,
                    {headers, withCredentials: true})
    .toPromise()
    .then(response => {
      this.saveToken(response.access_token);
      console.log('Access_token renovado!');
      return Promise.resolve(null);
    })
    .catch(response => {
      console.log('Erro ao renovar token.', response);
      return Promise.resolve(null);
    });
  }

  private saveToken(token: string) {
    this.jwtPayLoad = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.saveToken(token);
    }
  }

  deleteAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayLoad = null;
  }

  hasPermition(permissao: string) {
    return this.jwtPayLoad &&
        this.jwtPayLoad.authorities.includes(permissao);
  }

  hasAnyPermition(roles) {
    for (const role of roles) {
      if (this.hasAnyPermition(role)) {
        return true;
      }
    }
    return false;
  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }
}
