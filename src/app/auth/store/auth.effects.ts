import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as AuthActions from './auth.actions';
import * as firebase from 'firebase';

import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRYSIGNUP)
    .map((action: AuthActions.TrySignup) => {
      return action.payload
    })
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(
        authData.username, authData.password
      ))
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken())
    })
    .mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ]
    });

  @Effect()
  authSignin = this.actions$
    .ofType(AuthActions.TRYSIGNIN)
    .map((action: AuthActions.TrySignin) => {
      return action.payload
    })
    .switchMap((authData: {username: string, password: string}) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword(
        authData.username, authData.password
      ));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken())
    })
    .mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.SIGNIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ]
    });

  @Effect({dispatch: false})
  authLogout = this.actions$
    .ofType(AuthActions.LOGOUT)
    .switchMap(() => {
      return fromPromise(firebase.auth().signOut());
    })
    .do(() => {
      this.router.navigate(['/'])
    });

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}
