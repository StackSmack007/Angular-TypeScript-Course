import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'don-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logoutUser().subscribe(_ => {
      this.router.navigate(["/index"]);
    })
    console.log("manqk spasqvai sa umrqha mi hromozomite...")
  }

}
