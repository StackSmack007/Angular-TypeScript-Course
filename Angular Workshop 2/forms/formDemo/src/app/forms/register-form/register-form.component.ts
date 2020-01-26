import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  constructor() {}
  @ViewChild("f", null)
  f: NgForm;
  phoneCodes: string[] = ["+971", "+359", "+972", "+198", "+701"];
  positions: string[] = ["Designer", "Manager", "Accounting"];
  ngOnInit() {}

  register(v: any) {
    console.log(v);
    this.f.reset();
  }
}
