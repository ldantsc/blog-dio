import { Component, Input, OnInit } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { MoreDetailLinkComponent } from "../more-detail-link/more-detail-link.component";

@Component({
  selector: "app-card-latest",
  standalone: true,
  imports: [MoreDetailLinkComponent, NgOptimizedImage],
  templateUrl: "./card-latest.component.html",
  styleUrl: "./card-latest.component.css",
})
export class CardLatestComponent {
  @Input() id: number = 0;
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() author: string = "";
  @Input() image: string = "";
}
