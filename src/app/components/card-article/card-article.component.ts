import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.css'
})
export class CardArticleComponent {
  imageSrc: string = "/assets/card-img.png"
  id: number = 1
}
