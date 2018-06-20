import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  title = 'Application';
  nome = 'Henrique';
  idade = 27;
  employees = [];

  
  getIdade() {
    return this.idade;
  }

}
