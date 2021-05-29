import { Component, Input, OnInit } from '@angular/core';
import { Book } from '@books/models/book.model';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-bookshelf-volume-list',
  templateUrl: './bookshelf-volume-list.component.html',
  styleUrls: ['./bookshelf-volume-list.component.scss']
})
export class BookshelfVolumeListComponent implements OnInit {
  @Input() public rows: Book[];
  @Input() public limit: number = 5;
  public ColumnMode = ColumnMode;

  public constructor() {}

  public ngOnInit(): void {}
}
