import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICause } from 'src/app/Interfaces/Icause';
import { CausesService } from 'src/app/services/causes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'don-edit-cause',
  templateUrl: './edit-cause.component.html',
  styleUrls: ['./edit-cause.component.css']
})
export class EditCauseComponent {
  public f: FormGroup
  cause: ICause = null;
  private causeId: string = null;
  constructor(private fb: FormBuilder, route: ActivatedRoute, private causeService: CausesService, private router: Router) {
    this.causeId = route.snapshot.params["id"];
    causeService.getById(this.causeId).subscribe(x => {
      this.cause = x;
      this.buildForm();
    })
  }

  buildForm() {
    this.f = this.fb.group({
      cause: [this.cause.cause, [Validators.required, Validators.minLength(4)]],
      pictureURL: [this.cause.pictureURL, [Validators.required, , Validators.pattern('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})')]],
      neededFunds: [this.cause.neededFunds, [Validators.required, Validators.min(0)]],
      description: [this.cause.description, [Validators.required, Validators.minLength(50)]],
    })
  }

  getCtrl(ctrl: string) { return this.f.get(ctrl) }

  touchedInvalid(ctrl: string): boolean {
    return this.f.get(ctrl).touched && this.f.get(ctrl).invalid
  }

  editCause() {

    this.cause = { ...this.cause, ...this.f.value };
    this.causeService.update(this.cause["_id"], this.cause).subscribe(() => {
      this.router.navigate(['/cause/details/', this.causeId]);
      //  this.router.navigate(['cause/all']);
    }, console.error)
  }
}