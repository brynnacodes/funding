import { Injectable } from '@angular/core';
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

//   save project(project) {
//     this.projects.push('project');
//   }
 }
