-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: dh_consultorio
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dh_consulta`
--

DROP TABLE IF EXISTS `dh_consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dh_consulta` (
  `idconsulta` int NOT NULL,
  `descripcion` longtext NOT NULL,
  `fecha` datetime NOT NULL,
  `receta` longtext NOT NULL,
  `iddoctor` int NOT NULL,
  `idpaciente` int NOT NULL,
  `doctor` varchar(255) DEFAULT NULL,
  `paciente` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idconsulta`),
  KEY `FK_PACIENTE_idx` (`idpaciente`),
  KEY `FK_DOCTOR_idx` (`iddoctor`),
  CONSTRAINT `FK_DOCTOR` FOREIGN KEY (`iddoctor`) REFERENCES `dh_doctor` (`iddoctor`),
  CONSTRAINT `FK_PACIENTE` FOREIGN KEY (`idpaciente`) REFERENCES `dh_paciente` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabla relacional de registro de consultas y recetas';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dh_consulta`
--

LOCK TABLES `dh_consulta` WRITE;
/*!40000 ALTER TABLE `dh_consulta` DISABLE KEYS */;
INSERT INTO `dh_consulta` VALUES (1,'CONSULTA GENERAL','2021-01-01 00:00:00','1 PARACETAMOL CADA 8 HORAS',2,1,NULL,NULL),(2,'CONSULTA ESPECIALISTA GINECOLOGIA','2021-07-03 00:00:00','1 IBUPROFENO CADA 8 HORAS',3,1,NULL,NULL),(3,'CONSULTA GENERAL','2021-02-03 00:00:00','2 ASPIRINAS CADA 4 HORAS',1,2,NULL,NULL),(4,'CONSULTA GENERAL CASO 1','2021-06-29 20:43:31','1 PARACETAMOL\n1 IBUPROFENO',2,2,NULL,NULL),(5,'CONSULTA GENERAL CASO 2','2021-06-28 20:00:00','2 OMEPRASOL DE 40ML POR CADA 12 HORAS',3,1,NULL,NULL),(6,'CONSULTA GENERAL CASO 3','2021-06-28 20:00:00','3 PASTILLAS DE OMEPRASOL POR DIA CADA 8 HORAS',4,2,NULL,NULL),(7,'CONSULTA GENERAL CASO 4','2021-06-28 20:00:00','2 ASPIRINAS CADA 5 HORAS',4,1,NULL,NULL),(8,'CONSULTA GENERAL CASO 5','2021-06-29 23:18:48','DIETA POR 7 DIAS',1,1,NULL,NULL),(9,'CONSULTA GENERAL CASO 6','2021-06-29 23:20:09','EVITAR COMIDAS CON GRASAS',3,2,NULL,NULL),(10,'CONSULTA GENERAL CASO 7','2021-06-29 23:32:35','INYECTABLE DE KETOPROFENO',1,2,NULL,NULL),(11,'CONSULTA GENERAL CASO 8','2021-06-29 23:33:41','INYECCION INTRA VENOSA',2,1,NULL,NULL),(12,'CONSULTA GENERAL CASO 9','2021-06-29 23:34:43','SUERO DE HIDRATACION',3,1,NULL,NULL),(13,'CONSULTA GENERAL CASO 10','2021-06-29 23:41:43','REFRIANEX DIA Y NOCHE',2,2,NULL,NULL),(14,'CONSULTA GENERAL CASO 11','2021-06-29 23:46:24','NOVADOL 10ML X 5DIAS',2,2,NULL,NULL),(15,'CONSULTA GENERAL CASO 12','2021-06-29 23:48:47','ESOMEPRASOL 40ML 1 X DIA',1,2,NULL,NULL),(16,'CONSULTA GENERAL CASO 13','2021-06-29 23:51:11','RAYOS X DE TORAX \n2 PASTILLAS POR DIA',2,2,NULL,NULL);
/*!40000 ALTER TABLE `dh_consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dh_doctor`
--

DROP TABLE IF EXISTS `dh_doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dh_doctor` (
  `iddoctor` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `especialidad` varchar(45) NOT NULL,
  `fecha_nac` date NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `fotografia` blob,
  PRIMARY KEY (`iddoctor`),
  UNIQUE KEY `iddoctor_UNIQUE` (`iddoctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabla de registro de doctores';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dh_doctor`
--

LOCK TABLES `dh_doctor` WRITE;
/*!40000 ALTER TABLE `dh_doctor` DISABLE KEYS */;
INSERT INTO `dh_doctor` VALUES (1,'CARLOS EDUARDO','MERCADO LOAYZA','PEDIATRA','1983-07-06','AV. VENEZUELA #14 VILLA SAN ANTONIO',NULL),(2,'RODRIGO ALEJANDRO','MORALES VIAMONT','ENDOCRINOLOGIA','1989-06-26','CONDOMINIO LOS ALAMOS NRO 1',NULL),(3,'ERICK SANTIAGO','MERCADO RIVAS','PEDIATRA','2008-12-27','AV. VENEZUELA NRO 14',NULL),(4,'EMMANUEL MATEO','MERCADO RIVAS','OFTALMOLOGO','2013-10-21','AV. VENEZUELA NRO 14',NULL);
/*!40000 ALTER TABLE `dh_doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dh_paciente`
--

DROP TABLE IF EXISTS `dh_paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dh_paciente` (
  `idpaciente` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `fecha_nac` date NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `fotografia` blob,
  PRIMARY KEY (`idpaciente`),
  UNIQUE KEY `idpaciente_UNIQUE` (`idpaciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabla de registro de pacientes';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dh_paciente`
--

LOCK TABLES `dh_paciente` WRITE;
/*!40000 ALTER TABLE `dh_paciente` DISABLE KEYS */;
INSERT INTO `dh_paciente` VALUES (1,'DANIELA JUSTINA','MORALES VIAMONT','1984-08-10','TEJADA SORZANO NRO 426',NULL),(2,'EDITH PRIMITIVA','LOAYZA SILLERICO','1970-06-08','AV. VENEZUELA NRO 14',NULL);
/*!40000 ALTER TABLE `dh_paciente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-30  0:23:37
