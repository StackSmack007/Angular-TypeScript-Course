import { Component, DoCheck } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  isLoggedIn: boolean;
  constructor(
    private authService: AuthService,
  ) { }
  ngDoCheck() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
