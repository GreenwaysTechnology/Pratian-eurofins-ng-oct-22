import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter.component';
import { UserComponent } from './user.component';
import { TodosComponent } from './todos.component';



@NgModule({
  declarations: [
    GreeterComponent,
    UserComponent,
    TodosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreeterComponent,
    UserComponent,
    TodosComponent
  ]
})
export class InterpolationModule { }
