import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { DocumentChangeAction } from '@angular/fire/firestore/interfaces';
import { BOOKS_API_VOLUMES_PATH } from '@books/books.config';
import {
  Book,
  BookshelfCreateRequest,
  BookshelfItem,
  BookshelfUpdateRequest,
  BookVolumesResponse
} from '@books/models/book.model';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const BOOKSHELVES_COLLECTION = 'bookshelves';
const BOOKSHELVES_COLLECTION_ITEM = id => `${BOOKSHELVES_COLLECTION}/${id}`;
const BOOKS_COLLECTION = bookshelfId => `${BOOKSHELVES_COLLECTION_ITEM(bookshelfId)}/books`;
// const BOOK_COLLECTION_ITEM = id => `${BOOKS_COLLECTION}/${id}`;

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {
  public constructor(
    private httpClient: HttpClient,
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {}

  public fetchSearchBooks(searchTerm: string, maxResults: string): Observable<BookVolumesResponse> {
    return this.httpClient.get<BookVolumesResponse>(BOOKS_API_VOLUMES_PATH, {
      params: { q: searchTerm, maxResults: maxResults }
    });
  }

  public fetchUserBookshelves(): Observable<BookshelfItem[]> {
    return this.angularFireAuth.user.pipe(
      switchMap(user => {
        return this.angularFirestore
          .collection<BookshelfItem>(BOOKSHELVES_COLLECTION, ref => ref.where('userId', '==', user.uid))
          .snapshotChanges();
      }),
      map((documentChangeActions: DocumentChangeAction<BookshelfItem>[]) => {
        return documentChangeActions.map(doc => this.mapDocumentChangeActionToItem<BookshelfItem>(doc));
      })
    );
  }

  public fetchCreateBookshelf(item: BookshelfCreateRequest): Observable<any> {
    return this.angularFireAuth.user.pipe(
      switchMap(user => {
        return from(
          this.angularFirestore
            .collection<BookshelfCreateRequest>(BOOKSHELVES_COLLECTION)
            .add({ ...item, userId: user.uid })
        );
      })
    );
  }

  public fetchUpdateBookshelf(item: BookshelfUpdateRequest): Observable<void> {
    return from(this.angularFirestore.doc<BookshelfItem>(BOOKSHELVES_COLLECTION_ITEM(item.id)).update(item));
  }

  public fetchDeleteBookshelf(id: string): Observable<void> {
    return from(this.angularFirestore.doc<BookshelfItem>(BOOKSHELVES_COLLECTION_ITEM(id)).delete());
  }

  public fetchBookshelf(id: string): Observable<BookshelfItem> {
    return this.angularFirestore
      .doc<BookshelfItem>(BOOKSHELVES_COLLECTION_ITEM(id))
      .valueChanges()
      .pipe(map(bookshelf => ({ ...bookshelf, id })));
  }

  public fetchCreateBook(book: Book, bookshelfId: string): Observable<void> {
    return from(
      this.angularFirestore
        .collection<Book>(BOOKS_COLLECTION(bookshelfId))
        .doc(book.id)
        .set(book, { merge: true })
    );
  }

  public fetchBookshelfItems(bookshelfId: string): Observable<Book[]> {
    return this.angularFirestore
      .collection<Book>(BOOKS_COLLECTION(bookshelfId))
      .snapshotChanges()
      .pipe(
        map((documentChangeActions: DocumentChangeAction<Book>[]) => {
          return documentChangeActions.map(doc => ({ ...this.mapDocumentChangeActionToItem<Book>(doc), bookshelfId }));
        })
      );
  }

  private mapDocumentChangeActionToItem<T>(documentChangeAction: DocumentChangeAction<T>): T {
    return { ...documentChangeAction.payload.doc.data(), id: documentChangeAction.payload.doc.id };
  }
}
