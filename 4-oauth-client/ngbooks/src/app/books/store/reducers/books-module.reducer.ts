import * as fromBooksSearch from '@books/store/reducers/books-search.reducer';
import * as fromBook from '@books/store/reducers/books.reducer';
import * as fromBookshelf from '@books/store/reducers/bookshelf.reducer';

export const booksModuleName = 'booksModule';

export interface State {
  bookshelf: fromBookshelf.State;
  book: fromBook.State;
  search: fromBooksSearch.State;
}

export const booksModuleReducers = {
  bookshelf: fromBookshelf.bookshelfReducer,
  book: fromBook.booksReducer,
  search: fromBooksSearch.booksSearchReducer
};
