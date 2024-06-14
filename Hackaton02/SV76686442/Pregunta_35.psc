Algoritmo Pregunta_35
	Definir num,mayorN, menorN Como Entero
	Para i<-1 Hasta 20 Hacer
		Escribir "Ingresa el numero ",i,":"
		Leer num
		Si i=1 Entonces
			mayorN<-num
			menorN<-num
		SiNo
			Si num>mayorN Entonces
				mayorN<-num
			Fin Si
			Si num<menorN Entonces
				menorN<-num
			Fin Si
		Fin Si
	Fin Para
	Escribir "El número mayor es: ", mayorN
    Escribir "El número menor es: ", menorN
FinAlgoritmo
