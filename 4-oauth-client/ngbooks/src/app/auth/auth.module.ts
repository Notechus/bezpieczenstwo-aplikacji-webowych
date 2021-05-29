import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthRoutingModule } from '@auth/auth-routing.module';
import { LoginComponent } from '@auth/pages/login/login.component';
import { LogoutComponent } from '@auth/pages/logout/logout.component';
import { AuthService } from '@auth/services/auth.service';
import { authReducerName, authReducers } from '@auth/store/reducers/auth.reducer';
import { ComponentsModule } from '@components/components.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    ComponentsModule,
    StoreModule.forFeature(authReducerName, authReducers),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [AuthService, AngularFireAuthGuard]
})
export class AuthModule {}
