export class Project {
  public $key: string;
constructor(public title: string, public author: string, public description: string, public image: string, public totalFunding: number, public currentFunding: number, public categories: string[]) {}
}
