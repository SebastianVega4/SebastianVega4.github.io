import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'], 
  animations: [
    trigger('slideInOut', [
      state('void', style({
        height: '0',
        opacity: '0'
      })),
      state('*', style({
        height: '*',
        opacity: '1'
      })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class ContactComponent {
  activeIndex: number | null = null; // Solo necesitas esta variable

  faqs = [
    {
      id: 1,
      question: '¿Es rica la comida?',
      answer: 'La mejor de la región.'
    },
    {
      id: 2,
      question: '¿Es fácil llegar?',
      answer: 'No hay pierde como puedes ver en el mapa arriba.'
    },
    {
      id: 3,
      question: '¿Se alquila el lugar?',
      answer: 'Claro para matrimonios etc, también alquilamos para estadías en <a href="https://www.booking.com/hotel/co/alcala-cabanas-campestres-paipa.es.html" target="_blank">cabañas y glamping</a>. Gracias por preferirnos.'
    }
  ];

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  activeAccordionItem: number | null = null;
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  // Font Awesome icons
  icons = {
    phone: faPhone,
    envelope: faEnvelope,
    mapMarker: faMapMarkerAlt
  };
  handleSubmit(): void {
    console.log('Form data:', this.contactForm);
    this.contactForm = { name: '', email: '', message: '' };
  }
}