import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AcceptLanguageInterceptor } from '@app/interceptors/accept-language.interceptor';
import { ApiKeyInterceptor } from '@app/interceptors/api-key.interceptor';
import { HomePageComponent } from '@app/pages/home/home-page.component';
import { ProfilePageComponent } from '@app/pages/profile/profile-page.component';
import { AuthModule } from '@auth/auth.module';
import { BooksModule } from '@books/books.module';
import { ComponentsModule } from '@components/components.module';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ProfilePageComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AuthModule,
    BooksModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ComponentsModule,
    StoreModule.forRoot({}, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AcceptLanguageInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
