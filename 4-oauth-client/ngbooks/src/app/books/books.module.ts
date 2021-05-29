import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BooksRoutingModule } from '@books/books-routing.module';
import { AddBookModalComponent } from '@books/components/add-book-modal/add-book-modal.component';
import { BooksTableComponent } from '@books/components/books-table/books-table.component';
import { BookshelfCreateModalComponent } from '@books/components/bookshelf-create-modal/bookshelf-create-modal.component';
import { BooksPageComponent } from '@books/pages/books-page/books-page.component';
import { BookshelfItemPageComponent } from '@books/pages/bookshelf-item-page/bookshelf-item-page.component';
import { BookshelvesPageComponent } from '@books/pages/bookshelves-page/bookshelves-page.component';
import { SearchBooksPageComponent } from '@books/pages/search-books-page/search-books-page.component';
import { BooksEffects } from '@books/store/effects/books.effects';
import { BookshelfEffects } from '@books/store/effects/bookshelf.effects';
import { booksModuleName, booksModuleReducers } from '@books/store/reducers/books-module.reducer';
import { ComponentsModule } from '@components/components.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BookshelfVolumeListComponent } from './components/bookshelf-volume-list/bookshelf-volume-list.component';

@NgModule({
  declarations: [
    BooksPageComponent,
    BooksTableComponent,
    SearchBooksPageComponent,
    BookshelvesPageComponent,
    BookshelfCreateModalComponent,
    AddBookModalComponent,
    BookshelfItemPageComponent,
    BookshelfVolumeListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDatatableModule,
    BooksRoutingModule,
    StoreModule.forFeature(booksModuleName, booksModuleReducers),
    EffectsModule.forFeature([BookshelfEffects, BooksEffects]),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    ComponentsModule,
    AngularFirestoreModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class BooksModule {}
