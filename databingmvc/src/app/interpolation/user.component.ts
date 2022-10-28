import { Component, OnInit } from '@angular/core';
import { User } from './user.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //user object
  user:User = {
    id: 1,
    name: 'Subramanian',
    status: true
  }


  constructor() { }

  ngOnInit(): void {
  }

}
