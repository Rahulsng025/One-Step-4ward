import { Component, OnInit } from '@angular/core';
import { BlogModel } from './../../model/blog.model';
import { BlogService } from './../../services/blog.service';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {
  newBlog: BlogModel[];

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchBlog();
  }
  
  fetchBlog(){
    this.blogService.getBlog().subscribe((data: BlogModel[]) => {
      this.newBlog = data;
      console.log(data);
    });
  }

  deleteBlog(id: String){
    this.blogService.deleteBlog(id).pipe(mergeMap(() => this.blogService.getBlog()))
    .subscribe((newBlog: BlogModel[])=>{
      console.log(newBlog);
      this.newBlog = newBlog;
    });
  }

}
