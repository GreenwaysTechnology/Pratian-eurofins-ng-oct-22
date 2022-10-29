import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  encapsulation:ViewEncapsulation.ShadowDom,
  templateUrl: './post.component.html',
  // styleUrls: ['./post.component.css']
  styles: ['p { color:red; }']
})
export class PostComponent implements OnInit {

  @Input()
  post!: any
  constructor() { }

  ngOnInit(): void {
  }

}
