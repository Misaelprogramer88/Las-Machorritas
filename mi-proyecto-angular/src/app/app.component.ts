import { Component } from '@angular/core';
import { BrandonComponent } from './brandon/brandon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BrandonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto-angular';
}
