import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BooksService } from "../shared/books.service";
import { Books } from "../shared/books.model";

@Component({
  selector: 'app-viewbooksinstudents',
  templateUrl: './viewbooksinstudents.component.html',
  styleUrls: ['./viewbooksinstudents.component.css']
})
export class ViewbooksinstudentsComponent implements OnInit {
  booksDetails;
  constructor(public booksService: BooksService, private router: Router) { }

  ngOnInit() {
   this.refreshBooksList();
  }

  refreshBooksList() {
    this.booksService.getBooksProfile().subscribe((res) => {
      this.booksService.books = res as Books[];
    });
  }

  Back() {
    this.router.navigate(["./insidestudent"]);
  }
}
