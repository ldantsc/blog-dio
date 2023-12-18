import { Component } from '@angular/core';

@Component({
  selector: 'app-card-latest',
  standalone: true,
  imports: [],
  templateUrl: './card-latest.component.html',
  styleUrl: './card-latest.component.css'
})
export class CardLatestComponent {
  imageCard: string = '/assets/card-image.png'
  title: string='technologies'
  descript: string='lorem ipsum dolor sit amet, consectetur adipiscing elit'
  author: string='john doe'
}
