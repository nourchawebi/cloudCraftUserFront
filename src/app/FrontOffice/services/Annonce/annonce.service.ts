import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Annonce, TypeAnnonce } from '../../models/AnnonceMang/Annonce';


@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }
  private baseUrl :string='http://localhost:8081';

  addAnnonce(formData: FormData): Observable<Annonce> {
    return this.http.post<Annonce>(`${this.baseUrl}/addAnnonce`, formData);
  }
  addJob(formData: FormData): Observable<Annonce> {
    return this.http.post<Annonce>(`${this.baseUrl}/addJobOffer`, formData);
  }
  addInternship(formData: FormData): Observable<Annonce> {
    return this.http.post<Annonce>(`${this.baseUrl}/addIntership`, formData);
  }
  addOther(formData: FormData): Observable<Annonce> {
    return this.http.post<Annonce>(`${this.baseUrl}/addPost`, formData);
  }


  getAllAnnonces():Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.baseUrl}`);
  }

  getTargetAnnonce(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.baseUrl}/${id}`);
  }
  getAnnoncesByUser(userId: number): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseUrl}/user/${userId}`);
  }
  deleteAnnonce(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  filterAnnonces(typeAnnonces: string[]): Observable<Annonce[]> {
    let params = new HttpParams();
    typeAnnonces.forEach(type => {
      params = params.append('typeAnnonces', type);
    });
    return this.http.get<Annonce[]>(`${this.baseUrl}/filtrer`, { params });
  }

  searchProduct(title: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseUrl}/search/${title}`);
  }
  addAnnonceSimple(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(`${this.baseUrl}/addAnnonceSimple`, annonce);
  }
}




