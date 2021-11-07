import { Component, Input, OnInit } from '@angular/core';
import { ObjInt } from 'src/app/models/UserObj';

@Component({
  selector: 'ang-user-singles',
  templateUrl: './user-singles.component.html',
  styleUrls: ['./user-singles.component.css'],
})
export class UserSinglesComponent implements OnInit {
  @Input() boxItem: ObjInt[] = [];

  constructor() {}

  ngOnInit(): void {}
}
