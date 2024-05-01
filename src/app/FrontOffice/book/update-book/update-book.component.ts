import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/bookService/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BookResquest} from "../../../models/book/book-resquest";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Category} from "../../../models/book/category";


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{
  idBook?: number;
  bookRequest: BookResquest = {
    title: '',
    author: '',
    description: ''
  };
  selectedPicture: string | undefined;
  bookRequestForm: FormGroup;


  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.bookRequestForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.idBook = this.activatedRoute.snapshot.params['bookId'];
    if (this.idBook) {
      this.bookService.findById(this.idBook).subscribe({
        next: (book) => {
          this.bookRequestForm.patchValue({
            id: book.id,
            title: book.title,
            author: book.author,
            description: book.description
          });
          this.selectedPicture = book.coverPicture;
        }
      });
    }
  }
  saveBook(bookData:FormData) {
    this.idBook = this.activatedRoute.snapshot.params['bookId'];
    const dto={bookData};
    this.bookService.updateBook(dto).subscribe({
      next: response => {
        console.log('Book updated successfully:', response);
        this.router.navigate(['/user/mybookDetails', this.idBook = this.activatedRoute.snapshot.params['bookId'] ]);
      },
      error: error => {
        console.error('Error updating book:', error);
        // Mettez ici la logique de gestion des erreurs
      }
    });
  }

  onSubmit() {
    if (this.bookRequestForm.valid ) {
      const bookData =new FormData();
      bookData.append("idBook", this.bookRequestForm.value.id);
      bookData.append("author",this.bookRequestForm.value.author);
      bookData.append("title",this.bookRequestForm.value.title);
      bookData.append("description",this.bookRequestForm.value.description);
      this.saveBook(bookData);
    } else {
      console.error('Invalid Form please Check again');
    }
  }

  cancelUpdate(): void {
    this.router.navigate(['/user/mybookDetails', this.idBook = this.activatedRoute.snapshot.params['bookId']]);
  }


}
