Algoritmo Pregunta_11
	Escribir "Escribe el primer numero"
	Leer num1
	Escribir "Escribe el segundo numero"
	Leer num2
	Escribir "Escribe el tercer numero"
	Leer num3
	Si num1==num2 Y num2==num3 Entonces
		Escribir "Los numeros son iguales"
	SiNo
		Si num1>num2 y num1>num3 Entonces
			Escribir "El numero mayor es ",num1
		SiNo
			Si num2>num1 y num2>num3 Entonces
				Escribir "El numero mayor es ",num2
			SiNo
				Escribir "El numero mayor es ",num3
			Fin Si
		Fin Si
	Fin Si
	
	
FinAlgoritmo

