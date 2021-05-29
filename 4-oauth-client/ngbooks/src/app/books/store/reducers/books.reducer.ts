import { Book } from '@books/models/book.model';
import * as fromActions from '@books/store/actions/books.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Book> {}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = bookAdapter.getInitialState({});

export function booksReducer(state = initialState, action: fromActions.BooksActions): State {
  switch (action.type) {
    case fromActions.ADD_BOOK: {
      return bookAdapter.addOne(action.payload.book, state);
    }
    case fromActions.SET_BOOK: {
      return bookAdapter.setOne(action.payload.book, state);
    }
    case fromActions.UPDATE_BOOK: {
      return bookAdapter.updateOne(action.payload.book, state);
    }
    case fromActions.DELETE_BOOK: {
      return bookAdapter.removeOne(action.payload.id, state);
    }
    case fromActions.LOAD_BOOKS_SUCCESS: {
      return bookAdapter.setAll(action.payload.books, state);
    }
    case fromActions.CLEAR_BOOKS: {
      return bookAdapter.removeAll({ ...state });
    }
    default:
      return state;
  }
}
