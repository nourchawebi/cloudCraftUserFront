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
  
  updateAnnonce(id: number,annonce :any): Observable<Annonce> {
    const url = `${this.baseUrl}/updateAnnonce/${id}`;
  
    return this.http.put<Annonce>(url,annonce);
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
  /*updateJob(id: number, updatedAnnonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.baseUrl}/job/${id}`, updatedAnnonce);
  }

  updateOther(id: number, updatedAnnonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.baseUrl}/other/${id}`, updatedAnnonce);
  }

  updateLostAndFound(id: number, updatedAnnonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.baseUrl}/lostandfound/${id}`, updatedAnnonce);
  }
  updateAnnonceInternship(id: number, updatedAnnonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.baseUrl}/${id}`, updatedAnnonce);
  }*/

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
  retrieveAnnonceByType(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.baseUrl}/retrieve-Annonce`);
  }
  

  retrieveAnnonceByNbrLikes(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseUrl}/retrieve-MustLike`);
  }

  retrieveAnnonceByDate(date: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseUrl}/retrieve-AnnonceDate/${date}`);
  }
  updateAnnonceee(annonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.baseUrl}/updateAnnonceee`, annonce);
  }
  getAnnonceById(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.baseUrl}/annonce/${id}`);
  }
}




