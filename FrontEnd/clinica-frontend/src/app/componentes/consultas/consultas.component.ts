/**
 * Componente de listado de consultas.
 * Métodos y referencias de vistas de usuario
 *
 * @author Carlos Mercado
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultasService } from '../../servicios/consultas.service';
import { Consulta } from '../../modelos/consulta';
import { DatePipe } from '@angular/common';
import { DoctoresService } from '../../servicios/doctores.service';
import { Doctor } from '../../modelos/doctor';
import { Paciente } from '../../modelos/paciente';
import { PacientesService } from '../../servicios/pacientes.service';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
  providers: [DatePipe]
})
export class ConsultasComponent implements OnInit {


  //  idPaciente: Number = 0;
  //  idDoctor: Number=0;
  /** 
   * Array's contenedores de datos
  */
  consultas: Consulta[] = [];
  consultasOri: Consulta[] = [];
  pacientes: Paciente[] = [];
  doctores: Doctor[] = [];
  consulta: Consulta = new Consulta();

  myDate = new Date();

  /** 
   * Constantes para paginacion 
  */
  //Numero de items por grilla 
  xPag: number = 5;

  pag: number = 1;
  pages: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private consultaService: ConsultasService,
    private doctorService: DoctoresService,
    private pacienteService: PacientesService,
    private router: Router,
    private datePipe: DatePipe
  ) { }



  ngOnInit() {

    //Llena dropDow de Doctores en registro
    this.doctorService.leerDoctores().subscribe(resp => {
      this.doctores = resp as Doctor[];
    });
    //Llena dropDow de Pcientes en registro
    this.pacienteService.leerPacientes().subscribe(resp => {
      this.pacientes = resp as Paciente[];
      
    });
    var vv = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
    if (vv != null) {
      this.consulta.fecha = vv;
    }
    this.consulta.idconsulta = 0;
    this.cargarConsultas();
  }

  /**
 * Métodos para cargar todas las consultas realizadas
 * @author Carlos Mercado
 */
  cargarConsultas() {

    if (this.route.snapshot.paramMap.get('idp')) {
      let id: string = this.route.snapshot.paramMap.get('idp')?.toString()!;
      console.log(id);
      //this.idPaciente = Number(id);
      this.consultaService.leerSoloConsultaPaciente(Number(id)).subscribe(resp => {
        this.consultas = resp as Consulta[];
        this.consultasOri = this.consultas;
        this.refreshPagePagin();
      })
    } else if (this.route.snapshot.paramMap.get('idd')) {
      let id: string = this.route.snapshot.paramMap.get('idd')?.toString()!;
      console.log(id);
      //this.idDoctor = Number(id);
      this.consultaService.leerSoloConsultaDoctor(Number(id)).subscribe(resp => {
        this.consultas = resp as Consulta[];
        this.consultasOri = this.consultas;
        this.refreshPagePagin();
      })
    }
    else
      this.cargarConsultasGeneral();
  }
  refreshPagePagin() {
    this.loadPag(this.pag);
    this.setPages();

  }

  registrarConsulta() {
    var vv = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    if (vv != null) {
      this.consulta.fecha = vv;
    }

    this.consultaService
      .crearConsulta(this.consulta)
      .subscribe(resp => {
        this.cargarConsultasGeneral();
        this.consulta = new Consulta();
      });

  }
  cargarConsultasGeneral() {

    this.consultaService.leerConsulta().subscribe(resp => {
      this.consultas = resp as Consulta[];
      this.consultasOri = this.consultas;
      this.refreshPagePagin();

    });
  }

  loadPag(pag: number) {
    this.consultas = this.consultasOri.slice((pag * this.xPag) - this.xPag, (pag * this.xPag));
  }

  setPages() {
    this.pages = [];
    let numberOfPages = Math.ceil(this.consultasOri.length / this.xPag);
    for (let i = 1; i <= numberOfPages; i++) {

      this.pages.push(i);
    }
  }

}