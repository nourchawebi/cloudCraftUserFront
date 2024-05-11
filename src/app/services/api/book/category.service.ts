import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../../../models/book/category";
import {Observable} from "rxjs";
import {UserprofileService} from "../../../FrontOffice/services/userprofile/userprofile.service";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,
              private up:UserprofileService) { }

  private readonly baseUrl = environment.API_BASE_URL;
  getCategoryById(id: number): Observable<Category> {
    const headers = this.up.createAuthorization();
    return this.http.get<Category>(`${this.baseUrl}/category/getCategoryById/${id}`, {headers});
  }

  getAllCategories(): Observable<Category[]> {
    const headers = this.up.createAuthorization();
    return this.http.get<Category[]>(`${this.baseUrl}/category/getAllCategories`, {headers});
  }

  addCategory(category: Category): Observable<Category> {
    const headers = this.up.createAuthorization();
    return this.http.post<Category>(`${this.baseUrl}/category/addCategory`, category, {headers});
  }



  updateCategory(category: Category): Observable<Category> {
    const headers = this.up.createAuthorization();
    return this.http.put<Category>(`${this.baseUrl}/category/updateCategory`, category, {headers});
  }
  deleteCategory(id: number): Observable<void> {
    const headers = this.up.createAuthorization();
    return this.http.delete<void>(`${this.baseUrl}/category/deleteCategory/${id}`, {headers});
  }
}
