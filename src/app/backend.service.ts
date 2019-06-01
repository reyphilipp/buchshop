import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('./assets/books.json');
  }

  getBook(bookId: string ): Observable<Book> {
    return this.getBooks().pipe(
      map(items => items.find(item => item.id === bookId)));
  }
}
