package com.clinica.consulta.dao;


import org.springframework.data.jpa.repository.JpaRepository;


import com.clinica.consulta.model.dh_paciente;

public interface PacienteDAO extends JpaRepository<dh_paciente, Integer>{

}
