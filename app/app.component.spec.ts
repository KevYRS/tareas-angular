import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

export class Tarea{ 
  nombre: string; 
  estado: boolean; 
  constructor (nombre: string, estado: boolean) 
  { 
      this.nombre = nombre; 
      this.estado = estado; 
  } 
}