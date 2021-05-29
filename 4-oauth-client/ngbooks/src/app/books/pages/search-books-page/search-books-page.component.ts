import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookModalComponent } from '@books/components/add-book-modal/add-book-modal.component';
import { BookVolume } from '@books/models/book.model';
import { BooksService } from '@books/services/books.service';
import { BooksSearchStoreFacadeService } from '@books/store/facade/books-search-store-facade.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search-books-page',
  templateUrl: './search-books-page.component.html',
  styleUrls: ['./search-books-page.component.scss']
})
export class SearchBooksPageComponent implements OnInit {
  public searchTerm: string;
  public searchResults: BookVolume[];
  public resultCount: number;
  public loading: boolean = false;

  public constructor(
    private booksSearchFacade: BooksSearchStoreFacadeService,
    private booksService: BooksService,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.booksService.loadBookshelves().subscribe();

    this.booksSearchFacade.getSearchTerm$.pipe(first()).subscribe(searchTerm => {
      this.searchTerm = searchTerm;
    });

    this.booksSearchFacade.getSearchResults$.subscribe(results => {
      if (results) {
        this.searchResults = results.items;
        this.resultCount = results.totalItems;
      }
    });
  }

  public search(): void {
    if (this.searchTerm && this.searchTerm.trim()) {
      this.loading = true;
      this.booksService.searchBooks(this.searchTerm.trim()).subscribe(() => (this.loading = false));
    }
  }

  public openAddModal(book: BookVolume): void {
    this.dialog.open(AddBookModalComponent, {
      minWidth: '350px',
      minHeight: '300px',
      maxHeight: '600px',
      data: { book: book }
    });
  }
}
