//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobo o no.

Proceso Pregunta08
	Definir  nota1, nota2, nota3 Como Real
	Definir promedio Como Real
	nota_aprobatoria = 11
	nota_maxima = 20
	no_es_nota = Verdadero
	Mientras no_es_nota Hacer
		Escribir  "Ingrese la primera nota: "
		Leer nota1
		Si nota1 >= 0 y nota1 <= nota_maxima Entonces
			no_es_nota = Falso
		FinSi
	FinMientras

	no_es_nota = Verdadero
	Mientras no_es_nota Hacer
		Escribir  "Ingrese la segunda nota: "
		Leer nota2
		Si nota2 >= 0 y nota2 <= nota_maxima Entonces
			no_es_nota = Falso
		FinSi
	FinMientras
	
	no_es_nota = Verdadero
	Mientras no_es_nota Hacer
		Escribir  "Ingrese la tercera nota: "
		Leer nota3
		Si nota3 >= 0 y nota3 <= nota_maxima Entonces
			no_es_nota = Falso
		FinSi
	FinMientras
	
	promedio = (nota1 + nota2 + nota3) / 3
	
	Si promedio >= nota_aprobatoria Entonces
		Escribir "El estudiante aprobo"
	SiNo
		Escribir "El estudiante no aprobo"
	FinSi
	
	Escribir "Su promedio es: ", promedio;
FinProceso
