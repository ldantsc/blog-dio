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
  id: string | null = "0";
  title: string = "TITLE";
  author: string = "AUTHOR";
  description: string = "TEXT ";
  image: string = "assets/about-image.png";
  result: string = "";
  posts!: ArticlesData | any;
  
  constructor(private route: ActivatedRoute, private service: BlogApiService) {}
  
  setValues(id: string) {
    const result = this.posts
    return result
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get("id");
    });

    this.service.getData("articles").subscribe({
      next: (res: ArticlesData) => {
        console.log(res, 'res')
        this.posts = res;
        console.log(this.posts, 'this.posts')
      },
    });

    
  }

}
