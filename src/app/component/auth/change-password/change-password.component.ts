import { Component } from '@angular/core';
import { AUTH_CONSTANT } from '../../../../util/constants';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sr-change-password',
  standalone: true,
  imports: [FloatingInputComponent, ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  CHANGE_PASSWORD_CONSTANT = AUTH_CONSTANT.changePassword
  changePasswordForm;
  constructor(private router: Router, private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    });
  }
}