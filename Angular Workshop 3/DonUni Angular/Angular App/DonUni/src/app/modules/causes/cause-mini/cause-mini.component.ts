import { Component, OnInit, Input } from '@angular/core';
import { ICauseMini } from 'src/app/Interfaces/icauseMini';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'don-cause-mini',
  templateUrl: './cause-mini.component.html',
  styleUrls: ['./cause-mini.component.css']
})
export class CauseMiniComponent implements OnInit {
  @Input()
  cause: ICauseMini

  public isAuthenticated: boolean;
  constructor(authS: AuthenticationService) {
    this.isAuthenticated = authS.isAuthenticated();
    console.log(this.isAuthenticated);
  }

  ngOnInit() {
  }

}
