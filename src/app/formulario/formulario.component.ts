import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Tareas } from 'src/tareas';
import { TareasService } from './servicios/tareas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {

  constructor(private tareaServicio: TareasService) { }

  tareaServicioArray: Tareas[] = this.tareaServicio.tareas;

  @ViewChild(IonModal)
  modal!: IonModal;

  ngOnInit() {}

  title: string = 'Organizador de tareas!';

  isModalOpen = false;
  name!: string;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  formData: Tareas = {
    nombre: '',
    fecha: '',
    descripcion: ''
  };

  /*tareas : Tareas[] = [];*/

  nuevaTarea: Tareas = {
    nombre: "",
    fecha: "",
    descripcion: ""
  }
  onSubmit() {
    console.log('Datos del formulario:', this.tareaServicio);

    this.nuevaTarea = {
      nombre: this.formData.nombre,
      fecha: this.formData.fecha,
      descripcion: this.formData.descripcion
    };

    //this.tareas.push(this.nuevaTarea); 
  
    this.tareaServicio.agregarTarea(this.nuevaTarea)

    this.formData.nombre = '';
    this.formData.fecha = '';
    this.formData.descripcion = '';
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

}
