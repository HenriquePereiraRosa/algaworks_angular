import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})

export class EmployeeCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('obj') employee: any;

  constructor() { }

  ngOnInit() {
  }

}
