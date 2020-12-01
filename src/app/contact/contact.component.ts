import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from './../services/blog.service';
import { ContactModel } from './../model/contact.model'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  newContact: ContactModel[];

  fetchContact() {
    this.blogService.getContact().subscribe((data: ContactModel[]) => {
      this.newContact = data;
      console.log(data);
    })
  }

  constructor(private blogService: BlogService,
  private router: Router) { }

  ngOnInit(): void {
    this.fetchContact();
  }

}
