import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'don-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public f: FormGroup
  public mismatch: boolean;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {

    this.f = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]],
      repassword: ["", [Validators.required]],
    })
  }

  get username() { return this.f.get("username") }
  get email() { return this.f.get("email") }
  get password() { return this.f.get("password") }
  get repassword() { return this.f.get("repassword") }

  checkPwdsMatch() {

    if (this.f.get("password").value !== this.f.get("repassword").value) {
      this.mismatch = true;
    }
    else {
      this.mismatch = false
    }
  }

  registerUser() {
    // let result = Object.entries(this.f.controls).map(x => { return [x[0], x[1].errors]});console.log(result)
    this.authService.isUserRegistered(this.f.value.username).subscribe(result => {
      if (result) {
        this.f.controls.username.setValue(`"${this.f.controls.username.value}" is taken...choose another username please!`);
      } else {
        this.authService.registerUser(this.f.value).subscribe(user => {
          this.authService.setUserSession(user);
          this.router.navigate(["/index"]);
        }, catchError)
      }
    })
  }
}