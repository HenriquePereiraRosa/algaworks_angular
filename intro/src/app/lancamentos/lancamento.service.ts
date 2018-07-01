import { AuthHttp } from 'angular2-jwt';
import { environment } from './../../environments/environment';
import { Injectable, OnInit, Output } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl: string;

  constructor(private http: AuthHttp) {
    this.lancamentoUrl = `${environment.apiUrl}/lancamento`;
    console.log(this.lancamentoUrl);
  }

  pesquisar(): Promise<any> {
    return this.http.get(`${environment.apiUrl}/lancamento`)
        .toPromise().then(response => response.json().content)
        .catch(error => {
          alert(error);
        });
  }
}
