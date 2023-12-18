import { Component } from '@angular/core';
import { FooterDescriptContentComponent } from './footer-descript-content/footer-descript-content.component';
import { FooterSocialContentComponent } from './footer-social-content/footer-social-content.component';
import { FooterContactContentComponent } from './footer-contact-content/footer-contact-content.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterDescriptContentComponent, FooterSocialContentComponent, FooterContactContentComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  aboutMeText:string = "Desenvolvido por Lucas Dantas em dezembro de 2023"
}
