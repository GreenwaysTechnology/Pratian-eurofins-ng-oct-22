import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  name:string =''
  constructor() { }

  ngOnInit(): void {
  }

  public onReceive(data:any){
    console.log(data)
    this.name = data
  }

}
