import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@auth/pages/login/login.component';
import { LogoutComponent } from '@auth/pages/logout/logout.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome } },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
