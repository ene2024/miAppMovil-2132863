import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/formulario',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'tarea/:nombre',
    component: TareasComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
