import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { AuthStoreFacadeService } from '@auth/store/facade/auth-store-facade.service';
import {
  Book,
  BookshelfAccessType,
  BookshelfCreateRequest,
  BookshelfItem,
  BookshelfUpdateRequest,
  BookVolume,
  BookVolumeInfo
} from '@books/models/book.model';
import { ApiBooksService } from '@books/services/api-books.service';
import { BookshelfStoreFacadeService } from '@books/store/facade/bookhelf-store-facade.service';
import { BooksSearchStoreFacadeService } from '@books/store/facade/books-search-store-facade.service';
import { BooksStoreFacadeService } from '@books/store/facade/books-store-facade.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly dateTimeFormat: string = 'dd-MM-yyyy HH:mm:ss';

  public constructor(
    private booksFacade: BooksStoreFacadeService,
    private bookshelfFacade: BookshelfStoreFacadeService,
    private booksSearchFacade: BooksSearchStoreFacadeService,
    private authStoreFacadeService: AuthStoreFacadeService,
    private apiBooksService: ApiBooksService
  ) {}

  public searchBooks(searchTerm: string) {
    return this.apiBooksService.fetchSearchBooks(searchTerm, '40').pipe(
      tap(response => {
        this.booksSearchFacade.updateSearch(searchTerm, response);
      })
    );
  }

  public loadBookshelves(): Observable<BookshelfItem[]> {
    return this.apiBooksService.fetchUserBookshelves();
  }

  public createBookshelf(item: BookshelfCreateRequest): Observable<BookshelfItem> {
    const modifiedBookshelf = {
      ...item,
      created: formatDate(new Date(), this.dateTimeFormat, 'en-GB'),
      volumeCount: 0
    };
    return this.apiBooksService
      .fetchCreateBookshelf(modifiedBookshelf)
      .pipe(tap(bookshelf => this.bookshelfFacade.addBookshelf(bookshelf)));
  }

  public quickCreateBookshelf(name: string): Observable<BookshelfItem> {
    return this.apiBooksService
      .fetchCreateBookshelf({
        title: name,
        access: BookshelfAccessType.PRIVATE,
        created: formatDate(new Date(), this.dateTimeFormat, 'en-GB'),
        volumeCount: 0
      })
      .pipe(tap(bookshelf => this.bookshelfFacade.addBookshelf(bookshelf)));
  }

  public updateBookshelf(bookshelf: BookshelfUpdateRequest): Observable<void> {
    return this.apiBooksService
      .fetchUpdateBookshelf(bookshelf)
      .pipe(tap(() => this.bookshelfFacade.updateBookshelf(bookshelf)));
  }

  public fetchBookshelf(bookshelfId: string): Observable<BookshelfItem> {
    return this.apiBooksService.fetchBookshelf(bookshelfId);
  }

  public deleteBookshelf(id: string): Observable<void> {
    return this.apiBooksService.fetchDeleteBookshelf(id).pipe(tap(() => this.bookshelfFacade.deleteBookshelf(id)));
  }

  public loadBooks(bookshelfId: string): Observable<Book[]> {
    return this.apiBooksService.fetchBookshelfItems(bookshelfId);
  }

  public addBook(bookVolume: BookVolume, bookshelfId: string): Observable<void> {
    return this.apiBooksService.fetchCreateBook(this.copyBookVolumeToBook(bookVolume), bookshelfId);
  }

  private copyBookVolumeToBook(bookVolume: BookVolume): Book {
    const volumeInfo = bookVolume.volumeInfo;
    return {
      id: bookVolume.id,
      authors: volumeInfo.authors,
      averageRating: volumeInfo.averageRating,
      categories: volumeInfo.categories,
      description: volumeInfo.description,
      imageLinks: volumeInfo.imageLinks,
      isbn10: this.extractISBN(bookVolume.volumeInfo, 'ISBN_10'),
      isbn13: this.extractISBN(bookVolume.volumeInfo, 'ISBN_13'),
      language: volumeInfo.language,
      maturityRating: volumeInfo.maturityRating,
      pageCount: volumeInfo.pageCount,
      publishedDate: volumeInfo.publishedDate,
      publisher: volumeInfo.publisher,
      ratingsCount: volumeInfo.ratingsCount,
      title: volumeInfo.title
    };
  }

  private extractISBN(volumeInfo: BookVolumeInfo, type: string): string {
    if (volumeInfo) {
      const isbn = volumeInfo.industryIdentifiers.find(e => e.type === type);
      return isbn && isbn.identifier ? isbn.identifier : null;
    }

    return null;
  }
}
