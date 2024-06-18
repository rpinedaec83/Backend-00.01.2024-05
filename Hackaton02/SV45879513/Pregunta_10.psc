//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y 
//determinar si el estudiante aprobado o no.

Proceso P10
	Definir nota1 Como Entero
	Definir nota2 Como Entero
	Definir nota3 Como Entero
	Definir promedio Como numero
	Definir notaaprobatoria Como Entero
	definir estatus como cadena
	
	notaaprobatoria = 12
	
	Escribir "Ingresar nota 1"
	Leer nota1
	Escribir "Ingresar nota 2"
	Leer nota2
	Escribir "Ingresar nota 3"
	Leer nota3
	
	promedio = nota1 + nota2 + nota3
	
	promedio = promedio/3
	
	Si promedio > notaaprobatoria Entonces
		estatus = "Aprobado"
	SiNo
		estatus = "Desaprobado"
	Fin Si
	

	escribir "Promedio de notas " i promedio
	escribir "Alumno " i estatus
	
FinProceso
