import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MoreDetailLinkComponent } from '../more-detail-link/more-detail-link.component';
import { BlogApiService } from '../../services/blog-api.service';


@Component({
  selector: 'app-card-newsletter',
  standalone: true,
  imports: [MoreDetailLinkComponent, NgOptimizedImage],
  templateUrl: './card-newsletter.component.html',
  styleUrl: './card-newsletter.component.css'
})
export class CardNewsletterComponent implements OnInit {

  title: string = ""
  descript: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  image: string = "/assets/card-image.png"

  constructor(private service: BlogApiService) {
  }

  ngOnInit(): void {
    this.service.getNewsletter(1).subscribe({
      next(res) {
        console.log(res)
      },
    })
  }


}
