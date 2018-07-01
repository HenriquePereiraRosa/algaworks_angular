import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit {

  title = 'Lançamentos Application';
  nome = 'Henrique';
  idade = 27;

  lancamentos = [];

  constructor(private lancamentoService: LancamentoService,
    private toasty: ToastyService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentoService.pesquisar()
      .then(lancamentos => this.lancamentos = lancamentos);
  }

  getIdade() {
    return this.idade;
  }

}
