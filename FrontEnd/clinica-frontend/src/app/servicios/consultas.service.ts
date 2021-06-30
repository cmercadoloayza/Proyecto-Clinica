import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{Consulta}from '../modelos/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  URL_API = 'http://localhost:8080/consulta';

  constructor(
    private http: HttpClient) { }


  leerConsulta() { 
    return this.http.get(this.URL_API); 
  } 
  
  leerSoloConsultaPaciente(id: number) { 
    return this.http.get(`${this.URL_API}/pacienteSql/${id}`);
  } 

  leerSoloConsultaDoctor(id: number) { 
    return this.http.get(`${this.URL_API}/doctorSql/${id}`);
  } 
  crearConsulta(consulta: Consulta) { 
    return this.http.post(this.URL_API, consulta);
  }
}
