package com.clinica.consulta.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.clinica.consulta.model.dh_consulta;


public interface ConsultaDAO extends JpaRepository<dh_consulta, Integer> {
	 
	  
	@Query(value ="select u.idconsulta,\r\n"
				+ "u.descripcion,\r\n"
		  		+ "u.fecha, \r\n"
		  		+ "u.receta, \r\n"
	  			+ "u.iddoctor, \r\n"
	  			+ "u.idpaciente,    "        
	  			+" CONCAT(p.nombre, ' ' ,p.apellido) as paciente,"
				+" CONCAT(d.nombre, ' ', d.apellido) as doctor" 	      
				+ " from dh_consulta u, dh_doctor d, dh_paciente p "
				+" 	where u.idpaciente=p.idpaciente"
				+" 	and u.iddoctor=d.iddoctor"	      
				+ " order by u.fecha desc", nativeQuery = true)
		  List<dh_consulta> findAllData();
		  
	@Query(value ="select u.idconsulta,\r\n"
		  		+ "u.descripcion,\r\n"
		  		+ "u.fecha, \r\n"
		  		+ "u.receta, \r\n"
		  		+ "u.iddoctor, \r\n"
		  		+ "u.idpaciente,    "        
		  		+" CONCAT(p.nombre, ' ' ,p.apellido) as paciente,"
		  		+" CONCAT(d.nombre, ' ', d.apellido) as doctor" 		      
		  		+ " from dh_consulta u, dh_doctor d, dh_paciente p "
		  		+" 	where u.idpaciente=p.idpaciente"
		  		+" 	and u.iddoctor=d.iddoctor"
		  		+"  and u.idpaciente = ?1"
		  		+ " order by u.fecha desc", nativeQuery = true)
			List<dh_consulta> findByIdPaciente(Integer pId);
		
			  
	@Query(value ="select u.idconsulta,\r\n"
		  		+ "u.descripcion,\r\n"
		  		+ "u.fecha, \r\n"
		  		+ "u.receta, \r\n"
		  		+ "u.iddoctor, \r\n"
		  		+ "u.idpaciente,    "        
		  		+" CONCAT(p.nombre, ' ' ,p.apellido) as paciente,"
				+" CONCAT(d.nombre, ' ', d.apellido) as doctor" 			     
			    +" from dh_consulta u, dh_doctor d, dh_paciente p "
				+" where u.idpaciente=p.idpaciente"
				+" and u.iddoctor=d.iddoctor"
			    +" and u.iddoctor = ?1"
			    + " order by u.fecha desc", nativeQuery = true)
			List<dh_consulta> findByIdDoctor(Integer pId);
	    
}
