import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  name: any = 'Subramanain'

  //onSend is name of the event where parent listens
  @Output()
  onSend = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  public sendToParent() {
    //emit data
     this.onSend.emit(this.name)
     this.name = ''
  }

}
