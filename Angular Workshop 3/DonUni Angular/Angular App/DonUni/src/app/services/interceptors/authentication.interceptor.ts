import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { apiUserPaths, kinveySettings } from '../../keyVault/kinveyData'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiPathsWithBasicKinveyAuth = [apiUserPaths.userLoginPath, apiUserPaths.userNameExistingCheckPath, apiUserPaths.userRegisterPath];
    if (apiPathsWithBasicKinveyAuth.includes(req.url)) {
      return next.handle(req.clone(
        { headers: req.headers.set('Authorization', kinveySettings.appAuth) }
      ))
    } else if (this.authService.isAuthenticated()) {
      return next.handle(req.clone(
        { headers: req.headers.set('Authorization', this.authService.currentUser.authToken) }
      ))
    }

    if ((req.url.endsWith("/causes") && req.method === "GET")) {
      return next.handle(req.clone(
        { headers: req.headers.set('Authorization', kinveySettings.guestAuth) }
      ))
    }
    return next.handle(req.clone());
  }
}