import { FirebaseAuth } from '@angular/fire';
import * as firebase from 'firebase';

export class AngularFireAuthServiceStub {
  // @ts-ignore
  public readonly auth: FirebaseAuth = {
    signOut(): Promise<void> {
      return Promise.resolve();
    },
    signInWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
      return Promise.resolve({} as firebase.auth.UserCredential);
    },
    onAuthStateChanged(
      nextOrObserver: firebase.Observer<any> | ((a: firebase.User | null) => any),
      error?: (a: firebase.auth.Error) => any,
      completed?: firebase.Unsubscribe
    ): firebase.Unsubscribe {
      return {} as firebase.Unsubscribe;
    }
  };
}
