import { User } from '@auth/models/auth.model';
import * as fromActions from '@auth/store/actions/auth.actions';

export interface State {
  user: User;
}

const initialUserState: State = {
  user: null
};

export function userReducer(state = initialUserState, action: fromActions.AuthActions): State {
  switch (action.type) {
    case fromActions.SET_USER: {
      return {
        ...state,
        user: action.payload
      };
    }

    case fromActions.CLEAR_USER: {
      return {
        ...state,
        user: null
      };
    }

    default:
      return state;
  }
}
