import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastId = 0;
  title = 'Application';
  nome = 'Henrique';
  idade = 27;
  added = false;
  employees = [];

  getIdade() {
    return this.idade;
  }

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.added = true;
    this.employees.push({
      id: ++this.lastId, 
      nome: this.nome
    });
  }

}
