import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-eventhandling',
  templateUrl: './eventhandling.component.html',
  styles: ['.selected {background-color:yellow; font-size:30px; }']
})
export class EventhandlingComponent implements OnInit {

  posts!: Array<any>
  selectedpost!:any

  text1:string=''
  text2:any =''

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  //methods
  public onClick() {
    console.log('button is clicked')
  }
  public onData(data: string) {
    console.log(data)
  }
  public onSelectedPost(post:any){
     console.log(post)
     this.selectedpost = post
  }
  //get user Input
  public getInput(evt:any){
      console.log('input listener')
      //how to access the texbox inside listener
      this.text1 = evt.target.value
  }
}
