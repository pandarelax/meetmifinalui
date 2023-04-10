import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './login.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>('https://localhost:7061/api/auth/login', {
        email,
        password,
      })
      .pipe(
        tap((data) => {
          this.accessToken = data.accessToken;
          localStorage.setItem('accessToken', this.accessToken);
        })
      );
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  logout() {
    localStorage.removeItem('accessToken');
  }

  signUp(user: User) {
    return this.http.post<User>('https://localhost:7061/api/User', user);
  }
}
