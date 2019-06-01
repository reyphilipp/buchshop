import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private router: ActivatedRoute,
    private BackendService: BackendService) { }

  ngOnInit() {
    console.log('Book Page Init...');

    this.book$ = this.BackendService
    .getBook(this.router.snapshot.params.bookId);
  }

}
