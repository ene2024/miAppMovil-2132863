import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  title: string = 'Organizador de tareas!';


  formData = {
    username: '',
    password: '',
    description: ''
  };

  onSubmit() {
    console.log('Datos del formulario:', this.formData);
  }



}
