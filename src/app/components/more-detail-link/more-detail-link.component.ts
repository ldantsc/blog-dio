import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-more-detail-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './more-detail-link.component.html',
  styleUrl: './more-detail-link.component.css'
})
export class MoreDetailLinkComponent {
  link: string = "/content"
}
