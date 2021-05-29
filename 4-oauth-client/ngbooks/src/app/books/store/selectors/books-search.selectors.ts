import { BookVolumesResponse } from '@books/models/book.model';
import { booksModuleName, State } from '@books/store/reducers/books-module.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getBooksState = createFeatureSelector<State>(booksModuleName);

export const getSearchTerm = createSelector(
  getBooksState,
  (state: State): string => state.search.searchTerm
);

export const getSearchResults = createSelector(
  getBooksState,
  (state: State): BookVolumesResponse => state.search.searchResults
);
