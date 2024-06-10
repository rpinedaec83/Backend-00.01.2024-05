//Hacer un algoritmo en Pseint para calcular la suma de los números iguales o menores a n.

Proceso P23
	Definir N Como Entero
	Definir X Como Entero
	Definir L Como Entero
	Definir Factor Como Entero
	
	Escribir "Ingresar Numero"
	leer N
	
	Si N>0 Entonces
		X<-0
		Factor<-0
		Repetir
			x = x + (Factor+1)
			Factor = Factor + 1
		Hasta Que Factor = N 
		Escribir "La suma es " i X
		
		
	SiNo
		Escribir "Ingresar un valor Positivo"
	Fin Si

	

FinProceso
