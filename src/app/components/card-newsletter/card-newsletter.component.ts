import { Component, Input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { MoreDetailLinkComponent } from "../more-detail-link/more-detail-link.component";

@Component({
  selector: "app-card-newsletter",
  standalone: true,
  imports: [MoreDetailLinkComponent, NgOptimizedImage],
  templateUrl: "./card-newsletter.component.html",
  styleUrl: "./card-newsletter.component.css",
})
export class CardNewsletterComponent {
  @Input() postNumber: number = 0;
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() image: string = "";
}
