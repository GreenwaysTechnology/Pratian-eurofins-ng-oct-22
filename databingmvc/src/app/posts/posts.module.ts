import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';
import { PostslistComponent } from './postslist.component';
import { PostsdetailsComponent } from './postsdetails.component';
import { PostComponent } from './post.component';



@NgModule({
  declarations: [
    PostslistComponent,
    PostsdetailsComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [PostService],
  exports: [
    PostslistComponent,
    PostsdetailsComponent,
    PostComponent
  ]
})
export class PostsModule { }
