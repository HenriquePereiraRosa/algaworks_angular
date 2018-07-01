import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { JwtHelper } from 'angular2-jwt';

import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastyModule } from 'ng2-toasty';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { PessoaService } from './../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { AuthService } from './../security/auth.service';
import { NaoAutorizadoComponent } from './nao-autorizado';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
  ],
  providers: [
    LancamentoService,
    PessoaService,
    ErrorHandlerService,
    AuthService,
    JwtHelper
  ]
})
export class CoreModule { }
