import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfItemPageComponent } from './bookshelf-item-page.component';

describe('BookshelfItemPageComponent', () => {
  let component: BookshelfItemPageComponent;
  let fixture: ComponentFixture<BookshelfItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshelfItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
