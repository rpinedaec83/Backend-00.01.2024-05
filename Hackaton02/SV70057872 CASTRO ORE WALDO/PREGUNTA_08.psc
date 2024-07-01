Proceso PREGUNTA_08
	//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	Definir nota1, nota2, nota3,promedio Como real
	
	Escribir "Ingrese nota 1"
	Leer nota1
	
	Escribir "Ingrese nota 2"
	Leer nota2
	
	Escribir "Ingrese nota 3"
	Leer nota3
	
	promedio=(nota1+nota2+nota3)/3
	Escribir promedio
	
	Si promedio<10.5 Entonces
		Escribir "Alumno desaprobado"
	SiNo
		Escribir "Alumno aprobado"
	Fin Si
FinProceso
