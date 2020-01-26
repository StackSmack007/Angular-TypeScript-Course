import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CausesService } from '../services/causes.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CauseAuthorOnly implements CanActivate {

    constructor(private authService: AuthenticationService, private causeService: CausesService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.causeService.getById(next.params["id"]).pipe(map(x => {
            return x["_acl"]["creator"] === this.authService.currentUser.id
        }));
    }
}
