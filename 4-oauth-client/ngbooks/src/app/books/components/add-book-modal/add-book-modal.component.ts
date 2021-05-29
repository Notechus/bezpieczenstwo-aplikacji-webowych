import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookshelfIdWithTitle, BookVolume } from '@books/models/book.model';
import { BooksService } from '@books/services/books.service';
import { BookshelfStoreFacadeService } from '@books/store/facade/bookhelf-store-facade.service';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent implements OnInit {
  public readonly EMPTY_ITEM: BookshelfIdWithTitle = { id: '', title: '' };

  public loading: boolean = false;
  public book: BookVolume;
  public bookshelves: BookshelfIdWithTitle[] = [this.EMPTY_ITEM];
  public bookshelfId: string;

  public constructor(
    private bookshelfFacade: BookshelfStoreFacadeService,
    private booksService: BooksService,
    public dialogRef: MatDialogRef<AddBookModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: BookVolume }
  ) {
    this.book = data.book;
    this.bookshelfFacade.getBookshelfLabels$.subscribe(labels => {
      this.bookshelves = [this.EMPTY_ITEM, ...labels];
    });
  }

  public ngOnInit(): void {}

  public addBook(): void {
    if (this.bookshelfId) {
      this.loading = true;
      this.booksService.addBook(this.book, this.bookshelfId).subscribe(() => {
        this.loading = false;
        this.dialogRef.close();
      });
    }
  }
}
