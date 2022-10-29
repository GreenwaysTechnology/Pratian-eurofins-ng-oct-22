import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventhandlingComponent } from '../eventhanlding/eventhandling.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from '../eventhanlding/parent.component';
import { ChildComponent } from '../eventhanlding/child.component';



@NgModule({
  declarations: [
    EventhandlingComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    EventhandlingComponent,
    ParentComponent,
    ChildComponent
  ]
})
export class EventhandlingModule { }
