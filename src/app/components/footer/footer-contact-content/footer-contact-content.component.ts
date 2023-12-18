import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-contact-content',
  standalone: true,
  imports: [],
  templateUrl: './footer-contact-content.component.html',
  styleUrl: './footer-contact-content.component.css'
})
export class FooterContactContentComponent {
  email: string = "emailjhondoe@email.com"
  phone: string = "+1 (386) 693-4183"
  adress: string = "Flagler Beach, Florida(FL)"
}
