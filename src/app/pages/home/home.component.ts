import { Component, OnInit } from "@angular/core";
import { CardLatestComponent } from "../../components/card-latest/card-latest.component";
import { CardArticleComponent } from "../../components/card-article/card-article.component";
import { CardNewsletterComponent } from "../../components/card-newsletter/card-newsletter.component";
import { BlogApiService } from "../../services/blog-api.service";
import {
  ArticleData,
  LatestData,
  NewsletterData,
} from "../../models/modelData";

@Component({
  standalone: true,
  imports: [CardLatestComponent, CardArticleComponent, CardNewsletterComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  articles!: ArticleData | any;
  latests!: LatestData | any;
  newsletters!: NewsletterData | any;

  constructor(private service: BlogApiService) {}

  ngOnInit(): void {
    this.service.getArticle("articles").subscribe({
      next: (res: ArticleData) => {
        this.articles = res;
      },
    });

    this.service.getLatest("latest").subscribe({
      next: (res: LatestData) => {
        this.latests = res;
      },
    });

    this.service.getNewsletter("newsletter").subscribe({
      next: (res: NewsletterData) => {
        this.newsletters = res;
      },
    });
  }
}
