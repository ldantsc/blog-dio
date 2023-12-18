import { Component } from '@angular/core';
import { CardLatestComponent } from '../../components/card-latest/card-latest.component';
import { CardArticleComponent } from '../../components/card-article/card-article.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardLatestComponent, CardArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
