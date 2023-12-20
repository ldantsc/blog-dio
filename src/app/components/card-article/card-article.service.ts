import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class QueryArticleService {
  
    url = "https://blog-json-rosy.vercel.app/articles/"
    
    constructor(private http: HttpClient) { }
  
    getArticle(param: string):Observable<any[]>{
      return (this.http.get<any[]>(this.url + `${param}`));
    }
  }