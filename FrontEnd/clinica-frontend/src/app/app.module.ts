import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ListaPacientesComponent } from './componentes/lista-pacientes/lista-pacientes.component';
import { ListaDoctoresComponent } from './componentes/lista-doctores/lista-doctores.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListaPacientesComponent,
    ListaDoctoresComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
