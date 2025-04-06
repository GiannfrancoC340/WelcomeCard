import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'welcome-card';
}
