import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/microservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sr-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  loginForm: FormGroup;
  constructor(private router: Router,private userService: UserService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false, Validators.required]
    });
  }

  onSubmit() {
    const { username, password, rememberMe } = this.loginForm.value
    if (username && password) {
      this.userService.signIn(username, password, rememberMe).subscribe(
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