import { Pipe, PipeTransform } from '@angular/core';
import { ProjectService } from './project.service';



@Pipe({
  name: 'totalFunding',
  pure: false
})
export class TotalFundingPipe implements PipeTransform {
  transform(input: any[], desiredProject) {
    if (input) {
    var output: any[] = [];
    if (desiredProject === "lowFundingProjects") {
    for (let i=0; i < input.length; i++) {
      if (input[i].totalFunding < 5000) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredProject === "highFundingProjects") {
    for ( let i = 0; i < input.length; i++) {
      if (input[i].totalFunding >= 5001) {
        output.push(input[i]);
      }
    }
    return output;
    } else {
    return input;
    }
  }
}
}
