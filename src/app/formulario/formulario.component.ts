import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;

  ngOnInit() {}

  title: string = 'Organizador de tareas!';

  isModalOpen = false;
  name!: string;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  formData = {
    nombre: '',
    fecha: '',
    description: ''
  };

  tareas : any[] = [];

  onSubmit() {
    console.log('Datos del formulario:', this.tareas);
    /*var card = document.querySelector("ta")
    var nuevaTarea = document.createElement("div");
    var content = document.createTextNode(this.formData.description);
    nuevaTarea.appendChild(content);*/

    const nuevaTarea = {
      nombre: this.formData.nombre,
      fecha: this.formData.fecha,
      description: this.formData.description
    };

    this.tareas.push(nuevaTarea);
    this.formData.nombre = '';
    this.formData.fecha = '';
    this.formData.description = '';
    
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

}
