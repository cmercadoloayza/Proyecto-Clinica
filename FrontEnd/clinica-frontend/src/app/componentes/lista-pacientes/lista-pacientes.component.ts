/**
 * Componente de listado de pacientes.
 * Métodos y referencias de vistas de usuario
 *
 * @author Carlos Mercado
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import{PacientesService}from '../../servicios/pacientes.service';
import{Paciente}from '../../modelos/paciente';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  /** 
   * Array's contenedores de datos
  */  
  pacientes:Paciente[] = [];
  pacientesOri : Paciente[] = [];
  paciente:Paciente = new Paciente();
  
  /** 
   * Variables para filtros 
  */  
  nombre : string ="";
  apellido:string="";

  /** 
  * Constantes para paginacion 
  */

  //Numero de items por grilla 
  xPag:number = 6;
  pag:number = 1;
  pages:number[] = [];


  constructor(
    private router: Router,
    private pacienteService:PacientesService
    ) { }

  ngOnInit(): void {
    this.cargarPacientes();
    this.paciente.idpaciente=0;
  }

  cargarPacientes():void{
    this.pacienteService.leerPacientes().subscribe(resp=>{
      console.log(resp);
      this.pacientes = resp as Paciente[];
      this.pacientesOri = this.pacientes;
      this.loadPag(this.pag);
      this.setPages();
    })
  }
  verHistorial(idp: number): void {     
    this.router.navigate(['/consultas/', { idp }]);
   }
   
   buscarNombre(event:KeyboardEvent){
    this.nombre = this.nombre.toUpperCase();
    if(event.code === 'Enter'){      
      if(this.nombre){
        this.pacientes = this.pacientesOri.filter(itm => itm.nombre.toUpperCase().startsWith(this.nombre.toUpperCase()));
      }else{
        this.pacientes = this.pacientesOri;
      }
    }
  }
  buscarApellido(event:KeyboardEvent){
    this.apellido.toUpperCase();
    if(event.code === 'Enter'){      
      if(this.apellido){
        this.pacientes = this.pacientesOri.filter(itm => itm.apellido.toUpperCase().startsWith(this.apellido.toUpperCase()));
      }else{
        this.pacientes = this.pacientesOri;
      }
    }
  }
  loadPag(pag:number){
    this.pacientes = this.pacientesOri.slice((pag*this.xPag)-this.xPag,(pag*this.xPag));
  }

  setPages(){
    this.pages=[];
    let numberOfPages = Math.ceil(this.pacientesOri.length / this.xPag);
    for(let i=1; i<= numberOfPages;i++){
      this.pages.push(i);
    }
  }

  registrarPaciente() {    
    this.pacienteService
      .crearPaciente(this.paciente)
      .subscribe(resp => {
        this.cargarPacientes();
        this.paciente = new Paciente();
      });

  }
}
