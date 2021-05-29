import { BookshelfItem } from '@books/models/book.model';
import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';

export const LOAD_BOOKSHELVES = '[Bookshelves] Load Bookshelves';
export const LOAD_BOOKSHELVES_SUCCESS = '[Bookshelves] Load Bookshelves Success';
export const LOAD_BOOKSHELF = '[Bookshelves] Load Bookshelf';
export const LOAD_BOOKSHELF_SUCCESS = '[Bookshelves] Load Bookshelf Success';
export const SET_BOOKSHELF = '[Bookshelves] Set Bookshelf';
export const ADD_BOOKSHELF = '[Bookshelves] Add Bookshelf';
export const UPDATE_BOOKSHELF = '[Bookshelves] Update Bookshelf';
export const DELETE_BOOKSHELF = '[Bookshelves] Delete Bookshelf';
export const CLEAR_BOOKSHELVES = '[Bookshelves] Clear Bookshelves';

export class LoadBookshelves implements Action {
  public readonly type = LOAD_BOOKSHELVES;
  public constructor() {}
}

export class LoadBookshelvesSuccess implements Action {
  public readonly type = LOAD_BOOKSHELVES_SUCCESS;
  public constructor(readonly payload: { bookshelves: BookshelfItem[] }) {}
}

export class LoadBookshelf implements Action {
  public readonly type = LOAD_BOOKSHELF;
  public constructor(readonly payload: { id: string }) {}
}

export class LoadBookshelfSuccess implements Action {
  public readonly type = LOAD_BOOKSHELF_SUCCESS;
  public constructor(readonly payload: { bookshelf: BookshelfItem }) {}
}

export class AddBookshelf implements Action {
  public readonly type = ADD_BOOKSHELF;
  public constructor(readonly payload: { bookshelf: BookshelfItem }) {}
}

export class SetBookshelf implements Action {
  public readonly type = SET_BOOKSHELF;
  public constructor(readonly payload: { bookshelf: BookshelfItem }) {}
}

export class UpdateBookshelf implements Action {
  public readonly type = UPDATE_BOOKSHELF;
  public constructor(readonly payload: { bookshelf: Update<BookshelfItem> }) {}
}

export class DeleteBookshelf implements Action {
  public readonly type = DELETE_BOOKSHELF;
  public constructor(readonly payload: { id: string }) {}
}

export class ClearBookshelves implements Action {
  public readonly type = CLEAR_BOOKSHELVES;
  public constructor() {}
}

export type BookshelfActions =
  | LoadBookshelves
  | LoadBookshelvesSuccess
  | LoadBookshelf
  | LoadBookshelfSuccess
  | AddBookshelf
  | SetBookshelf
  | UpdateBookshelf
  | DeleteBookshelf
  | ClearBookshelves;
