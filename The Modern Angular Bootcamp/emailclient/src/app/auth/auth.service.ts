import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";

interface UsernameAvailableResponse {
  available: boolean;
}

export interface SignupCredentials {
  username: string,
  password: string,
  passwordConfirmation: string
}

export interface SigninCredentials {
  username: string,
  password: string
}

interface SigninResponse {
  username: string
}

interface SignupResponse {
  username: string
}

interface SignedinResponse {
  authenticated: boolean,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedin$ = new BehaviorSubject<boolean | null>(null);
  rootUrl = 'https://api.angular-email.com';
  username: string = '';

  constructor(private http: HttpClient) {
  }

  usernameAvailable(username: string) {
    return this.http
      .post<UsernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
        username
      });
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(({username}) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  signin(credentials: SigninCredentials) {
    return this.http
      .post<SigninResponse>(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap(({username}) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  signout() {
    return this.http
      .post(`${this.rootUrl}/auth/signout`, {})
      .pipe(
        tap(() => {
          this.signedin$.next(false)
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({authenticated, username}) => {
          this.signedin$.next(authenticated);
          this.username = username;
        })
      )
  }
}
