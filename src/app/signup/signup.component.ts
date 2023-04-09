import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  photoUrl?: string;
  accessToken?: string;
  refreshToken?: string;
  refreshTokenEndDate?: Date;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    const firstName = this.signUpForm.get('firstName')?.value;
    const lastName = this.signUpForm.get('lastName')?.value;
    const email = this.signUpForm.get('email')?.value;
    const phoneNumber = this.signUpForm.get('phoneNumber')?.value;
    const password = this.signUpForm.get('password')?.value;

    const user: User = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    this.authService.signUp(user).subscribe(
      (result) => {
        this.router.navigate(['/meetings']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
