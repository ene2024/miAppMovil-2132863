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

  tareaDetalles(id: string)
  { 
    let result: any = this.tareas.findIndex((tarea) => tarea.nombre=id) 
    return this.tareas[result]
  }

}
