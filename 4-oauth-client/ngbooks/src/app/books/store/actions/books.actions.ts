import { Book } from '@books/models/book.model';
import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';

export const LOAD_BOOKS = '[Books] Load Books';
export const LOAD_BOOKS_SUCCESS = '[Books] Load Books Success';
export const ADD_BOOK = '[Books] Add Book';
export const SET_BOOK = '[Books] Set Book';
export const UPDATE_BOOK = '[Books] Update Book';
export const DELETE_BOOK = '[Books] Delete Book';
export const CLEAR_BOOKS = '[Books] Clear Books';

export class LoadBooks implements Action {
  public readonly type = LOAD_BOOKS;
  public constructor(readonly payload: { bookshelfId: string }) {}
}

export class LoadBooksSuccess implements Action {
  public readonly type = LOAD_BOOKS_SUCCESS;
  public constructor(readonly payload: { books: Book[] }) {}
}

export class AddBook implements Action {
  public readonly type = ADD_BOOK;
  public constructor(readonly payload: { book: Book }) {}
}

export class SetBook implements Action {
  public readonly type = SET_BOOK;
  public constructor(readonly payload: { book: Book }) {}
}

export class UpdateBook implements Action {
  public readonly type = UPDATE_BOOK;
  public constructor(readonly payload: { book: Update<Book> }) {}
}

export class DeleteBook implements Action {
  public readonly type = DELETE_BOOK;
  public constructor(readonly payload: { id: string }) {}
}

export class ClearBookshelves implements Action {
  public readonly type = CLEAR_BOOKS;
  public constructor() {}
}

export type BooksActions =
  | LoadBooks
  | LoadBooksSuccess
  | AddBook
  | SetBook
  | UpdateBook
  | DeleteBook
  | ClearBookshelves;
