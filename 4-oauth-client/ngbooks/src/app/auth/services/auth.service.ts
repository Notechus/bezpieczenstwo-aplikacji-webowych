import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;
import { Router } from '@angular/router';
import { User } from '@auth/models/auth.model';
import { AuthStoreFacadeService } from '@auth/store/facade/auth-store-facade.service';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface AuthServiceInterface {
  login(username: string, password: string): Observable<UserCredential>;
  verifyLogin(): void;
  logout(): Observable<void>;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {
  public constructor(
    private angularFireAuth: AngularFireAuth,
    private authFacade: AuthStoreFacadeService,
    private router: Router
  ) {}

  public login(username: string, password: string): Observable<UserCredential> {
    return from(this.angularFireAuth.auth.signInWithEmailAndPassword(username, password)).pipe(
      tap(userCredential => this.authFacade.updateUser(this.createUserFromFirebaseUser(userCredential.user)))
    );
  }

  public verifyLogin(): void {
    this.angularFireAuth.auth.onAuthStateChanged(user => this.onAuthStateChanged(user));
  }

  public onAuthStateChanged(user: firebase.User): void {
    if (user) {
      user.getIdToken().then(token => console.log(token));
      this.authFacade.updateUser(this.createUserFromFirebaseUser(user));
    } else {
      this.logout().subscribe();
    }
  }

  public logout(): Observable<void> {
    return from(this.angularFireAuth.auth.signOut()).pipe(
      tap(() => {
        this.authFacade.clearUser();
        this.router.navigate(['/login']);
      })
    );
  }

  private createUserFromFirebaseUser(firebaseUser: firebase.User): User {
    return {
      id: firebaseUser.uid,
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      photoURL: firebaseUser.photoURL
    };
  }
}
