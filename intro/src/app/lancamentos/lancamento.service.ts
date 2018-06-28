import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl = 'https://springbootintro.herokuapp.com/lancamento';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFy');

    return this.http.get(`${this.lancamentoUrl}`, {headers})
        .toPromise().then(response => response.json().content);
  }
}
