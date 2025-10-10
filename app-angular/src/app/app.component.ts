import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilCardComponent } from './perfil-card/perfil-card.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilCardComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-angular';
}