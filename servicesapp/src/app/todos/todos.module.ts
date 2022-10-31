import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { TodolistComponent } from './todolist.component';
import { TododetailsComponent } from './tododetails.component';



@NgModule({
  declarations: [
    TodolistComponent,
    TododetailsComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    TodolistComponent,
    TododetailsComponent
  ]
})
export class TodosModule { }
