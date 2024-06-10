//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Pregunta_23
	Definir num,sum Como Entero
	Escribir "Ingrese un numero"
	Leer num
	sum<-0
	Para i<-1 Hasta num Hacer
		Si i%2<>0 y num<>0 Entonces
			suma<-suma+i
		Fin Si
	Fin Para
	Escribir "Suma de imapres es ",suma
FinProceso
