import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipedemoComponent } from './pipedemo.component';
import { DecimalFractionPipe } from './decimal-fraction.pipe';



@NgModule({
  declarations: [
    PipedemoComponent,
    DecimalFractionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipedemoComponent
  ]
})
export class PipesModule { }
