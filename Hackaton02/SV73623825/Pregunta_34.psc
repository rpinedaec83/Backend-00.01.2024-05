//Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.
Proceso Pregunta_34
	Definir num Como Entero
	num<-1
	Mientras num<=9 Hacer
		Escribir "Tabla de multiplicar del numero ",num
		Para i<-1 Hasta 12  Hacer
			
			Escribir num ," * ",i," = ",num*i
		Fin Para
		num<-num+1
	Fin Mientras
	
FinProceso
