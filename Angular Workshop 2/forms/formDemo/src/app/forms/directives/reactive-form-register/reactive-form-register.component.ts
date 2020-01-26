import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-reactive-form-register",
  templateUrl: "./reactive-form-register.component.html",
  styleUrls: ["./reactive-form-register.component.css"]
})
export class ReactiveFormRegisterComponent {
  public f: FormGroup;

  phoneCodes: string[] = ["+971", "+359", "+972", "+198", "+701"];
  positions: string[] = ["Designer", "Manager", "Accounting"];

  constructor(private fb: FormBuilder) {

    this.buildForm();
  }

  buildForm() {
    this.f = this.fb.group({
      fullname: [
        "",
        [Validators.required, Validators.pattern("[A-Z][a-z]+\\s[A-Z][a-z]+")]
      ],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["888", [Validators.required, Validators.pattern("d{9}")]],
      ph_area: "",
      position: ["", [Validators.required, Validators.pattern("d{9}")]],
      // passwords: this.fb.group({
        pas1: [
          "",
          [Validators.required, Validators.pattern("[dA-Za-z]{3,16}")]
        ],
        pas2: ["", [Validators.required, Validators.pattern("[dA-Za-z]{3,16}")]],
      // }),
      pic: ["", [Validators.required]]
    });
    this.f.get("ph_area").setValue(this.phoneCodes[0]);
    this.f.get("position").setValue(this.positions[0]);
  }

  register(v) {
    console.log(v);
  }
}
