import { User } from '@auth/models/auth.model';
import { Action } from '@ngrx/store';

export const SET_USER = '[Auth] Set user';
export const CLEAR_USER = '[Auth] Clear user';

export class SetUser implements Action {
  public readonly type = SET_USER;
  public constructor(public payload: User) {}
}
export class ClearUser implements Action {
  public readonly type = CLEAR_USER;
}

export type AuthActions = ClearUser | SetUser;
