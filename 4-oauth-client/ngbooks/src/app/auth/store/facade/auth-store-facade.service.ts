import { Injectable } from '@angular/core';
import { User } from '@auth/models/auth.model';
import * as fromActions from '@auth/store/actions/auth.actions';
import { State } from '@auth/store/reducers/auth.reducer';
import * as authSelectors from '@auth/store/selectors/auth.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export interface AuthStoreFacadeServiceInterface {
  getUser$: Observable<User>;
  updateUser(user: User): void;
  clearUser(): void;
}

@Injectable({
  providedIn: 'root'
})
export class AuthStoreFacadeService implements AuthStoreFacadeServiceInterface {
  public getUser$: Observable<User> = this.store.select(authSelectors.getUser);

  public constructor(protected store: Store<State>) {}

  public updateUser(user: User): void {
    this.store.dispatch(new fromActions.SetUser(user));
  }

  public clearUser(): void {
    this.store.dispatch(new fromActions.ClearUser());
  }
}
