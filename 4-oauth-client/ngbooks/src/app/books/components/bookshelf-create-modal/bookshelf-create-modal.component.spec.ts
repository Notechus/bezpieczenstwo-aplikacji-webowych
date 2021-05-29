import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfCreateModalComponent } from './bookshelf-create-modal.component';

describe('BookshelfCreateModalComponent', () => {
  let component: BookshelfCreateModalComponent;
  let fixture: ComponentFixture<BookshelfCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshelfCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
