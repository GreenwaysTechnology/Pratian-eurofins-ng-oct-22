import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularcourseComponent } from './angularcourse.component';
import { CoursesComponent } from './courses.component';
import { JavacourseComponent } from './javacourse.component';
import { ReactcourseComponent } from './reactcourse.component';

const routes: Routes = [
  {
    path: '', component: CoursesComponent,
    children: [
      {
        path: '', redirectTo: 'angular', pathMatch: 'full'
      },
      {
        path: 'angular', component: AngularcourseComponent
      },

      {
        path: 'react', component: ReactcourseComponent
      },
      {
        path: 'java', component: JavacourseComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
