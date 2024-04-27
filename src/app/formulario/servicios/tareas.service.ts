import { Injectable } from '@angular/core';
import { Tareas } from 'src/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  tareas: Tareas[] = [];

  getTareas(){
    return this.tareas;
  }

  agregarTarea(tareaNueva: Tareas){

    this.tareas.push(tareaNueva);

  }

}
