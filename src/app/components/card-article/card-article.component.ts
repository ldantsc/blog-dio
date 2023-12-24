import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.css'
})

export class CardArticleComponent {
  @Input() postNumber: number = 0
  @Input() title: string = ""
  @Input() description: string = ""
  @Input() author: string = ""
  @Input() image: string = ""
}
