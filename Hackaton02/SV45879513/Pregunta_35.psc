//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, 
//se debe ingresar sólo veinte números. i
Proceso  P35
		Definir numero Como Real
		Definir mayor, menor Como Real
		Definir i Como Entero
		mayor = -999999
		menor = 999999
		Para i = 1 Hasta 20 Con Paso 1 Hacer
			Escribir "Ingrese el número ", i, ":"
			Leer numero
			Si numero > mayor Entonces
				mayor = numero
			Fin Si
			Si numero < menor Entonces
				menor = numero
			Fin Si
		Fin Para
		Escribir "El número mayor es: ", mayor
		Escribir "El número menor es: ", menor
FinProceso

