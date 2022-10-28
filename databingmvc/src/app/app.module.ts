import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation/interpolation.module';
import { PostsModule } from './posts/posts.module';
import { AttributebindingModule } from './attributebinding/attributebinding.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    PostsModule,
    AttributebindingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
