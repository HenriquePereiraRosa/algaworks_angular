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

  getIdade() {
    return this.idade;
  }

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
  }

}
