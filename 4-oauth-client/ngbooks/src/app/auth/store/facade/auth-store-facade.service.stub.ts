import { User } from '@auth/models/auth.model';
import { AuthStoreFacadeServiceInterface } from '@auth/store/facade/auth-store-facade.service';
import { Observable, of } from 'rxjs';

export class AuthStoreFacadeServiceStub implements AuthStoreFacadeServiceInterface {
  public getUser$: Observable<User> = of({} as User);

  public constructor() {}

  public updateUser(user: User): void {}

  public clearUser(): void {}
}
