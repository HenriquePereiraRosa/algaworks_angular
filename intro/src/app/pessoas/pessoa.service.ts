import { AuthHttp } from 'angular2-jwt';
import { Injectable, OnInit } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaUrl: string;

  constructor(private http: AuthHttp) {
    this.pessoaUrl = `${environment.apiUrl}/pessoa`;
  }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.pessoaUrl}`)
        .toPromise().then(response => response.json().content);
  }
}
