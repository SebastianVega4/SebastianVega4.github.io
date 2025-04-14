import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, OnDestroy {
  words: string[] = ['Paz', 'Comodidad', 'Tranquilidad', 'Elegancia', 'Sabor', 'Calidad','Alegria'];
  seccionMenu = 'Menu';
  currentWord = '';
  private intervalId: any;

  ngOnInit() {
    this.randomWord(); // Mostrar primera palabra inmediatamente
    this.startRotation();
  }

  ngOnDestroy() {
    this.stopRotation();
  }

  randomWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[randomIndex];
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      this.randomWord();
    }, 1000); // Cambia cada 2 segundos
  }

  stopRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
