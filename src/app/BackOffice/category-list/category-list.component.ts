import { Component, OnInit } from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        this.categories = this.categories.filter(category => category.idCategory !== categoryId);
      }
    );
  }

  onOpenModel (category : Category): void{
    this.editCategory = category;
    this.categoryForm.patchValue(category);
  }

    OnEditCategory(){
      if (this.categoryForm.valid) {
        const updatedCategory: Category = this.categoryForm.value;
        this.categoryService.updateCategory(updatedCategory).subscribe(
          (resp) => {
            console.log(resp);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
}
