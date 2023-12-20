import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { QueryArticleService } from './card-article.service';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-article.component.html',
  styleUrl: './card-article.component.css'
})
export class CardArticleComponent implements OnInit {
    imageSrc: string = "/assets/card-img.png"
    id: number = 1
    parametro!: string;
    api:any = [];

    constructor(private route: ActivatedRoute, private articleService: QueryArticleService) { }
  
    ngOnInit(): void {
      this.parametro = this.route.snapshot.params['parametro'];
      this.articleService.getArticle(this.parametro).subscribe(
        response => { 
          this.api = response
      },
        (error) => {
        console.error('Erro ao buscar dados da API', error);
        }
      )
    }
}
