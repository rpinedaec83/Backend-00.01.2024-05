Proceso PREGUNTA_38
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	Escribir "Escriba un numero entero cualquiera. "
	
	Definir num, suma Como Entero
	
	leer num
	
	suma<-0
	Para i<-0 Hasta num-2 Con Paso paso Hacer
		i=i+1
		r=num%i
		Si r=0 Entonces
			suma=i+suma
			Escribir i
		Fin Si
		
		
	Fin Para
	Si suma=num Entonces
		Escribir "Este numero es perfecto porque la suma de sus divisores es ", num
	SiNo
		Escribir "No es perfecto porque la suma de sus divisores no es el mismo numero sino es:", num
	Fin Si
	
FinProceso
