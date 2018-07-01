import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit, Injectable } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.auth.login(email, password)
      .then(() => {
        // this.router.navigate(['/lancamento']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }
}
