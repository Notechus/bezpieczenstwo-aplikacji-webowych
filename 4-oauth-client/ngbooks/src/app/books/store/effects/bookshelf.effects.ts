import { Injectable } from '@angular/core';
import { BooksService } from '@books/services/books.service';
import * as bookshelfActions from '@books/store/actions/bookshelf.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookshelfEffects {
  public loadBookshelves$ = createEffect(() =>
    this.actions$.pipe(
      ofType<bookshelfActions.LoadBookshelves>(bookshelfActions.LOAD_BOOKSHELVES),
      switchMap(() => this.booksService.loadBookshelves()),
      map(bookshelves => new bookshelfActions.LoadBookshelvesSuccess({ bookshelves }))
    )
  );

  public loadBookshelf$ = createEffect(() =>
    this.actions$.pipe(
      ofType<bookshelfActions.LoadBookshelf>(bookshelfActions.LOAD_BOOKSHELF),
      switchMap(action => this.booksService.fetchBookshelf(action.payload.id)),
      map(bookshelf => new bookshelfActions.SetBookshelf({ bookshelf }))
    )
  );

  public constructor(private actions$: Actions, private booksService: BooksService) {}
}
