import { Injectable } from '@angular/core';
import { BookVolumesResponse } from '@books/models/book.model';
import * as booksSearchActions from '@books/store/actions/books-search.actions';
import { State } from '@books/store/reducers/books-module.reducer';
import * as booksSearchSelectors from '@books/store/selectors/books-search.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksSearchStoreFacadeService {
  public getSearchTerm$: Observable<string> = this.store.select(booksSearchSelectors.getSearchTerm);
  public getSearchResults$: Observable<BookVolumesResponse> = this.store.select(booksSearchSelectors.getSearchResults);

  public constructor(protected store: Store<State>) {}

  public updateSearch(searchTerm: string, searchResults: BookVolumesResponse): void {
    this.store.dispatch(booksSearchActions.loadSearchResults({ searchTerm, results: searchResults }));
  }
}
