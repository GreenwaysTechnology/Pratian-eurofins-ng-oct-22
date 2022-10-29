import { Component, OnInit } from '@angular/core';
import { Post } from './Post.form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
  .ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
  }
 .ng-invalid:not(form)  {
   border-left: 5px solid #a94442; /* red */
 }

  `
  ]
})
export class FormComponent implements OnInit {
  //create model object
  post = new Post(Math.random(), Math.random(), "Angular Forms", "Angular is good for forms")
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.post)
  }

}
