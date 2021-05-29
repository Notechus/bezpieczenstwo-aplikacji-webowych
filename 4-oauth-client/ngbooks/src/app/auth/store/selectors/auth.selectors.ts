import { User } from '@auth/models/auth.model';
import { authReducerName, State } from '@auth/store/reducers/auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUserState = createFeatureSelector<any, State>(authReducerName);

export const getUser = createSelector(
  getUserState,
  (state: State): User => {
    return state.userData.user;
  }
);
