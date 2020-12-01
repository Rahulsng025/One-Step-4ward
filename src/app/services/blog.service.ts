import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from './../model/blog.model';
import { DestinationModel } from '../model/destination.model';
import { ContactModel } from './../model/contact.model';
import { AboutModel } from './../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // URL to connect to the (node) server.
  // Change this to connect to the Cloud server.
  uri = "http://localhost:3000";

  //stores blog's details.
  newBlog: BlogModel[];
  newDestination: DestinationModel[];
  newContact: ContactModel[];
  newAbout: AboutModel[];

  constructor(private http: HttpClient) { }

  getBlog(){
    return this.http.get(`${this.uri}/blog`);
  }
  getDestination(){
    return this.http.get(`${this.uri}/destination`);
  }
  getContact(){
    return this.http.get(`${this.uri}/contact`);
  }
  getAbout(){
    return this.http.get(`${this.uri}/about`);
  }

}
