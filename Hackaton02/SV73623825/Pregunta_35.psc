//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números. i
Proceso Pregunta_35
	Definir num,mayor,menor Como Entero
	menor<-999999999
	Para i<-1 Hasta 20 Hacer
		Escribir "Ingrese un numero"
		Leer num
		Si num>mayor Entonces
			mayor<-num
		Fin Si
		Si num<menor Entonces
			menor<-num
		Fin Si
	Fin Para
	Escribir "El mayor numero es ",mayor
	Escribir "El menor numero es ",menor
FinProceso
