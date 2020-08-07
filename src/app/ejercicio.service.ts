import { Injectable } from '@angular/core';
import { Ejercicio } from './ejercicio';
import { EJERCICIOS } from './collection-ejercicios';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }

  getEjercicios(): Observable<Ejercicio[]> {
    return of (EJERCICIOS);
  }

  getEjercicio(id:number): Observable<Ejercicio> {
    return of(EJERCICIOS.find(ejercicio=>ejercicio.id===id));
  }
}
