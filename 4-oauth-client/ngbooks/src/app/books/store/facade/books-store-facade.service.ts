import { Injectable } from '@angular/core';
import * as booksActions from '@books//store/actions/books.actions';
import { Book } from '@books/models/book.model';
import { State } from '@books/store/reducers/books-module.reducer';
import * as bookSelectors from '@books/store/selectors/books.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksStoreFacadeService {
  public getBooks$: Observable<Book[]> = this.store.select(bookSelectors.getBooks);

  public constructor(protected store: Store<State>) {}

  public loadBooks(bookshelfId: string): void {
    this.store.dispatch(new booksActions.LoadBooks({ bookshelfId }));
  }

  public getBooksForBookshelf(bookshelfId: string): Observable<Book[]> {
    return this.getBooks$.pipe(map(books => books.filter(book => book.bookshelfId === bookshelfId)));
  }
}
