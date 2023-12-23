import { Component, OnInit } from "@angular/core";
import { CardLatestComponent } from "../../components/card-latest/card-latest.component";
import { CardArticleComponent } from "../../components/card-article/card-article.component";
import { CardNewsletterComponent } from "../../components/card-newsletter/card-newsletter.component";
import { BlogApiService } from "../../services/blog-api.service";
import { ArticlesData } from "../../models/modelData";


@Component({
  standalone: true,
  imports: [CardLatestComponent, CardArticleComponent, CardNewsletterComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  articles!: ArticlesData | any;

  constructor(private service: BlogApiService) {}

  ngOnInit(): void {
    this.service.getData("articles").subscribe({
      next: (res: ArticlesData) => {
        this.articles = res;
      },
    });
  }
}
