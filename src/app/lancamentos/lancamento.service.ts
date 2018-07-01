import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { ApiHttp } from '../security/api-http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl: string;

  constructor(private http: ApiHttp) {
    this.lancamentoUrl = `${environment.apiUrl}/lancamento`;
    console.log(this.lancamentoUrl);
  }

  pesquisar(): Promise<any> {
    return this.http.get(`${environment.apiUrl}/lancamento`)
        .toPromise()
        .catch(error => {
          alert(error);
        });
  }
}
