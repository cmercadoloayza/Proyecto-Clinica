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

import com.clinica.consulta.dao.DoctorDAO;
import com.clinica.consulta.model.dh_doctor;

@RestController
@RequestMapping("doctor")
@CrossOrigin
public class DoctorREST {

	@Autowired
	private DoctorDAO doctorDAO;

	@RequestMapping(value = "", method = RequestMethod.POST)
	public void guardarDoctor(@RequestBody dh_doctor pEntity) {
		if (pEntity.getIddoctor() > 0)
			doctorDAO.save(pEntity);
		else {
			Long vCount = doctorDAO.count();
			pEntity.setIddoctor(vCount.intValue() + 1);
			doctorDAO.save(pEntity);
		}
	}

	@GetMapping
	public ResponseEntity<List<dh_doctor>> getDoctorList() {
		List<dh_doctor> colDoctor = doctorDAO.findAll();
		return ResponseEntity.ok(colDoctor);
	}

	@RequestMapping(value = "{id}")
	public ResponseEntity<dh_doctor> getPacienteById(@PathVariable("id") Integer pDoctor) {
		Optional<dh_doctor> vDoctor = doctorDAO.findById(pDoctor);
		if (vDoctor.isPresent()) {
			return ResponseEntity.ok(vDoctor.get());
		} else {
			return ResponseEntity.noContent().build();

		}

	}

}
