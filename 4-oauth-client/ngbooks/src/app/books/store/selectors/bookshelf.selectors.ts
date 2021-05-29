import { BookshelfIdWithTitle, BookshelfItem } from '@books/models/book.model';
import { booksModuleName, State } from '@books/store/reducers/books-module.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getBooksState = createFeatureSelector<State>(booksModuleName);

export const getBookshelves = createSelector(
  getBooksState,
  (state: State): BookshelfItem[] => Object.values(state.bookshelf.entities)
);

export const getBookshelfLabels = createSelector(
  getBooksState,
  (state: State): BookshelfIdWithTitle[] =>
    Object.values(state.bookshelf.entities).map(item => ({ id: item.id, title: item.title }))
);
