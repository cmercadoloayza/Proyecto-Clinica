import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import {ListaPacientesComponent}from './componentes/lista-pacientes/lista-pacientes.component';
import {ListaDoctoresComponent}from './componentes/lista-doctores/lista-doctores.component';
import {ConsultasComponent}from './componentes/consultas/consultas.component';

const routes: Routes = [
  {path: 'pacientes',component:ListaPacientesComponent},
  {path: 'doctores',component:ListaDoctoresComponent},
  {path: 'consultas',component:ConsultasComponent},
  { path: 'principal', component: PrincipalComponent }, 
  { path: '', redirectTo: '/principal', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
