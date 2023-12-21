import { Component } from "@angular/core";

@Component({
  selector: "app-footer-contact-content",
  standalone: true,
  template: `
    <ol>
      <li>{{ email }}</li>
      <li>{{ phone }}</li>
      <li>{{ adress }}</li>
    </ol>
  `,
  styles: `
  ol {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 24px;
  }

  li {
    font-family: "Lora", serif;
    font-size: 2rem;
  }
  `,
})
export class FooterContactContentComponent {
  email: string = "emailjhondoe@email.com";
  phone: string = "+1 (386) 693-4183";
  adress: string = "Flagler Beach, Florida(FL)";
}
