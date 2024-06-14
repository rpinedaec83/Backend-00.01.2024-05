//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
Proceso P22
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
