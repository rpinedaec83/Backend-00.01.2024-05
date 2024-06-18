Proceso PREGUNTA_8
	//Considero como nota aprobatoria 12.5 o m�s
	Escribir "Ingrese nota 1"
	Leer nota_1
	Escribir "Ingrese nota 2"
	Leer nota_2
	Escribir "Ingrese nota 3"
	Leer nota_3
	
	promedio = (nota_1 + nota_2 + nota_3) / 3
	Si  promedio >= 12.5 Entonces
		Escribir "El estudiante aprob�"
	SiNo
		Escribir "El estudiante no aprob�"
	FinSi
FinProceso
