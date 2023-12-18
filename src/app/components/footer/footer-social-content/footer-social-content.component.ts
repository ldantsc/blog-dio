import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-social-content',
  standalone: true,
  imports: [],
  templateUrl: './footer-social-content.component.html',
  styleUrl: './footer-social-content.component.css'
})
export class FooterSocialContentComponent {
    socialIcons: string[] = ["assets/facebook-icon.svg", "assets/twitter-icon.svg", "assets/linkedin-icon.svg"]
}
