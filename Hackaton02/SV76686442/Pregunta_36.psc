Algoritmo Pregunta_36
    Definir num, a, b, i Como Entero
	
    Escribir "Ingrese la cantidad de términos de la serie de Fibonacci que desea calcular: "
    Leer num
	Si num<0 Entonces
		Escribir "Ingrese un numero positivo "
	SiNo
		a <- 0
		b <- 1
		Escribir "Serie de Fibonacci hasta el término ", num, ":"
		Escribir a
		Escribir b
		Para i <- 3 Hasta num Hacer
			siguiente <- a + b
			Escribir siguiente
			a <- b
			b <- siguiente
		FinPara
	Fin Si
   
FinAlgoritmo

