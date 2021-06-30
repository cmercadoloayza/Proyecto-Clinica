import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../modelos/paciente';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  URL_API = 'http://localhost:8080/paciente';

  constructor(private http: HttpClient) { }
  leerPacientes() { 
    return this.http.get(this.URL_API); 
  } 
  
  leerSoloPaciente(id: string) { 
    return this.http.get(`${this.URL_API}/${id}`);
  } 
  
  crearPaciente(paciente: Paciente) { 
    return this.http.post(this.URL_API, paciente); 
  } 
  
  modificarPaciente(paciente: Paciente) { 
    return this.http.put(`${this.URL_API}/${paciente.idpaciente}`, paciente); 
  } 
  eliminarPaciente(id: Number) { 
    return this.http.delete(`${this.URL_API}/${id}`);
   }
}
