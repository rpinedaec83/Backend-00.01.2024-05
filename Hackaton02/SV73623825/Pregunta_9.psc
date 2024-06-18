//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Proceso Pregunta_9
	Definir sueldo Como Real
	Escribir "Ingrese el sueldo del trabajador"
	Leer sueldo
	Si sueldo>2000 Entonces
		Escribir "Aumento del sueldo es 5%"
		Escribir "Nuevo sueldo es ",sueldo*1.05
	SiNo
		Escribir "Aumento del sueldo es 10"
		Escribir "Nuevo sueldo es ",sueldo*1.1
	Fin Si
FinProceso
