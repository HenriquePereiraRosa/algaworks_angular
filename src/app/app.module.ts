import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { PessoaPesquisaComponent } from './pessoas/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { LancamentoService } from './lancamentos/lancamento.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SecurityModule } from './security/security.module';
import { LoginComponent } from './security/login/login.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisaComponent } from './lancamentos/lancamento-pesquisa/lancamento-pesquisa.component';
import { PessoaService } from './pessoas/pessoa.service';

const routes: Routes = [
  {path: '', component: LoginComponent}, // ToDo: Change this to Login!!!
  {path: 'login', component: LoginComponent},
  {path: 'lancamento', component: LancamentoPesquisaComponent},
  {path: 'lancamento/novo', component: LancamentoCadastroComponent},
  {path: 'pessoa', component: PessoaPesquisaComponent},
  {path: 'pessoa/novo', component: PessoaCadastroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,            // Enable Forms #fromAngular
    HttpModule,

    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TabViewModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    BrowserAnimationsModule,  // Solve some Rendering problems
    DropdownModule,
    CurrencyMaskModule,       // Mask for Currency
    InputMaskModule,          // To create an input Mask
    ToastyModule.forRoot(),
    RouterModule.forRoot(routes),

    LancamentosModule,
    PessoasModule,
    SharedModule,
    CoreModule,
    SecurityModule
  ],
  providers: [
    LancamentoService,
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
