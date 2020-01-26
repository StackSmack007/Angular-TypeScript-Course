import { Component } from '@angular/core';

@Component({
  selector: 'don-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DonUni';
  constructor(){
    console.log(localStorage);
  }
}
