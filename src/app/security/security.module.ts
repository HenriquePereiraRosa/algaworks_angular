import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { JwtModule } from '@auth0/angular-jwt';

import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';
import { environment } from './../../environments/environment';

export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),

    InputTextModule,
    ButtonModule,

    SecurityRoutingModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
    AuthGuard,
    LogoutService,
    HttpClient
  ]
})
export class SecurityModule { }
