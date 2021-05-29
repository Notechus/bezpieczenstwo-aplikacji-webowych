import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksPageComponent } from './search-books-page.component';

describe('SearchBooksPageComponent', () => {
  let component: SearchBooksPageComponent;
  let fixture: ComponentFixture<SearchBooksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBooksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
