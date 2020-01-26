import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { IUserResponseInfo } from '../../components/shared/models/user-responseInfo';


@Injectable()
export class AuthorisationInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.authService.isAuthenticated()) {
            return next.handle(req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                    'Content-Type': 'application/json'
                }
            })).pipe(tap(resp => {
                if (resp instanceof HttpResponse && resp.body["_kmd"] && resp.body["_kmd"]["authtoken"]) {
                    this.authService.saveUserInfo(resp.body as IUserResponseInfo);
                }
            }))
        }

        return next.handle(req.clone({
            setHeaders:{
                'Authorization': `Kinvey ${localStorage.getItem('token')}`
            }
        }));
    }
}