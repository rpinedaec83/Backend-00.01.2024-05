//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Pregunta_4
	Definir num1,num2,num3 Como Entero
	Escribir "Ingrese numero 1"
	Leer num1
	Escribir "Ingrese numero 2"
	Leer num2
	Escribir "Ingrese numero 3"
	Leer num3
	
	Si num1>num2 Entonces
		Si num2>num3 Entonces
			Escribir num3, " " , num2, " " , num1
		SiNo
			Si num1>num3 Entonces
				Escribir num2, " " , num3, " " , num1
			SiNo
				Escribir num2, " " , num1, " " , num3
			Fin Si
		Fin Si
	SiNo
		Si num1>num3 Entonces
			Escribir num3, " " , num1, " " , num2
		SiNo
			Si num2>num3 Entonces
				Escribir num1, " " , num3, " " , num2
			SiNo
				Escribir num1, " " , num2, " " , num3
			Fin Si
		Fin Si
	Fin Si
	
	
FinProceso
