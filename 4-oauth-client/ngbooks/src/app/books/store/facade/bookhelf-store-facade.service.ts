import { Injectable } from '@angular/core';
import { Book, BookshelfIdWithTitle, BookshelfItem, BookVolumesResponse } from '@books/models/book.model';
import * as booksSearchActions from '@books/store/actions/books-search.actions';
import * as bookshelfActions from '@books/store/actions/bookshelf.actions';
import { State } from '@books/store/reducers/books-module.reducer';
import * as bookSearchSelectors from '@books/store/selectors/books-search.selectors';
import * as bookSelectors from '@books/store/selectors/books.selectors';
import * as bookshelfSelectors from '@books/store/selectors/bookshelf.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookshelfStoreFacadeService {
  public getBookshelves$: Observable<BookshelfItem[]> = this.store.select(bookshelfSelectors.getBookshelves);
  public getBookshelfLabels$: Observable<BookshelfIdWithTitle[]> = this.store.select(
    bookshelfSelectors.getBookshelfLabels
  );

  public constructor(protected store: Store<State>) {}

  public getBookshelfById$(id: string): Observable<BookshelfItem> {
    return this.getBookshelves$.pipe(map(bookshelves => bookshelves.find(bookshelf => bookshelf.id === id)));
  }

  public loadBookshelves(): void {
    this.store.dispatch(new bookshelfActions.LoadBookshelves());
  }

  public loadBookshelf(bookshelfId: string): void {
    this.store.dispatch(new bookshelfActions.LoadBookshelf({ id: bookshelfId }));
  }

  public addBookshelf(bookshelf: BookshelfItem): void {
    this.store.dispatch(new bookshelfActions.AddBookshelf({ bookshelf }));
  }

  public updateBookshelf(bookshelf: Partial<BookshelfItem>): void {
    this.store.dispatch(new bookshelfActions.UpdateBookshelf({ bookshelf: { id: bookshelf.id, changes: bookshelf } }));
  }

  public deleteBookshelf(id: string): void {
    this.store.dispatch(new bookshelfActions.DeleteBookshelf({ id }));
  }
}
