import { AuthServiceInterface } from '@auth/services/auth.service';
import { auth } from 'firebase';
import { Observable, of } from 'rxjs';

export class AuthServiceStub implements AuthServiceInterface {
  public constructor() {}

  public login(username: string, password: string): Observable<auth.UserCredential> {
    return of({} as auth.UserCredential);
  }

  public verifyLogin(): void {}

  public logout(): Observable<void> {
    return of();
  }
}
