import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  books: Book[];

  constructor(
    private router: Router,
    private backend: BackendService) { }

  ngOnInit() {
    this.backend.getBooks().subscribe(books =>{
      this.books = books;
    });
  }

}
