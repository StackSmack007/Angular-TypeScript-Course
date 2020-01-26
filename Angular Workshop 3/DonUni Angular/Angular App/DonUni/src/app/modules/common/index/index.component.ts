import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'don-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private authService: AuthenticationService) { }




  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
  }

}
