import { Component, OnInit } from '@angular/core';
import {bookCategory} from "../../models/bookCategory";
import {BookService} from "../../services/book.service";
import {User} from "../../models/user";
import {Book} from "../../models/book";
import {Category} from "../../models/category";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  bookForm!: FormGroup;
  categories: Category[] = [];
  staticUser: User = {
    id: 1,
    firstName : 'asma',
    lastName : 'Choueibi',
    email : 'asma.choueibi@gmai.com',
    password :'asma'
  };
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


  addBook(user: User, bookData:FormData, category: Category): void {
    const dto={userId:user.id, bookData, categoryId:category};
    console.log(dto);
    this.bookService.addBook(dto).subscribe(
      result => {
        if (result) {
          console.log('Book added successfully');

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
      this.addBook(this.staticUser, bookData ,this.bookForm.value.category);
    } else {
      console.error('Invalid Form please Check again');
    }
  }


}
