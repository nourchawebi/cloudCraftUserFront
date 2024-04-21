import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CategoryService} from "../../services/category.service";
@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit{

  categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) {
    this.categoryForm = this.formBuilder.group(
      {
        name : ['',Validators.required],
        description : ['',Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      this.categoryService.addCategory(this.categoryForm.value).subscribe(
        () => {
          console.log('Category added successfully');
          // Reset the form after successful submission
          this.categoryForm.reset();
        },
        error => {
          console.error('Error adding category:', error);
          // Handle error
        }
      );
    }
  }



}
