import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@auth/services/auth.service';
import { AuthStoreFacadeService } from '@auth/store/facade/auth-store-facade.service';
import { AuthStoreFacadeServiceStub } from '@auth/store/facade/auth-store-facade.service.stub';
import { AngularFireAuthServiceStub } from '@mocks/external/angular-fire-auth.service.stub';

describe('AuthService', () => {
  let service: AuthService;
  const angularFireAuthStub: Partial<AngularFireAuth> = new AngularFireAuthServiceStub();
  const authStoreFacadeServiceStub: Partial<AuthStoreFacadeService> = new AuthStoreFacadeServiceStub();
  let angularFireAuthSpy: jasmine.Spy;
  let authFacadeServiceSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AuthStoreFacadeService, useValue: authStoreFacadeServiceStub }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login() should call firebase login with correct credentials', () => {
    const email = 'xyz';
    const password = 'abc';
    const userCredential = {
      user: {
        uid: 'a',
        email: email
      }
    };
    angularFireAuthSpy = spyOn(angularFireAuthStub.auth, 'signInWithEmailAndPassword').and.returnValue(
      new Promise(resolve => resolve(userCredential))
    );
    authFacadeServiceSpy = spyOn(authStoreFacadeServiceStub, 'updateUser').and.stub();

    service.login(email, password);

    expect(angularFireAuthSpy).toHaveBeenCalledWith(email, password);
    // expect(authFacadeServiceSpy).toHaveBeenCalled(); TODO: fix this
  });

  it('verifyLogin() should call firebase onAuthStateChanged', () => {
    angularFireAuthSpy = spyOn(angularFireAuthStub.auth, 'onAuthStateChanged').and.callThrough();

    service.verifyLogin();

    expect(angularFireAuthSpy).toHaveBeenCalled();
  });

  it('onAuthStateChanged() should update store when user is present', () => {
    // @ts-ignore
    const user: firebase.User = {
      uid: 'a',
      email: 'email'
    };
    authFacadeServiceSpy = spyOn(authStoreFacadeServiceStub, 'updateUser').and.callThrough();

    service.onAuthStateChanged(user);

    expect(authFacadeServiceSpy).toHaveBeenCalledWith({ id: user.uid, email: user.email });
  });

  it('onAuthStateChanged() should logout if firebase user not present', () => {
    authFacadeServiceSpy = spyOn(angularFireAuthStub.auth, 'signOut').and.callThrough();

    service.onAuthStateChanged(undefined);

    expect(authFacadeServiceSpy).toHaveBeenCalled();
  });

  it('logout() should call firebase signOut', () => {
    authFacadeServiceSpy = spyOn(angularFireAuthStub.auth, 'signOut').and.callThrough();

    service.logout();

    expect(authFacadeServiceSpy).toHaveBeenCalled();
  });
});
