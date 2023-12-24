import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ArticlesData } from "../models/modelData";

@Injectable({
  providedIn: "root",
})
export class BlogApiService {
  private blogUrl: string = "";
  private articlesData: ArticlesData | any;

  constructor(private http: HttpClient) {
    this.blogUrl = environment.blogApi;
  }
  // Get Data Articles
  getArticles(): Observable<ArticlesData> {
    this.articlesData = this.http.get<ArticlesData>(`${this.blogUrl}articles`);
    return this.articlesData;
  }
}
