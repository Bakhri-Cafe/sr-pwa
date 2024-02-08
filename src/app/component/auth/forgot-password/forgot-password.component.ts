import { Component } from '@angular/core';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AUTH_CONSTANT } from '../../../../util/constants';

@Component({
  selector: 'sr-forgot-password',
  standalone: true,
  imports: [FloatingInputComponent, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  FORGOT_PASSWORD = AUTH_CONSTANT.forgotPassword
  forgotPasswordForm
  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      username: ['', Validators.required]
    })
  }
}