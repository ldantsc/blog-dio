import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MoreDetailLinkComponent } from '../more-detail-link/more-detail-link.component';
import { BlogApiService } from '../../services/blog-api.service';

@Component({
  selector: 'app-card-latest',
  standalone: true,
  imports: [MoreDetailLinkComponent, NgOptimizedImage],
  templateUrl: './card-latest.component.html',
  styleUrl: './card-latest.component.css'
})
export class CardLatestComponent implements OnInit {

  title: string='technologies'
  descript: string='lorem ipsum dolor sit amet, consectetur adipiscing elit'
  author: string='john doe'
  image: string = '/assets/card-latest.png'

  constructor(private service: BlogApiService) {
  }
  
  ngOnInit(): void {
    this.service.getLatest(1).subscribe({
      next(res) {
        console.log(res)
      },
    })
  }
}
