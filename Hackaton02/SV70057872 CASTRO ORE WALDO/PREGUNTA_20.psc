Proceso PREGUNTA_20
	
	Definir num1, num2, num3, num4, pares, mayor, cuadradoSeg, media, suma Como Entero
	
	// Inicializar el contador de números pares
	pares <- 0
	
	// Leer los cuatro números
	Escribir "Ingrese el primer número (entero positivo):"
	Leer num1
	Escribir "Ingrese el segundo número (entero positivo):"
	Leer num2
	Escribir "Ingrese el tercer número (entero positivo):"
	Leer num3
	Escribir "Ingrese el cuarto número (entero positivo):"
	Leer num4
	
	// Contar cuántos números son pares
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
	
	// Determinar el mayor de los cuatro números
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
	
	// Mostrar el número de números pares
	Escribir "Cantidad de números pares: ", pares
	
	// Mostrar el mayor de los números
	Escribir "El mayor de todos los números es: ", mayor
	
	// Si el tercero es par, calcular el cuadrado del segundo
	Si num3 % 2 = 0 Entonces
		cuadradoSeg <- num2 * num2
		Escribir "El cuadrado del segundo número es: ", cuadradoSeg
	FinSi
	
	// Si el primero es menor que el cuarto, calcular la media de los 4 números
	Si num1 < num4 Entonces
		media <- (num1 + num2 + num3 + num4) / 4
		Escribir "La media de los cuatro números es: ", media
	FinSi
	
	// Si el segundo es mayor que el tercero, verificar si el tercero está entre 50 y 700
	Si num2 > num3 Entonces
		Si num3 >= 50 y num3 <= 700 Entonces
			suma <- num1 + num2 + num3 + num4
			Escribir "La suma de los cuatro números es: ", suma
		FinSi
	FinSi


FinProceso
