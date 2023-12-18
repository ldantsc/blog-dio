import { Component } from '@angular/core';
import { CardLatestComponent } from '../../components/card-latest/card-latest.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardLatestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
