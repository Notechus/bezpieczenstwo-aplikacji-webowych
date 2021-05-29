import { BookshelfItem } from '@books/models/book.model';
import * as fromActions from '@books/store/actions/bookshelf.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'dd-MM-yyyy HH:mm:ss';

export interface State extends EntityState<BookshelfItem> {}

export const sortByCreationTime = (a: BookshelfItem, b: BookshelfItem): number => {
  const aDate = dayjs(a.created, DATE_TIME_FORMAT);
  const bDate = dayjs(b.created, DATE_TIME_FORMAT);
  return aDate.isAfter(bDate) ? 1 : -1;
};

export const bookshelfAdapter: EntityAdapter<BookshelfItem> = createEntityAdapter<BookshelfItem>({
  sortComparer: sortByCreationTime
});

export const initialState: State = bookshelfAdapter.getInitialState({});

export function bookshelfReducer(state = initialState, action: fromActions.BookshelfActions): State {
  switch (action.type) {
    case fromActions.ADD_BOOKSHELF: {
      return bookshelfAdapter.addOne(action.payload.bookshelf, state);
    }
    case fromActions.SET_BOOKSHELF: {
      return bookshelfAdapter.setOne(action.payload.bookshelf, state);
    }
    case fromActions.UPDATE_BOOKSHELF: {
      return bookshelfAdapter.updateOne(action.payload.bookshelf, state);
    }
    case fromActions.DELETE_BOOKSHELF: {
      return bookshelfAdapter.removeOne(action.payload.id, state);
    }
    case fromActions.LOAD_BOOKSHELVES_SUCCESS: {
      return bookshelfAdapter.setAll(action.payload.bookshelves, state);
    }
    case fromActions.LOAD_BOOKSHELF_SUCCESS: {
      return bookshelfAdapter.setOne(action.payload.bookshelf, state);
    }
    case fromActions.CLEAR_BOOKSHELVES: {
      return bookshelfAdapter.removeAll({ ...state });
    }
    default:
      return state;
  }
}
