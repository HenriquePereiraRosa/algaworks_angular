import { AppRountingModule } from './app-rounting.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { LancamentoService } from './lancamentos/lancamento.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SecurityModule } from './security/security.module';
import { PessoaService } from './pessoas/pessoa.service';

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

    LancamentosModule,
    PessoasModule,
    SharedModule,
    CoreModule,
    SecurityModule,
    AppRountingModule
  ],
  providers: [
    LancamentoService,
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
