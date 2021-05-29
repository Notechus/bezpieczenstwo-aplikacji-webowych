import { Book, BookshelfIdWithTitle, BookshelfItem } from '@books/models/book.model';
import { booksModuleName, State } from '@books/store/reducers/books-module.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getBooksState = createFeatureSelector<State>(booksModuleName);

export const getBooks = createSelector(
  getBooksState,
  (state: State): Book[] => Object.values(state.book.entities)
);
