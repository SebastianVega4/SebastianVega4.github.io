import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Para producción, reemplaza con tu endpoint real
  private apiUrl = 'https://4200-idx-sebastianvega4githubio-1744581552451.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev/contact';

  constructor(private http: HttpClient) { }

  // Método real para producción
  sendContactForm(formData: any): Observable<any> {
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toISOString()
    };

    return this.http.post(this.apiUrl, payload);
  }

  // Método simulado para desarrollo
  sendContactFormMock(formData: any): Observable<any> {
    console.log('Datos del formulario (simulación):', formData);
    // Simulamos una respuesta exitosa después de 1 segundo
    return of({
      success: true,
      message: 'Mensaje recibido correctamente'
    }).pipe(
      delay(1000)
    );
  }
}