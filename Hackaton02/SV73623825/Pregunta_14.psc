//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso Pregunta_14
	Definir num,cont,num_ref Como Entero
	Escribir "Ingrese un numero entre 1 al 10"
	Leer num
	Si num%2==0 y num<>2 Entonces
		Escribir "El numero ",num," no es primo"
	SiNo
		cont<-0
		num_ref<-num
		Mientras num_ref<>1 Hacer
			Si num%num_ref==0 Entonces
				cont<-cont+1
			Fin Si
			num_ref<-num_ref-1
		Fin Mientras
		Si cont==1 Entonces
			Escribir "El numero ", num," es primo"
		SiNo
			Escribir "El numero ",num," no es primo"
		Fin Si
	Fin Si
FinProceso
