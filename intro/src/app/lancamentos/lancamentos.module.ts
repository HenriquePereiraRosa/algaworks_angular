import { LancamentoGridComponent } from './lancamento-grid/lancamento-grid.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LancamentosPesquisaComponent,
    LancamentoCadastroComponent,
    LancamentoGridComponent,
  ],
  exports: [
  LancamentosPesquisaComponent,
  LancamentoCadastroComponent
  ]
})
export class LancamentosModule { }
