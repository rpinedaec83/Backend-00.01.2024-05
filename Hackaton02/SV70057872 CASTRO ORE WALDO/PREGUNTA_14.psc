Proceso PREGUNTA_14
	//Hacer un algoritmo en Pseint que lea un entero positivo del 
	//1 al diez y al 9 y determine si es un número primo.
	Definir num Como entero
		
	Escribir "Ingrese el numero "
	Leer num
	
	Si num<10 Entonces
		Si num=2 o num=3 o num=5 o num=7 Entonces
			Escribir "es primo"
		SiNo
			Escribir "no es primo"
		Fin Si
	SiNo
		Escribir "ingrese otro numero"
	Fin Si
	
FinProceso
