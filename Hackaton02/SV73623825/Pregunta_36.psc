//Hacer un algoritmo en Pseint para calcular la serie de Fibonacc.
Proceso Pregunta_36
	
	Escribir "Ingrese la candidad de numeros que desee ver de Fibonacci "
	leer n
	primero<-0
	segundo<-1
	Para i<-1 Hasta n Hacer
		Escribir primero
		tercero<-primero+segundo
		primero<-segundo
		segundo<-tercero
	FinPara
FinProceso
