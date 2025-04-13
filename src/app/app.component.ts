import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // importante en arquitectura standalone
  imports: [RouterModule], // aquí se importa RouterModule para habilitar <router-outlet>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alcalaparrilla-mar';
}
