import { Component } from '@angular/core';
import { MoreDetailLinkComponent } from '../more-detail-link/more-detail-link.component';

@Component({
  selector: 'app-card-latest',
  standalone: true,
  imports: [MoreDetailLinkComponent],
  templateUrl: './card-latest.component.html',
  styleUrl: './card-latest.component.css'
})
export class CardLatestComponent {
  imageCard: string = '/assets/card-latest.png'
  title: string='technologies'
  descript: string='lorem ipsum dolor sit amet, consectetur adipiscing elit'
  author: string='john doe'
}
