import { BookVolumesResponse } from '@books/models/book.model';
import { createAction, props } from '@ngrx/store';

export const loadSearchResults = createAction(
  '[Books Search] Load Search Results',
  props<{ searchTerm: string; results: BookVolumesResponse }>()
);
