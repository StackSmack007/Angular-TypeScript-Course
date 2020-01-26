import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CausesService } from 'src/app/services/causes.service';
import { ICauseMini } from 'src/app/Interfaces/icauseMini';

@Injectable({
  providedIn: 'root'
})
export class LoadCausesResolver implements Resolve<ICauseMini[]> {
  constructor(private causesService: CausesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICauseMini[]> {
    return this.causesService.getAll<ICauseMini[]>()
  }
}