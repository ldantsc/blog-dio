import { Component } from '@angular/core';
import { CardLatestComponent } from '../../components/card-latest/card-latest.component';
import { CardArticleComponent } from '../../components/card-article/card-article.component';
import { CardNewsletterComponent } from '../../components/card-newsletter/card-newsletter.component';

@Component({
  standalone: true,
  imports: [CardLatestComponent, CardArticleComponent, CardNewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
