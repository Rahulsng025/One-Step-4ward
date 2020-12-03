import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from './../model/blog.model';
import { DestinationModel } from '../model/destination.model';
import { ContactModel } from './../model/contact.model';
import { AboutModel } from './../model/about.model';
import { Observable } from 'rxjs';

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

  
  //Services of blog component
  getBlog(){
    return this.http.get(`${this.uri}/blog`);
  }
  getBlogById(Id: any){
    return this.http.get(`${this.uri}/blog/${Id}`);
  }
  addBlog(newBlog: BlogModel){
    return this.http.post(`${this.uri}/blog`, this.newBlog);
  }
  deleteBlog(_id: String): Observable<any>{
    return this.http.delete(`${this.uri}/blog/${_id}`);
  }


  //Services of Destination component
  getDestination(){
    return this.http.get(`${this.uri}/destination`);
  }
  getDestinationById(Id: any){
    return this.http.get(`${this.uri}/destination/${Id}`);
  }
  addDestination(newDestination: DestinationModel) {
    return this.http.post(`${this.uri}/blog`, this.newDestination);
  }
  deleteDestination(_id: String): Observable<any>{
    return this.http.delete(`${this.uri}/destination/${_id}`);
  }

  //Services of Contact component
  getContact(){
    return this.http.get(`${this.uri}/contact`);
  }
  getContactById(Id: any){
    return this.http.get(`${this.uri}/contact/${Id}`);
  }
  addContact(newContact: ContactModel){
    return this.http.post(`${this.uri}/contact`, this.newContact);
  }
  deleteContct(_id: String){
    return this.http.delete(`${this.uri}/contact/${_id}`);
  }

  //Services of About component
  getAbout(){
    return this.http.get(`${this.uri}/about`);
  }
  getAboutById(Id: any){
    return this.http.get(`${this.uri}/about/${Id}`);
  }
  addAbout(newAbout: AboutModel){
    return this.http.post(`${this.uri}\about`, this.newAbout)
  }
  deleteAbout(_id: String){
  return this.http.delete(`${this.uri}/about/${_id}`);
  }

}
