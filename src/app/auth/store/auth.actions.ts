import { Action } from '@ngrx/store';

export const TRYSIGNUP = 'TRYSIGNUP';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const TRYSIGNIN = 'TRYSIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
  readonly type = TRYSIGNUP;

  constructor(public payload: { username: string, password: string }) {}
}

export class Signup implements Action {
  readonly type = SIGNUP;
}

export class TrySignin implements Action {
  readonly type = TRYSIGNIN;

  constructor(public payload: { username: string, password: string }) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions =
  Signup | Signin | Logout | SetToken | TrySignup | TrySignin;
