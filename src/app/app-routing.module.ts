import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookPageComponent } from './book-page/book-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksPageComponent
  },
  {
    path: 'books/:bookId',
    component: BookPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
