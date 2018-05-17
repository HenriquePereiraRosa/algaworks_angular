import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  // styleUrls: ['./employee-card.component.css']
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: dodgerblue;
    }
      `]
})

export class EmployeeCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('obj') employee: any;

  constructor() { }

  ngOnInit() {
  }

  getCardStyles() {
    return {
      backgroundColor: (this.employee.id % 2) === 0 ? 'lavender' : 'lavenderblush'};
  }

  isAdmin() {
    return this.employee.nome.startsWith('T');
  }

}
