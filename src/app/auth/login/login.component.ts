import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
  }

  private _initForm() {
    this.formGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  public onSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }

  }

  public onReset(): void {
    // Reset Form
    this.formGroup.reset();
  }

  ngOnInit() {
    this._initForm()
  }

  ngOnDestroy() {
  }

}
