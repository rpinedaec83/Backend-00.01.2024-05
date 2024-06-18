Algoritmo Pregunta_21
	Definir n,i, factorial como Entero
	Escribir "Ingrese un número entero positivo para calcular su factorial:"
	Leer n
	factorial<-1
	Si n<0 Entonces
	Escribir "El número debe ser un entero positivo."
	SiNo
	Si n=0 Entonces
		Escribir "El factorial de ",n," es: ",factorial
	SiNo		
		Para i<-1 Hasta n Hacer
			factorial<-factorial*i
		Fin Para
		Escribir "El factorial de ", n, " es: ", factorial
	Fin Si
	Fin Si
	
FinAlgoritmo

