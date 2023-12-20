import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ArticleData, LatestData, MoreDetailsData, NewsletterData } from "../models/modelData";

@Injectable({
  providedIn: "root",
})
export class BlogApiService {
  private blogUrl: string = "";
  private modelData: ArticleData | any;

  constructor(private http: HttpClient) {
    this.blogUrl = environment.blogApi;
  }

  // Articles
  getArticle(id: number): Observable<ArticleData> {
    this.modelData = this.http.get<ArticleData>(`${this.blogUrl}articles/${id}`);
    return this.modelData;
  }
  // Newsletter
  getNewsletter(id: number): Observable<NewsletterData> {
    this.modelData = this.http.get<NewsletterData>(`${this.blogUrl}newsletter/${id}`);
    return this.modelData;
  }
  //Latest
  getLatest(id: number): Observable<LatestData> {
    this.modelData = this.http.get<LatestData>(`${this.blogUrl}latest/${id}`);
    return this.modelData;
  }
  //About Us and Footer Info
  getAboutFooter(name: string): Observable<MoreDetailsData> {
    this.modelData = this.http.get<MoreDetailsData>(`${this.blogUrl}more-details/${name}`);
    return this.modelData;
  }
}
