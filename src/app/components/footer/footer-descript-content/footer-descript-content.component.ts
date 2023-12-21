import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-footer-descript-content",
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <img [ngSrc]="imageLogo" width="54" height="54" alt="logo" />
    <p>{{ descript }}</p>
  `,
  styles: `
  img {
    margin-bottom: 14px;
  }
  
  p {
    font-family: "Lora", serif;
    font-size: 2rem;
    font-weight: 400;
    width: 550px;
  }`,
})
export class FooterDescriptContentComponent {
  imageLogo = "/assets/logo-light.svg";
  descript: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco";
}
