import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ArticleData, LatestData, NewsletterData } from "../models/modelData";

@Injectable({
  providedIn: "root",
})
export class BlogApiService {
  private blogUrl: string = "";
  private articleData: ArticleData | any;
  private latestData: LatestData | any;

  constructor(private http: HttpClient) {
    this.blogUrl = environment.blogApi;
  }
  // Articles
  getArticle(url: string): Observable<ArticleData> {
    this.articleData = this.http.get<ArticleData>(`${this.blogUrl}${url}`);
    return this.articleData;
  }
  // Latest
  getLatest(url: string): Observable<LatestData> {
    this.latestData = this.http.get<LatestData>(`${this.blogUrl}${url}`);
    return this.latestData;
  }
  //Newsletter
  getNewsletter(url: string): Observable<NewsletterData> {
    this.latestData = this.http.get<LatestData>(`${this.blogUrl}${url}`);
    return this.latestData;
  }
}
