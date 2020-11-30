import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { BlogService } from "./../services/blog.service";
import { BlogModel } from '../model/blog.model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  newBlog: BlogModel[];

  fetchBlog(){
    this.blogService.getBlog().subscribe((data: BlogModel[])=>{
      this.newBlog = data;
      
      console.log(data);
    })
  }



  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchBlog();
  }

}
