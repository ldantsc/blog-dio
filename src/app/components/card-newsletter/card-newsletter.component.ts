import { Component } from '@angular/core';
import { MoreDetailLinkComponent } from '../more-detail-link/more-detail-link.component';


@Component({
  selector: 'app-card-newsletter',
  standalone: true,
  imports: [MoreDetailLinkComponent],
  templateUrl: './card-newsletter.component.html',
  styleUrl: './card-newsletter.component.css'
})
export class CardNewsletterComponent {
  descript: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}
