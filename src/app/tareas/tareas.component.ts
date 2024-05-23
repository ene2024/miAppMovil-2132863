import { Component, OnInit } from '@angular/core';
import { TareasService } from '../formulario/servicios/tareas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  constructor(private tareas: TareasService,private ruta: ActivatedRoute) { }

  ngOnInit() {}

  nombreTarea: string = this.ruta.snapshot.params['nombre'];


  detalleTarea: any = this.tareas.tareaDetalles(this.nombreTarea)

}
