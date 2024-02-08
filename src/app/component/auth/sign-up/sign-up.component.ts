import { Component } from '@angular/core';
import { FloatingInputComponent } from '../../shared/type-head/floating-input/floating-input.component';
import { AUTH_CONSTANT } from '../../../../util/constants';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/microservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sr-sign-up',
  standalone: true,
  imports: [FloatingInputComponent, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  SIGNUP_CONSTANT = AUTH_CONSTANT.signUp
  signupForm;
  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    });
  }

  handleOnSubmit() {
    const { username, password, name } = this.signupForm.value
    if (username && password && name) {
      this.userService.signUp(name, username, password).subscribe(
        {
          next: data => this.router.navigate(['admin']),
          error: error => {
            console.log(error);
          }
        }
      );
    }
  }
}