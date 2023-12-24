import { Component, OnInit } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { BlogApiService } from "../../services/blog-api.service";
import { ArticlesData } from "../../models/modelData";

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.css",
})
export class PostsComponent implements OnInit {
  private id: any = "0";
  title: string = "";
  author: string = "";
  description: string = "";
  image: string = "assets/about-image.png";

  post: Array<any> = [];
  article!: ArticlesData;

  constructor(private route: ActivatedRoute, private service: BlogApiService) {}

  ngOnInit(): void {
    this.service.getArticles().subscribe({
      next: (response: ArticlesData | any) => {
        for (let data of response) {
          this.post.push(data);
        }

        this.route.paramMap.subscribe((value) => {
          this.id = value.get("id");
          this.article = this.setValue(parseInt(this.id));
        });
      },
    });
  }

  setValue(id: number): any | undefined {
    const findData = this.post.find((arr) => {
      return arr.postNumber === id;
    });
    return findData;
  }
}
