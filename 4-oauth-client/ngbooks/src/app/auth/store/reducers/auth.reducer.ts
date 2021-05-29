import * as fromUser from '@auth/store/reducers/user.reducer';

export const authReducerName = 'auth';

export interface State {
  userData: fromUser.State;
}

export const authReducers = {
  userData: fromUser.userReducer
};
