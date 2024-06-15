//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso P21
	Definir N Como Entero
	Definir X Como Entero
	Definir L Como Entero
	Definir Factor Como Entero
	
	Escribir "Ingresar Numero"
	leer N
	
	X<-N
	L<-N
	
	Repetir
		
		Factor = L - 1
		X = X * Factor 
		L = L -1
	Hasta Que Factor = 1 
	
	Escribir "Factorial de " i N i "! = " i X
FinProceso
