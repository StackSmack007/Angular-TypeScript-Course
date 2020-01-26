import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ErrorNotifyInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req.clone()).pipe(catchError((e:HttpErrorResponse) => {
       
                this.toastr.error(`Bad Response: ${e.statusText} ; ${e.message} !`, "Misfortune!")
            console.error(e.message);
            throw e;
        }));
    }
}