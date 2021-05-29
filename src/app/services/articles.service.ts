import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articles } from '../models/articles';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  base_path = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type' : 'application/json'
    })
  }

  createArticle(item): Observable<Articles>{
    return this.http
    .post<Articles>(this.base_path, JSON.stringify(item), this.httpOptions)
  }

  getArticle(id): Observable<Articles>{
    return this.http.post<Articles>(this.base_path+ '/', this.httpOptions)

  }
}
