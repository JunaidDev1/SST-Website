import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sst-website';

  constructor() {

  }

  onActivate(event) {
    window.scroll(0, 0);
  }


  submit(value){
    alert(value);
  }
  ngSubmit(form){
    console.log(form.form.value);
  }
}
