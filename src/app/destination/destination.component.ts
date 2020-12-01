import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DestinationModel } from '../model/destination.model';
import { BlogService } from "./../services/blog.service";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
    
  newDestination: DestinationModel[];

  fetchDestinations(){
    this.blogService.getDestination().subscribe((data: DestinationModel[])=> {
      this.newDestination = data;
      console.log("Sending Data");
      console.log(data);
    })
  }

  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchDestinations();
  }

}
