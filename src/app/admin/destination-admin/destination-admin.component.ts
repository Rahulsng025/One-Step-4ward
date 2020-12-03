import { Component, OnInit } from '@angular/core';
import { DestinationModel } from './../../model/destination.model';
import { BlogService } from './../../services/blog.service';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-destination-admin',
  templateUrl: './destination-admin.component.html',
  styleUrls: ['./destination-admin.component.scss']
})
export class DestinationAdminComponent implements OnInit {
  newDestination: DestinationModel[];

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchDestination();
  }

  fetchDestination(){
    this.blogService.getDestination().subscribe((data: DestinationModel[]) => {
      this.newDestination = data;
      console.log(data);
    });
  }

  deleteDestination(id: String){
    this.blogService.deleteDestination(id).pipe(mergeMap(() => this.blogService.getDestination()))
    .subscribe((newDestination: DestinationModel[])=>{
      console.log(newDestination);
      this.newDestination = newDestination;
    });
  }

}
