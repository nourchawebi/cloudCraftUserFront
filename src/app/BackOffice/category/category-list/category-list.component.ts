import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Category} from "../../../models/book/category";
import {CategoryService} from "../../../services/api/book/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  categories: Category[] = [];
  editCategory! : Category ;
  categoryForm: FormGroup;
  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) {
    this.categoryForm = this.formBuilder.group({
      idCategory: [null],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
ngOnInit() {
    this.getAllCategories()
}

 getAllCategories (): void {
    this.categoryService.getAllCategories().subscribe(categories =>
      {
        this.categories=categories;
      }
    );
 }

  onDeleteCategory(categoryId: number): void {
    this.categoryService.deleteCategory(categoryId).subscribe(
      () => {
        this.getAllCategories(); // Reload data
      }
    );
  }

  onOpenModel (category : Category): void{
    this.editCategory = category;
    this.categoryForm.patchValue(category);
  }

  OnEditCategory(): void {
    if (this.categoryForm.valid) {
      const updatedCategory: Category = this.categoryForm.value;
      this.categoryService.updateCategory(updatedCategory).subscribe({
        next: (resp) => {
          console.log(resp);
          this.getAllCategories();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

}
