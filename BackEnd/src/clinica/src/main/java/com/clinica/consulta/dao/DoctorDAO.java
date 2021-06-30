package com.clinica.consulta.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clinica.consulta.model.dh_doctor;

public interface DoctorDAO extends JpaRepository<dh_doctor, Integer>{

}
