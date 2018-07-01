import { Injectable, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment.prod';
import { ApiHttp } from '../security/api-http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaUrl: string;

  constructor(private http: ApiHttp) {
    this.pessoaUrl = `${environment.apiUrl}/pessoa`;
  }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.pessoaUrl}`)
        .toPromise();
  }
}
