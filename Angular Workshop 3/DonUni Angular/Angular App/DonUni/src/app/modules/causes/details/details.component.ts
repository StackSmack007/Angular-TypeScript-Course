import { Component, OnInit } from '@angular/core';
import { ICause } from 'src/app/Interfaces/Icause';
import { ActivatedRoute, Router } from '@angular/router';
import { CausesService } from 'src/app/services/causes.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/Interfaces/user.info';
import { Idonator } from 'src/app/Interfaces/idonator';

@Component({
  selector: 'don-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  public f: FormGroup
  public cause: ICause = null;
  private causeId: string = null;
  public currentUserInfo: UserInfo = null;
  constructor(private router: Router, route: ActivatedRoute, private causesService: CausesService, authService: AuthenticationService, private fb: FormBuilder) {
    this.causeId = route.snapshot.params.id;
    this.currentUserInfo = authService.currentUser;
    this.buildForm();
  }

  buildForm() {
    this.f = this.fb.group({
      currentDonation: ["", [Validators.required, Validators.min(1)]],
    })
  }

  get currentDonation() { return this.f.get("currentDonation") }

  ngOnInit() {
    this.causesService.getById<ICause>(this.causeId).subscribe(cause => {
      this.cause = cause;
      console.log(cause);
    });
  }

  deleteCause() {
    this.causesService.deleteById(this.causeId).subscribe(() => {
      this.router.navigate(["/cause/all"]);
    })

  }

  donate() {
    let donation: number = this.f.value.currentDonation;
    let currentUserDonator: Idonator = this.cause.donors.find(x => x.id === this.currentUserInfo.id);
    if (currentUserDonator) {
      currentUserDonator.ammount += this.f.value.currentDonation;

    } else {
      currentUserDonator = { id: this.currentUserInfo.id, username: this.currentUserInfo.username, ammount: donation }
      this.cause.donors.push(currentUserDonator);
    }
    this.cause.collectedFunds = this.cause.donors.reduce((acc, next) => acc + next.ammount, 0);
    // this.cause.donors=[]; this.cause.collectedFunds=0;
    this.causesService.update(this.causeId, this.cause).subscribe(console.log);
  }

  editCause() {
    this.router.navigate(["cause/edit", this.causeId]);
  }
}
