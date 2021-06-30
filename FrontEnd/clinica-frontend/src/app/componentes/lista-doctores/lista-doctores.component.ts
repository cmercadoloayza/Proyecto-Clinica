/**
 * Componente de listado de doctores.
 * Métodos y referencias de vistas de usuario
 *
 * @author Carlos Mercado
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import{DoctoresService}from '../../servicios/doctores.service';
import{Doctor} from '../../modelos/doctor';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';




@Component({
  selector: 'app-lista-doctores',
  templateUrl: './lista-doctores.component.html',
  styleUrls: ['./lista-doctores.component.css']
})
export class ListaDoctoresComponent implements OnInit {


  doctores:Doctor[] = [];
  doctoresOri : Doctor[] = [];
  doctor: Doctor = new Doctor();

  /** 
   * Variables para filtros 
  */  
  nombre : string ="";
  apellido : string ="";
  especialidad : string = "";

  /** 
   * Constantes para paginacion 
  */
  
  //Numero de items por grilla 
  xPag:number = 6;
  pag:number = 1;
  pages:number[] = [];

  constructor(
    private router: Router,
    private doctorService:DoctoresService) {
   }

  ngOnInit(): void {
    this.cargarDoctores();
    this.doctor.iddoctor = 0;
  }
  cargarDoctores():void{
    this.doctorService.leerDoctores().subscribe(resp=>{
      console.log(resp);
      this.doctores = resp as Doctor[];
      this.doctoresOri = this.doctores;
      this.loadPag(this.pag);
      this.setPages();
    })
  }
  verHistorial(idd: number): void { 
    this.router.navigate(['/consultas/', { idd }]);
   }
   
   buscarNombre(event:KeyboardEvent){
     this.nombre.toUpperCase();
    if(event.code === 'Enter'){
      console.log(this.nombre);
      if(this.nombre){
        this.doctores = this.doctoresOri.filter(itm => itm.nombre.toUpperCase().startsWith(this.nombre.toUpperCase()));
      }else{
        this.doctores = this.doctoresOri;
      }
    }
  }
  buscarApellido(event:KeyboardEvent){
    this.apellido.toUpperCase();
    if(event.code === 'Enter'){      
      if(this.apellido){
        this.doctores = this.doctoresOri.filter(itm => itm.apellido.toUpperCase().startsWith(this.apellido.toUpperCase()));
      }else{
        this.doctores = this.doctoresOri;
      }
    }
  }
  buscarEspecialidad(event:KeyboardEvent){
    this.especialidad.toUpperCase();
    if(event.code === 'Enter'){      
      if(this.especialidad){
        this.doctores = this.doctoresOri.filter(itm => itm.especialidad.toUpperCase().startsWith(this.especialidad.toUpperCase()));
      }else{
        this.doctores = this.doctoresOri;
      }
    }
  }

  loadPag(pag:number){
    this.doctores = this.doctoresOri.slice((pag*this.xPag)-this.xPag,(pag*this.xPag));
  }

  setPages(){
    this.pages = [];
    let numberOfPages = Math.ceil(this.doctoresOri.length / this.xPag);
    for(let i=1; i<= numberOfPages;i++){
      this.pages.push(i);
    }


  }

  registrarDoctor() {    
    this.doctorService
      .crearDoctor(this.doctor)
      .subscribe(resp => {
        this.cargarDoctores();
        this.doctor = new Doctor();
      });

  }

}
