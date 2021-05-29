import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookVolume } from '@books/models/book.model';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent implements OnInit {
  @Input() public rows: BookVolume[];
  @Input() public limit: number = 5;
  @Output() public addClick: EventEmitter<BookVolume> = new EventEmitter<BookVolume>();
  public ColumnMode = ColumnMode;

  public constructor() {}

  public ngOnInit(): void {}
}
