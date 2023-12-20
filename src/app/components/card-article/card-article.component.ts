import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BlogApiService } from '../../services/blog-api.service';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.css'
})

export class CardArticleComponent implements OnInit{
  
  title: string = "Travel"
  descript: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  author: string = "Johne Doe"
  img: string = "/assets/card-img.png"

  constructor(private service: BlogApiService) {}

  ngOnInit(): void {
    this.service.getArticle(1).subscribe({
      next(res) {
        console.log(res)
      },
      error(err) {
        console.error(err)
      },
    })
  }
  
}
