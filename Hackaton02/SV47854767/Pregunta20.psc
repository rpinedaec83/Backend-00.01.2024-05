//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.


Proceso Pregunta20
	
	Definir num1, num2, num3, num4, pares, mayor, media, suma Como Entero
	
	Escribir "Ingrese los numero"
	Leer num1
	Leer num2
	Leer num3
	Leer num4
	
	///verificar numeros pares
	pares <-0;
	si num1 mod 2 =0 Entonces
		pares <- pares +1
	FinSi
	si num2 mod 2 =0 Entonces
		pares <- pares +1
	FinSi
	si num3 mod 2 =0 Entonces
		pares <- pares +1
	FinSi
	si num4 mod 2 =0 Entonces
		pares <- pares +1
	FinSi
	Escribir  "Cantidad de numeros pares: ",pares;
	
	///calcular el mayor
	mayor<-num1;
	si num2 >mayor Entonces
		mayor <- num2
	FinSi
	si num3 > mayor Entonces
		mayor <- num3;
	FinSi
	si num4 > mayor Entonces
		mayor <- num4
	FinSi
	Escribir "El numero mayor es: ",mayor
	
	////Si el tercero es par, calcular el cuadrado del segundo.
	si num3 mod 2 = 0 Entonces
		escribir "El cuadrado del segundo es ", num2*num2
	FinSi
	///Si el primero es menor que el cuarto, calcular la media de los 4 números.
	
	si num1<num4 Entonces
		media <- (num1 +num2+num3+num4)/4
		Escribir  "La media es: ",media
	FinSi
	
	///Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
	///Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	si num2 >num3 Entonces
		si  num3 >= 50 y num3 <= 700 Entonces
			suma <- (num1 +num2+num3+num4)
			Escribir "La suma de los 4 numeros es:", suma
		FinSi
	FinSi
	
FinProceso
