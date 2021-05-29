import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfVolumeListComponent } from './bookshelf-volume-list.component';

describe('BookshelfVolumeListComponent', () => {
  let component: BookshelfVolumeListComponent;
  let fixture: ComponentFixture<BookshelfVolumeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshelfVolumeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfVolumeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
