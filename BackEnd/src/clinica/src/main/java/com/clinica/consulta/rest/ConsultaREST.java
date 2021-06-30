package com.clinica.consulta.rest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.clinica.consulta.dao.ConsultaDAO;
import com.clinica.consulta.model.dh_consulta;

@RestController
@RequestMapping("consulta")
@CrossOrigin
public class ConsultaREST {
	@Autowired
	private ConsultaDAO consultaDAO;

	@GetMapping
	public ResponseEntity<List<dh_consulta>> getConsultaList(){
		List<dh_consulta> colPaciente = consultaDAO.findAllData();
		return ResponseEntity.ok(colPaciente);
	}
	
	
	@RequestMapping(value="",method = RequestMethod.POST)
	public void guardarConsulta(@RequestBody dh_consulta pEntity) {
		Long vCount = consultaDAO.count();
		pEntity.setIdconsulta(vCount.intValue()+1);
		pEntity.setFecha(new Date());
		consultaDAO.save(pEntity);
	}
	
	@RequestMapping(value="paciente/{id}")	
	public ResponseEntity<List<dh_consulta>> getConsultaPaciente(@PathVariable("id") Integer pPaciente){
		List<dh_consulta> colConsulta = consultaDAO.findAll();
		ArrayList<dh_consulta> colConsultaPaciente = new ArrayList<dh_consulta>(); 
		colConsulta.forEach(x->{			
			if(x.getIdpaciente()==pPaciente) {
				colConsultaPaciente.add(x);							
			}
			
		});
		
		return ResponseEntity.ok(colConsultaPaciente);
	}
	
	@RequestMapping(value="pacienteSql/{idp}",method = RequestMethod.GET)	
	public ResponseEntity<List<dh_consulta>> getConsultaPacienteNameQuery(@PathVariable("idp") Integer pPaciente){
		List<dh_consulta> colConsulta = consultaDAO.findByIdPaciente(pPaciente);	
		
		return ResponseEntity.ok(colConsulta);
	}
	
	@RequestMapping(value="doctorSql/{idd}",method = RequestMethod.GET)	
	public ResponseEntity<List<dh_consulta>> getConsultaDoctorNameQuery(@PathVariable("idd") Integer pDoctor){
		List<dh_consulta> colConsulta = consultaDAO.findByIdDoctor(pDoctor);	
		
		return ResponseEntity.ok(colConsulta);
	}
}