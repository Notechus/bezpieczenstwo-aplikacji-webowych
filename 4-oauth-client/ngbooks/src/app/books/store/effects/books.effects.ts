import { Injectable } from '@angular/core';
import { BooksService } from '@books/services/books.service';
import * as booksActions from '@books/store/actions/books.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksEffects {
  public loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType<booksActions.LoadBooks>(booksActions.LOAD_BOOKS),
      switchMap(action => this.booksService.loadBooks(action.payload.bookshelfId)),
      map(books => new booksActions.LoadBooksSuccess({ books }))
    )
  );

  public constructor(private actions$: Actions, private booksService: BooksService) {}
}
