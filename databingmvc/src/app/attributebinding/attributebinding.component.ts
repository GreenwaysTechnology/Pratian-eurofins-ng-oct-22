import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styleUrls: ['./attributebinding.component.css']
})
export class AttributebindingComponent implements OnInit {
  imageUrl:string = ".//app/favicon.ico"
  isEnabled:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
