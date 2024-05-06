import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../../../models/book/category";
import {Observable} from "rxjs";
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,
              private up:UserprofileService) { }

  private baseUrl = "http://localhost:8081/category"

  getCategoryById(id: number): Observable<Category> {
    const headers = this.up.createAuthorization();
    return this.http.get<Category>(`${this.baseUrl}/getCategoryById/${id}`, {headers});
  }

  getAllCategories(): Observable<Category[]> {
    const headers = this.up.createAuthorization();
    return this.http.get<Category[]>(`${this.baseUrl}/getAllCategories`, {headers});
  }

  addCategory(category: Category): Observable<Category> {
    const headers = this.up.createAuthorization();
    return this.http.post<Category>(`${this.baseUrl}/addCategory`, category, {headers});
  }



  updateCategory(category: Category): Observable<Category> {
    const headers = this.up.createAuthorization();
    return this.http.put<Category>(`${this.baseUrl}/updateCategory`, category, {headers});
  }
  deleteCategory(id: number): Observable<void> {
    const headers = this.up.createAuthorization();
    return this.http.delete<void>(`${this.baseUrl}/deleteCategory/${id}`, {headers});
  }
}
