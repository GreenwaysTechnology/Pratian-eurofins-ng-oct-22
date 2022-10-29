import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipedemoComponent } from './pipedemo.component';



@NgModule({
  declarations: [
    PipedemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipedemoComponent
  ]
})
export class PipesModule { }
