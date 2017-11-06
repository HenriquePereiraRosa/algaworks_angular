import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nome = 'Henrique';
  idade = 100;

  getIdade() {
    return this.idade;
  }
}
