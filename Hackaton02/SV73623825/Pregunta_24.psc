//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
Proceso Pregunta_24
	Definir sum Como Entero
	sum<-0
	Para i<-1 Hasta 1000 Hacer
		Si i%2==0 Entonces
			suma<-suma+i
		Fin Si
	Fin Para
	Escribir "Suma de pares hasta 1000 es ",suma
FinProceso
