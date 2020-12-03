import { Component, OnInit } from '@angular/core';
import { AboutModel } from 'src/app/model/about.model';
import { BlogService } from './../../services/blog.service';
import { Router } from "@angular/router";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-about-admin',
  templateUrl: './about-admin.component.html',
  styleUrls: ['./about-admin.component.scss']
})
export class AboutAdminComponent implements OnInit {
  newAbout: AboutModel[];

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchAbout();
  }
  fetchAbout(){
    this.blogService.getAbout().subscribe((data: AboutModel[]) =>{
      this.newAbout = data;
      console.log(data);
    });
  }

  deleteAbout(id: String){
    this.blogService.deleteAbout(id).pipe(mergeMap(() => this.blogService.getAbout()))
    .subscribe((newAbout: AboutModel[])=> {
      console.log(newAbout);
      this.newAbout = newAbout;
    });
  }

}
