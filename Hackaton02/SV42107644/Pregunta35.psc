//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Proceso Pregunta35
	Definir valor_ingresado, valor_mayor, valor_menor, contador, limite Como Entero
	limite = 20
	contador = 1
	
	Escribir "Ingrese 20 para identificar cual es mayor y cual es menor: "
	Leer valor_ingresado
	valor_mayor = valor_ingresado
	valor_menor = valor_ingresado
	Repetir
		Leer valor_ingresado
		Si valor_mayor < valor_ingresado Entonces
			valor_mayor = valor_ingresado
		FinSi
		Si valor_menor > valor_ingresado Entonces
			valor_menor = valor_ingresado
		FinSi
		contador = contador + 1
	Hasta que contador > limite -1
	
	Escribir "El valor mayor es: ", valor_mayor
	Escribir "El valor menor es: ", valor_menor
FinProceso
