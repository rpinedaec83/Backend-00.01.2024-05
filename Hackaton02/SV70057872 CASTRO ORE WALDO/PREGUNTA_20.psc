Proceso PREGUNTA_20
	
	Definir num1, num2, num3, num4, pares, mayor, cuadradoSeg, media, suma Como Entero
	
	// Inicializar el contador de n�meros pares
	pares <- 0
	
	// Leer los cuatro n�meros
	Escribir "Ingrese el primer n�mero (entero positivo):"
	Leer num1
	Escribir "Ingrese el segundo n�mero (entero positivo):"
	Leer num2
	Escribir "Ingrese el tercer n�mero (entero positivo):"
	Leer num3
	Escribir "Ingrese el cuarto n�mero (entero positivo):"
	Leer num4
	
	// Contar cu�ntos n�meros son pares
	Si num1 % 2 = 0 Entonces
		pares <- pares + 1
	FinSi
	Si num2 % 2 = 0 Entonces
		pares <- pares + 1
	FinSi
	Si num3 % 2 = 0 Entonces
		pares <- pares + 1
	FinSi
	Si num4 % 2 = 0 Entonces
		pares <- pares + 1
	FinSi
	
	// Determinar el mayor de los cuatro n�meros
	mayor <- num1
	Si num2 > mayor Entonces
		mayor <- num2
	FinSi
	Si num3 > mayor Entonces
		mayor <- num3
	FinSi
	Si num4 > mayor Entonces
		mayor <- num4
	FinSi
	
	// Mostrar el n�mero de n�meros pares
	Escribir "Cantidad de n�meros pares: ", pares
	
	// Mostrar el mayor de los n�meros
	Escribir "El mayor de todos los n�meros es: ", mayor
	
	// Si el tercero es par, calcular el cuadrado del segundo
	Si num3 % 2 = 0 Entonces
		cuadradoSeg <- num2 * num2
		Escribir "El cuadrado del segundo n�mero es: ", cuadradoSeg
	FinSi
	
	// Si el primero es menor que el cuarto, calcular la media de los 4 n�meros
	Si num1 < num4 Entonces
		media <- (num1 + num2 + num3 + num4) / 4
		Escribir "La media de los cuatro n�meros es: ", media
	FinSi
	
	// Si el segundo es mayor que el tercero, verificar si el tercero est� entre 50 y 700
	Si num2 > num3 Entonces
		Si num3 >= 50 y num3 <= 700 Entonces
			suma <- num1 + num2 + num3 + num4
			Escribir "La suma de los cuatro n�meros es: ", suma
		FinSi
	FinSi


FinProceso
