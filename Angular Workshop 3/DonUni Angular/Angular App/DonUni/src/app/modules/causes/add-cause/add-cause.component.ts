import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CausesService } from 'src/app/services/causes.service';

@Component({
  selector: 'don-add-cause',
  templateUrl: './add-cause.component.html',
  styleUrls: ['./add-cause.component.css']
})
export class AddCauseComponent implements OnInit {
  public f: FormGroup

  constructor(private fb: FormBuilder,
    private causeService: CausesService,
    private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  unsuccessfullLoginMessage: string = null;

  buildForm() {
    this.f = this.fb.group({
      cause: ["", [Validators.required, Validators.minLength(4)]],
      pictureURL: ["", [Validators.required, , Validators.pattern('(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})')]],
      neededFunds: ["", [Validators.required, Validators.min(0)]],
      description: ["", [Validators.required, Validators.minLength(50)]],
    })
  }

  getCtrl(ctrl: string) { return this.f.get(ctrl) }

  touchedInvalid(ctrl: string): boolean {
    return this.f.get(ctrl).touched && this.f.get(ctrl).invalid
  }

  sendCause() {
    const new_cause = { ...this.f.value, ...{ collectedFunds: 0, donors: [] } }
    this.causeService.createOne<any>(new_cause).subscribe(data => {
      this.router.navigate(['/cause/details/',data["_id"]]);
    //  this.router.navigate(['cause/all']);
    }, console.error)
  }
}