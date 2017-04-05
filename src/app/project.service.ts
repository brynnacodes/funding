import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
    console.log(this.projects);
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: number) {
    return this.angularFire.database.object('projects/' + projectId);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
 }
