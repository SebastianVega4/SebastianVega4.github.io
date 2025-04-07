import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  word = 0;
  seccionMenu = '';

  ramdomWord() {
    this.word = Math.floor(Math.random() * 3);
  }
  
}
