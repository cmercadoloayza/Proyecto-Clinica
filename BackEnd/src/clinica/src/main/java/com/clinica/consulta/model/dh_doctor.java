package com.clinica.consulta.model;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="dh_doctor")
public class dh_doctor {
	@Id
	@Column(name="iddoctor")
	private Integer iddoctor;

	@Column
	private String nombre;
	@Column
	private String apellido;
	@Column
	private String especialidad;
	@Column
	private Date fecha_nac;
	@Column
	private String direccion;
	
	public Integer getIddoctor() {
		return iddoctor;
	}
	public void setIddoctor(Integer iddoctor) {
		this.iddoctor = iddoctor;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getEspecialidad() {
		return especialidad;
	}
	public void setEspecialidad(String especialidad) {
		this.especialidad = especialidad;
	}
	public Date getFecha_nac() {
		return fecha_nac;
	}
	public void setFecha_nac(Date fecha_nac) {
		this.fecha_nac = fecha_nac;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	
	
	
}
