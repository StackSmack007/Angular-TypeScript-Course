import { Directive, Input } from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";

@Directive({
  selector: "[appValPath]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidPathDirective,
      multi: true
    }
  ]
})
export class ValidPathDirective implements Validator {
  
  @Input()
  extns: string = "";

  @Input()
  startsAllowed: string = "http,https";

  constructor() {}
  validate(control: AbstractControl): ValidationErrors {
    return (!control.value||control.value.match(this.pattern()))
      ? null
      : {
          path: `Path must start with one of [${this.startsAllowed}] and end with one of [${this.extns}]`
        };
  }

  private pattern(): RegExp {
    const delimiter=")|(";
    return new RegExp(
      `((${this.startsAllowed.split(",").join(delimiter)}))\:+\.((${this.extns
        .split(",")
        .join(delimiter)}))`
    );
  }
}
