import {Component} from '@angular/core';
import {HeaderService} from 'common-code-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private headerService: HeaderService) {

  }

  getUsers() {
    this.headerService.userLogin().subscribe((returnData) => {
      console.log('returnData', returnData);
    });
  }

}
