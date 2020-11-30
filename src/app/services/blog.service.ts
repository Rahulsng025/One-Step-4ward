import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from './../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // URL to connect to the (node) server.
  // Change this to connect to the Cloud server.
  uri = "http://localhost:3000";

  //stores blog's details.
  newBlog: BlogModel[];

  constructor(private http: HttpClient) { }

  getBlog(){
    return this.http.get(`${this.uri}/blog`);
  }

}
