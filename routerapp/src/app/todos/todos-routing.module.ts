import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TododetailsComponent } from './tododetails.component';
import { TodoListComponent } from './todoslist.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'details/:id', component: TododetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
