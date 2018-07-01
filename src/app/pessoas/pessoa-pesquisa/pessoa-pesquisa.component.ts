import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  title = 'Pessoas Application';
  nome = 'Henrique';
  idade = 27;

  pessoas = [];

  constructor() { }

  ngOnInit() {
  }

}
