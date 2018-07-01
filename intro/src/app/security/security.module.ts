import { Http, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';
import { ApiHttp } from './api-http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';

export function authHttpServiceFactory(auth: AuthService, http: Http, options: RequestOptions) {
    const config = new AuthConfig({
      globalHeaders: [
        {'Content-Type': 'application/json'}
      ]
    });
    return new ApiHttp(auth, config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,

    InputTextModule,
    ButtonModule,

    SecurityRoutingModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [
        AuthService,
        Http,
        RequestOptions
      ]
    },
    AuthGuard,
    LogoutService
  ]
})
export class SecurityModule { }
