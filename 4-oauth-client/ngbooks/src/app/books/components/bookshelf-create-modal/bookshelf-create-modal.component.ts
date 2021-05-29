import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookshelfAccessType, BookshelfCreateRequest } from '@books/models/book.model';
import { BooksService } from '@books/services/books.service';

@Component({
  selector: 'app-bookshelf-create-modal',
  templateUrl: './bookshelf-create-modal.component.html',
  styleUrls: ['./bookshelf-create-modal.component.scss']
})
export class BookshelfCreateModalComponent {
  public form: FormGroup;
  public loading: boolean = false;

  public constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    public dialogRef: MatDialogRef<BookshelfCreateModalComponent>
  ) {
    this.form = this.formBuilder.group({
      title: new FormControl(''),
      description: new FormControl(''),
      private: new FormControl(true)
    });
  }

  public createBookshelf(): void {
    this.loading = true;
    const bookshelf: BookshelfCreateRequest = {
      title: this.form.value.title,
      description: !!this.form.value.description ? this.form.value.description : '',
      access: this.form.value.private ? BookshelfAccessType.PRIVATE : BookshelfAccessType.PUBLIC
    };
    this.booksService.createBookshelf(bookshelf).subscribe(() => {
      setTimeout(() => (this.loading = false), 250);
      this.dialogRef.close();
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
