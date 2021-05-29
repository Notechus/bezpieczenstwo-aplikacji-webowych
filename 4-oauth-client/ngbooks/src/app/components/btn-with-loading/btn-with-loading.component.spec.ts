import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWithLoadingComponent } from './btn-with-loading.component';

describe('BtnWithLoadingComponent', () => {
  let component: BtnWithLoadingComponent;
  let fixture: ComponentFixture<BtnWithLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BtnWithLoadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnWithLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
