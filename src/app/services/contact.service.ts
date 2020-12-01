import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // URL to connect to the (node) server.
  // Change this to connect to the Cloud server.
  uri: "http://localhost:3000";

  //stores contacts's details.
  newContact: ContactModel[];

  getContact(){
    return this.http.get(`${this.uri}/contact`);
  }

  constructor(private http: HttpClient) { }
}
