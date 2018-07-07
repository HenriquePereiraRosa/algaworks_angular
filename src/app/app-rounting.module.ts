import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './security/login/login.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisaComponent } from './lancamentos/lancamento-pesquisa/lancamento-pesquisa.component';
import { PessoaPesquisaComponent } from './pessoas/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes = [
  {path: '', component: LoginComponent}, // ToDo: Change this to Login!!!
  {path: 'login', component: LoginComponent},
  {path: 'lancamento', component: LancamentoPesquisaComponent},
  {path: 'lancamento/novo', component: LancamentoCadastroComponent},
  {path: 'pessoa', component: PessoaPesquisaComponent},
  {path: 'pessoa/novo', component: PessoaCadastroComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
