import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'don-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public f: FormGroup
  public mismatch: boolean;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
    this.toastr.toastrConfig.closeButton = true;
  }

  buildForm() {
    this.f = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(4)]],
    })
  }

  get username() { return this.f.get("username") }
  get password() { return this.f.get("password") }


  loginUser() {
    this.authService.loginUser(this.f.value).subscribe(data => {
      this.authService.setUserSession(data);
      this.logedInSuccessfully();
      this.router.navigate(["/index"]);
    }, () => {
      this.failedLogin();
    })
  }

  private logedInSuccessfully() {
    this.toastr.success('Welcome ${this.f.value.username}', `Successfull Login`);
  }

  private failedLogin() {
    this.toastr.error('UserName Or Password Mismatch!', `Unsuccessfull Login`);
  }
}