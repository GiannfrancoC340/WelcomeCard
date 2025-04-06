import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './welcome-card.component.html',
  styleUrl: './welcome-card.component.css',
})
export class WelcomeCardComponent {
  name: string = "Giannfranco";
  message: string = "Welcome to Angular!";
}
