import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { ProjectService } from './../project.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ProjectService]
})
export class ListingComponent implements OnInit {
  projects;

  constructor(private ProjectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.ProjectService.getProjects().subscribe( snap => {
      this.projects = snap;
    })
  }

  goToProject(project) {
    console.log(project);
    this.router.navigate(['project', project.$key]);
  };
}
