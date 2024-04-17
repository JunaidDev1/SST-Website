import { Component } from '@angular/core';
import { DataHelperService } from './data-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sst-website';

  onActivate(event: any) {
    window.scroll(0, 0);
  }

  constructor(
    public dataHelper: DataHelperService
  ) {

  }

}
