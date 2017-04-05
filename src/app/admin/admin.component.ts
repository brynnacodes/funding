import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {
  @Output() newProjectSender = new EventEmitter();
  updateCheckedCat = [];

  constructor(public ProjectService: ProjectService) { }

  ngOnInit() {
  }

  check(category) {
    console.log(category);
    this.updateCheckedCat.push(category);
  }

  submitForm(title: string, author: string, description: string, image: string, totalFunding: number, currentFunding: number) {
    let newProject = {
      title: title,
      author: author,
      description: description,
      image: image,
      totalFunding: totalFunding,
      currentFunding: currentFunding,
      categories: this.updateCheckedCat
    };

    // this.ProjectService.saveProject(newProject);
  }

  public categories = [
    { value: 'environment', display: 'Environment'},
    { value: 'science', display: 'Science'},
    { value: 'outer-space', display: 'Outer Space'},
    { value: 'education', display: 'Education'},
    { value: 'arrogant', display: 'Arrogant'},
    { value: 'creative', display: 'Creative'},
    { value: 'travel', display: 'Travel'},
    { value: 'medical', display: 'Medical'},
    { value: 'events', display: 'Events'},
    { value: 'charity', display: 'Charity'}
  ];
}
