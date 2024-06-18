Algoritmo Prob8
	//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	Definir  nota1,nota2,nota3 Como Real;
	Definir promedio Como Real;
	
	Escribir  "Ingrese la primera nota: "
	leer nota1;
	
	Escribir  "Ingrese la segunda nota";
	leer nota2;
	
	Escribir  "Ingrese la tercera nota";
	leer nota3;

	promedio <- (nota1+nota2 + nota3)/3;
 
	si promedio> 13.5 Entonces
		Escribir "El estudiante aprobó con un promedio de:",promedio;
	SiNo
		Escribir  "El estudiante no aprobó. su promedio es de:",promedio;
	FinSi
	
FinAlgoritmo
