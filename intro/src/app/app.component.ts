import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Application';
  nome = 'Henrique';
  idade = 27;
  employees = [];

  getIdade() {
    return this.idade;
  }
}
