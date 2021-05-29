import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book, BookshelfItem } from '@books/models/book.model';
import { BooksService } from '@books/services/books.service';
import { BookshelfStoreFacadeService } from '@books/store/facade/bookhelf-store-facade.service';
import { BooksStoreFacadeService } from '@books/store/facade/books-store-facade.service';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bookshelf-item-page',
  templateUrl: './bookshelf-item-page.component.html',
  styleUrls: ['./bookshelf-item-page.component.scss']
})
export class BookshelfItemPageComponent implements OnInit {
  public bookshelfId: string;
  public bookshelf: BookshelfItem;
  public books: Book[] = [];
  public pageLoading: boolean = true;

  public filteredBooks: Book[] = [];
  public searchTerm: string = '';

  public constructor(
    private route: ActivatedRoute,
    private booksFacade: BooksStoreFacadeService,
    private bookshelfFacade: BookshelfStoreFacadeService,
    private booksService: BooksService
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) => {
          this.bookshelfFacade.loadBookshelf(params.get('id'));
          this.booksFacade.loadBooks(params.get('id'));
        })
      )
      .subscribe((params: ParamMap) => this.fetchData(params.get('id')));
  }

  public filterBooks(): void {
    if (this.searchTerm && this.searchTerm.trim()) {
      this.filteredBooks = this.books.filter(
        book => book.title.includes(this.searchTerm) || (book.authors && book.authors[0].includes(this.searchTerm))
      );
    } else {
      this.filteredBooks = this.books;
    }
  }

  private fetchData(bookshelfId: string) {
    combineLatest([
      this.bookshelfFacade.getBookshelfById$(bookshelfId),
      this.booksFacade.getBooksForBookshelf(bookshelfId)
    ]).subscribe(([bookshelf, books]) => {
      this.bookshelf = bookshelf;
      this.books = books;
      this.filteredBooks = books;
      setTimeout(() => (this.pageLoading = false), 250);
    });
  }
}
