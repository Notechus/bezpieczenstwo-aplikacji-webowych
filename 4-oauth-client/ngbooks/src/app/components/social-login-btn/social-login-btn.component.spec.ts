import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLoginBtnComponent } from './social-login-btn.component';

describe('SocialLoginBtnComponent', () => {
  let component: SocialLoginBtnComponent;
  let fixture: ComponentFixture<SocialLoginBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialLoginBtnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
