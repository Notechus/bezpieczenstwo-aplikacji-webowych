import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '@auth/pages/login/login.component';
import { AuthService } from '@auth/services/auth.service';
import { AuthServiceStub } from '@auth/services/auth.service.stub';

describe('LoginPage', () => {
  let component: LoginComponent;
  const authServiceStub: Partial<AuthService> = new AuthServiceStub();
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{ provide: AuthService, useValue: authServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
