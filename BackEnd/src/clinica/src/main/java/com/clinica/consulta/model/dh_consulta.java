package com.clinica.consulta.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="dh_consulta")
public class dh_consulta {

	@Id
	@Column(name="idconsulta")
	private Integer idconsulta;
	
	@Column
	private String descripcion;
	@Column
	private Date fecha;
	@Column
	private String receta;
	@Column
	private Integer iddoctor;
	@Column
	private Integer idpaciente;
	private String Doctor;
	private String Paciente;
	
	public String getDoctor() {
		return Doctor;
	}
	public void setDoctor(String doctor) {
		Doctor = doctor;
	}
	public String getPaciente() {
		return Paciente;
	}
	public void setPaciente(String paciente) {
		Paciente = paciente;
	}
	public Integer getIdconsulta() {
		return idconsulta;
	}
	public void setIdconsulta(Integer idconsulta) {
		this.idconsulta = idconsulta;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public String getReceta() {
		return receta;
	}
	public void setReceta(String receta) {
		this.receta = receta;
	}
	public Integer getIddoctor() {
		return iddoctor;
	}
	public void setIddoctor(Integer iddoctor) {
		this.iddoctor = iddoctor;
	}
	public Integer getIdpaciente() {
		return idpaciente;
	}
	public void setIdpaciente(Integer idpaciente) {
		this.idpaciente = idpaciente;
	}	
	
	
	
}