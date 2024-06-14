//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Pregunta_11
	Definir num1,num2,num3,num_mayor Como Entero
	Escribir "Ingrese numero 1"
	Leer num1
	Escribir "Ingrese numero 2"
	Leer num2
	Escribir "Ingrese numero 3"
	Leer num3
	
	Si num1>num2 Entonces
		Si num2>num3 Entonces
			Escribir "Mayor es " , num1
		SiNo
			Si num1>num3 Entonces
				Escribir "Mayor es " , num1
			SiNo
				Escribir "Mayor es " , num3
			Fin Si
		Fin Si
	SiNo
		Si num1>num3 Entonces
			Escribir "Mayor es " , num2
		SiNo
			Si num2>num3 Entonces
				Escribir "Mayor es " , num2
			SiNo
				Escribir "Mayor es " , num3
			Fin Si
		Fin Si
	Fin Si
FinProceso
