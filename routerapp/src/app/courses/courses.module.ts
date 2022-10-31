import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { AngularcourseComponent } from './angularcourse.component';
import { ReactcourseComponent } from './reactcourse.component';
import { JavacourseComponent } from './javacourse.component';


@NgModule({
  declarations: [
    CoursesComponent,
    AngularcourseComponent,
    ReactcourseComponent,
    JavacourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [
    AngularcourseComponent,
    ReactcourseComponent,
    JavacourseComponent
  ]
})
export class CoursesModule { }
