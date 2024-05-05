import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Category} from "../../../models/book/category";
import {BookService} from "../../../services/bookService/book.service";
import {CategoryService} from "../../../services/bookService/category.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  bookForm!: FormGroup;
  categories: Category[] = [];

  selectedFile!: File;
  constructor(    private formBuilder: FormBuilder,
                  private bookService: BookService,
                  private categoryService: CategoryService) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      picture : ['', Validators.required],
      category: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.loadCategories();
  }


  addBook(bookData:FormData, category: Category): void {
    const dto={bookData, categoryId:category};
    console.log(dto);
    this.bookService.addBook(dto).subscribe(
      result => {
        if (result) {
          console.log('Book added successfully');
          this.bookForm.reset();

        } else {
          console.error('Failed to add book');

        }
      },
      error => {
        console.error('An error occurred:', error);
      }
    );
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.bookForm.valid && this.selectedFile) {
      const bookData =new FormData();
      bookData.append("author",this.bookForm.value.author);
      bookData.append("picture",this.selectedFile);
      bookData.append("title",this.bookForm.value.title);
      bookData.append("description",this.bookForm.value.description);
      this.addBook(bookData ,this.bookForm.value.category);
      this.bookForm.reset();
    } else {
      console.error('Invalid Form please Check again');
    }
  }


}
