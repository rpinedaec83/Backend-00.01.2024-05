Algoritmo Prob26
	//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Escribir "Ingrese el dividendo";
	leer dividendo;
	
	Escribir "Ingrese el divisor";
	leer divisor;
	contador=0;
	
	Repetir
		dividendo = dividendo-divisor;
		contador = contador +1
	Hasta Que dividendo<divisor;
	Escribir "el resto es: ",dividendo;
	Escribir "el cociente es: ",contador;
	
FinAlgoritmo
