import { BookVolumesResponse } from '@books/models/book.model';
import * as booksSearchActions from '@books/store/actions/books-search.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
  searchTerm: string;
  searchResults: BookVolumesResponse;
}

const initialSearchState: State = {
  searchTerm: null,
  searchResults: null
};

const reducer = createReducer(
  initialSearchState,
  on(booksSearchActions.loadSearchResults, (state, { searchTerm, results }) => {
    return { ...state, searchTerm, searchResults: results };
  })
);

export const booksSearchReducer = (state: State | undefined, action: Action) => reducer(state, action);
