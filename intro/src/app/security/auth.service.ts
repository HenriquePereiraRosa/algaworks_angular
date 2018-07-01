import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  oauthTokenUrl = `${environment.apiUrl}/oauth/token`; // 'http://localhost:8080/oauth/token';
  jwtPayLoad: any;

  constructor(private http: Http, private jwtHelper: JwtHelper) {
    this.loadToken();
   }

  login(email: string, password: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-ulrencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy');

    const body = `username=${email}&password=${password}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body,
                    {headers, withCredentials: true})
      .toPromise()
      .then(response => {
        console.log(response);
        this.saveToken(response.json().access_token);
      })
      .catch(response => {
        console.log(response);
        if (response.status === 400) {
          const responseJson = response.json();
          if (responseJson.error() === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválidos!');
          }
        }
        return Promise.reject(response);
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

  getNewAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlenconded');
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy');

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthTokenUrl, body,
                    {headers, withCredentials: true})
    .toPromise()
    .then(response => {
      this.saveToken(response.json().access_token);
      console.log('Access_token renovado!');
      return Promise.resolve(null);
    })
    .catch(response => {
      console.log('Erro ao renovar token.', response);
      return Promise.resolve(null);
    });
  }

  isAccessTokenValid() {
    const token = localStorage.getItem('token');
    return token || !this.jwtHelper.isTokenExpired(token);
  }
}
