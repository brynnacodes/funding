import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { Project } from './../project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ ProjectService ]
})
export class ProjectDetailComponent implements OnInit {
  projectId: number = null;
  projectToDisplay;
  donation: string;
  currentProject: Project;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

  beginDonateProject() {
    // currentProject: Project;
    this.projectToDisplay.subscribe(project => {
      this.currentProject = new Project(project.title, project.author, project.description, project.image, project.totalFunding, project.currentFunding, project.categories);
      this.currentProject.$key = project.$key;
    });
    this.currentProject.currentFunding += parseInt(this.donation);
    this.donation = null;
    this.projectService.updateProject(this.currentProject);
    }
  }
