import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostCanLoadGuard implements CanLoad {

  constructor(private authService: AuthService) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
    return this.authService.isAuthenticated();
  }
}
