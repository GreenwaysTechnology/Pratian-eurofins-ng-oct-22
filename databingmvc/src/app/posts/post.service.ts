import { Injectable } from "@angular/core";
import { POSTS } from "./post-mock";

//post service class

@Injectable()
export class PostService {
    constructor() { }
    //methods
    public getPosts(): Array<any> {
        return POSTS
    }
}