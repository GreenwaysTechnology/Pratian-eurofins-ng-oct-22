import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styles: [
  ]
})
export class PipedemoComponent implements OnInit {

  today: any = new Date()

  user = { id: 1, name: 'subramanian' }
  constructor() { }

  ngOnInit(): void {
  }

}
