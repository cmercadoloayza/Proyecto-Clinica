import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Doctor}from '../modelos/doctor'

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  URL_API = 'http://localhost:8080/doctor';

  constructor(private http: HttpClient) { }

  leerDoctores() { 
    return this.http.get(this.URL_API); 
  } 
  
  leerSoloDoctor(id: string) { 
    return this.http.get(`${this.URL_API}/${id}`);
  } 
  
  crearDoctor(doctor: Doctor) { 
    return this.http.post(this.URL_API, doctor); 
  } 
  
  modificarDoctor(doctor: Doctor) { 
    return this.http.put(`${this.URL_API}/${doctor.iddoctor}`, doctor); 
  } 
  eliminarDoctor(id: Number) { 
    return this.http.delete(`${this.URL_API}/${id}`);
   }


}
