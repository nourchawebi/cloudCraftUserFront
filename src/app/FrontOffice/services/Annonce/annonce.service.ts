import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Annonce, TypeAnnonce } from '../../models/AnnonceMang/Annonce';
import {UserprofileService} from "../userprofile/userprofile.service";


@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient,private up:UserprofileService) { }
  private baseUrl :string='http://localhost:8081';

  addAnnonce(formData: FormData): Observable<Annonce> {
    const headers = this.up.createAuthorization();
    return this.http.post<Annonce>(`${this.baseUrl}/addAnnonce`, formData,{headers});
  }
  addJob(formData: FormData): Observable<Annonce> {
    const headers = this.up.createAuthorization();

    return this.http.post<Annonce>(`${this.baseUrl}/addJobOffer`, formData,{headers});
  }
  addInternship(formData: FormData): Observable<Annonce> {
    const headers = this.up.createAuthorization();

    return this.http.post<Annonce>(`${this.baseUrl}/addIntership`, formData,{headers});
  }
  addOther(formData: FormData): Observable<Annonce> {
    const headers = this.up.createAuthorization();

    return this.http.post<Annonce>(`${this.baseUrl}/addPost`, formData,{headers});
  }

  updateAnnonce(id: number,annonce :any): Observable<Annonce> {
    const headers = this.up.createAuthorization();

    const url = `${this.baseUrl}/updateAnnonce/${id}`;

    return this.http.put<Annonce>(url,annonce,{headers});
  }

  getAllAnnonces():Observable<Annonce[]>{
    const headers = this.up.createAuthorization();

    return this.http.get<Annonce[]>(`${this.baseUrl}`,{headers});
  }

  getTargetAnnonce(id: number): Observable<Annonce> {
    const headers = this.up.createAuthorization();

    return this.http.get<Annonce>(`${this.baseUrl}/${id}`,{headers});
  }
  getAnnoncesByUser(userId: number): Observable<Annonce[]> {
    const headers = this.up.createAuthorization();

    return this.http.get<Annonce[]>(`${this.baseUrl}/annonceByUser`,{headers});
  }
  deleteAnnonce(id: number): Observable<void> {
    const headers = this.up.createAuthorization();

    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`,{headers});
  }


  filterAnnonces(typeAnnonces: string[]): Observable<Annonce[]> {
    const headers = this.up.createAuthorization();

    let params = new HttpParams();
    typeAnnonces.forEach(type => {
      params = params.append('typeAnnonces', type);
    });
    return this.http.get<Annonce[]>(`${this.baseUrl}/filtrer`, { params,headers });
  }

  searchProduct(title: string): Observable<Annonce[]> {
    const headers = this.up.createAuthorization();

    return this.http.get<Annonce[]>(`${this.baseUrl}/search/${title}`,{headers});
  }
  retrieveAnnonceByType(): Observable<Map<string, number>> {
    const headers = this.up.createAuthorization();

    return this.http.get<Map<string, number>>(`${this.baseUrl}/retrieve-Annonce`,{headers});
  }


  retrieveAnnonceByNbrLikes(): Observable<Annonce[]> {
    const headers = this.up.createAuthorization();

    return this.http.get<Annonce[]>(`${this.baseUrl}/retrieve-MustLike`,{headers});
  }

  retrieveAnnonceByDate(date: string): Observable<Annonce[]> {
    const headers = this.up.createAuthorization();

    return this.http.get<Annonce[]>(`${this.baseUrl}/retrieve-AnnonceDate/${date}`,{headers});
  }
  updateAnnonceee(annonce: Annonce): Observable<Annonce> {
    const headers = this.up.createAuthorization();

    return this.http.put<Annonce>(`${this.baseUrl}/updateAnnonceee`, annonce,{headers});
  }
  getAnnonceById(id: number): Observable<Annonce> {
    const headers = this.up.createAuthorization();

    return this.http.get<Annonce>(`${this.baseUrl}/annonce/${id}`,{headers});
  }

  getNumberOfLikes(annonceId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/nbrLikesParAnnonce/${annonceId}`);
  }

  getNumberOfDislikes(annonceId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/nbrDislikesParAnnonce/${annonceId}`);
  }
}




