import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  //state/model declaration : string,number,boolean
  message: string = 'Hello'
  name: string = 'Subramanian'
  status:boolean =true

  constructor() { }

  ngOnInit(): void {
  }

}
