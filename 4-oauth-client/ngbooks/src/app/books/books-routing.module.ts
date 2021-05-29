import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from '@books/pages/books-page/books-page.component';
import { BookshelfItemPageComponent } from '@books/pages/bookshelf-item-page/bookshelf-item-page.component';
import { BookshelvesPageComponent } from '@books/pages/bookshelves-page/bookshelves-page.component';
import { SearchBooksPageComponent } from '@books/pages/search-books-page/search-books-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'books', redirectTo: 'books/list', pathMatch: 'full' },
  {
    path: 'books/search',
    component: SearchBooksPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'books/list',
    component: BooksPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'books/bookshelves',
    component: BookshelvesPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'books/bookshelves/:id',
    component: BookshelfItemPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
