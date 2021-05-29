import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookshelfCreateModalComponent } from '@books/components/bookshelf-create-modal/bookshelf-create-modal.component';
import { BookshelfAccessType, BookshelfItem } from '@books/models/book.model';
import { BooksService } from '@books/services/books.service';
import { BookshelfStoreFacadeService } from '@books/store/facade/bookhelf-store-facade.service';

@Component({
  selector: 'app-bookshelves-page',
  templateUrl: './bookshelves-page.component.html',
  styleUrls: ['./bookshelves-page.component.scss']
})
export class BookshelvesPageComponent implements OnInit {
  public readonly NO_DESCRIPTION_MSG = 'No description';

  public name: string;
  public bookshelves: BookshelfItem[];
  public loading: boolean = false;
  public pageLoading: boolean = true;

  public BookshelfAccessType = BookshelfAccessType;

  public constructor(
    private bookshelfFacade: BookshelfStoreFacadeService,
    private booksService: BooksService,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.bookshelfFacade.loadBookshelves();

    this.bookshelfFacade.getBookshelves$.subscribe(bookshelves => {
      this.bookshelves = bookshelves;
      setTimeout(() => (this.pageLoading = false), 250);
    });
  }

  public openDialog(): void {
    this.dialog.open(BookshelfCreateModalComponent, {
      minWidth: '350px',
      minHeight: '300px',
      maxHeight: '600px'
    });
  }

  public create(): void {
    if (this.name && this.name.trim()) {
      this.loading = true;
      this.booksService.quickCreateBookshelf(this.name).subscribe(() => {
        this.loading = false;
        this.name = null;
      });
    }
  }

  public quickUpdateAccess(item: BookshelfItem): void {
    const newAccess =
      item.access === BookshelfAccessType.PRIVATE ? BookshelfAccessType.PUBLIC : BookshelfAccessType.PRIVATE;
    this.booksService.updateBookshelf({ id: item.id, access: newAccess });
  }
}
