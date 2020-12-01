import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BlogService } from './../services/blog.service';
import { AboutModel } from './../model/about.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  newAbout: AboutModel[];

  fetchAbout(){
    this.blogService.getContact().subscribe((data: AboutModel[])=> {
      this.newAbout = data;
      console.log(data);
    })
  }

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchAbout();
  }

}
