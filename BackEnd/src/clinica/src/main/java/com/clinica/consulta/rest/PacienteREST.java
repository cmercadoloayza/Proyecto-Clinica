package com.clinica.consulta.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.clinica.consulta.dao.PacienteDAO;
import com.clinica.consulta.model.dh_paciente;

@RestController
@RequestMapping("paciente")
@CrossOrigin
public class PacienteREST {
	
	
	@Autowired
	private PacienteDAO pacienteDAO;
	@RequestMapping(value="",method = RequestMethod.POST)
	public void guardarPaciente(@RequestBody dh_paciente pEntity) {
		
		if(pEntity.getIdpaciente()>0)
			pacienteDAO.save(pEntity);
		else {
			Long vCount = pacienteDAO.count();
			pEntity.setIdpaciente(vCount.intValue() +1);
			pacienteDAO.save(pEntity);
		}
		
		
		pacienteDAO.save(pEntity);
	}
	
	
	
	@GetMapping
	public ResponseEntity<List<dh_paciente>> getPacienteList(){
		List<dh_paciente> colPaciente = pacienteDAO.findAll();
		return ResponseEntity.ok(colPaciente);
	}
	
	@RequestMapping(value="{id}")	
	public ResponseEntity<dh_paciente> getPacienteById(@PathVariable("id") Integer pPaciente){
		Optional<dh_paciente> vPaciente = pacienteDAO.findById(pPaciente);
		if(vPaciente.isPresent())  {
			return ResponseEntity.ok(vPaciente.get());	
		}
		else {
			return ResponseEntity.noContent().build();
			
		}
		
	}
	
	
	
		
}