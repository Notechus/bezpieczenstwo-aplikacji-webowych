import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelvesPageComponent } from './bookshelves-page.component';

describe('BookshelvesPageComponent', () => {
  let component: BookshelvesPageComponent;
  let fixture: ComponentFixture<BookshelvesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshelvesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelvesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
