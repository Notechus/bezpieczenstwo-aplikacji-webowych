import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutComponent } from '@auth/pages/logout/logout.component';
import { AuthService } from '@auth/services/auth.service';
import { AuthServiceStub } from '@auth/services/auth.service.stub';

describe('LogoutPage', () => {
  let component: LogoutComponent;
  const authServiceStub: Partial<AuthService> = new AuthServiceStub();
  let fixture: ComponentFixture<LogoutComponent>;
  let authServiceSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      providers: [{ provide: AuthService, useValue: authServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authServiceSpy = spyOn(authServiceStub, 'logout').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(authServiceSpy).toHaveBeenCalled();
  });
});
