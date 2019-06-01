import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BooksPageComponent } from './books-page/books-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BookPageComponent,
    BooksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
