import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './todoslist.component';
import { TododetailsComponent } from './tododetails.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TododetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TodosRoutingModule,
  ],
  exports: [
    TododetailsComponent
  ]
})
export class TodosModule { }
