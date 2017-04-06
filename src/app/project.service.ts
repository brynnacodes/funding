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

  updateProject(localUpdateProject) {
  let projectEntryInFirebase = this.getProjectById(localUpdateProject.$key);
  projectEntryInFirebase.update({title: localUpdateProject.title,
                                author: localUpdateProject.author,
                                description: localUpdateProject.description,
                                image: localUpdateProject.image,
                                totalFunding: localUpdateProject.totalFunding,
                                currentFunding: localUpdateProject.currentFunding,
                                categories: localUpdateProject.categories
                              });
  }

  deleteProject(localProjectToDelete) {
    let projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

  // donate(localDonateProject, newCurrentFunding) {
  //   let projectEntryInFirebase = this.getProjectById(localDonateProject.$key);
  //   projectEntryInFirebase.update({currentFunding: newCurrentFunding});
  // }
 }
