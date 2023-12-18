import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-descript-content',
  standalone: true,
  imports: [],
  templateUrl: './footer-descript-content.component.html',
  styleUrl: './footer-descript-content.component.css'
})
export class FooterDescriptContentComponent {
  imageSrc = "/assets/logo-light.svg"
  descript: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
}
