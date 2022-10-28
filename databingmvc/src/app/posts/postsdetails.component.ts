import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postsdetails',
  templateUrl: './postsdetails.component.html',
  styleUrls: ['./postsdetails.component.css']
})
export class PostsdetailsComponent implements OnInit {

  @Input()
  posts!:Array<any>

  constructor() { }

  ngOnInit(): void {
  }

}
