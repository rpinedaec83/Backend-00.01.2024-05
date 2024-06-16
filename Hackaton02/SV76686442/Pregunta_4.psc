Algoritmo Pregunta_4
	Escribir "Ingresa el primer numero"
	Definir num1 Como Entero
	Leer num1
	Escribir "Ingresa el segundo numero"
	Definir num2 Como Entero
	Leer num2
	Escribir "Ingresa el tercer numero"
	Definir num3 Como Entero
	Leer num3
	Si num1>num2 Entonces
		Si num2>num3 Entonces
			Escribir "Los numeros de menor a mayor son ", num3,",",num2,",",num1
		SiNo
			Si num1>num3 Entonces
				Escribir "Los numeros de menor a mayor son ", num2,",",num3,",",num1
			SiNo
				Escribir "Los numeros de menor a mayor son ", num2,",",num1,",",num3
			Fin Si
		Fin Si
	SiNo
		Si num1>num3 Entonces
			Escribir "Los numeros de menor a mayor son ", num3,",",num1,",",num2
		SiNo
			Si num2>num3 Entonces
				Escribir "Los numeros de menor a mayor son ", num1,",",num3,",",num2
			SiNo
				Escribir "Los numeros de menor a mayor son ", num1,",",num2,",",num3
			Fin Si
		Fin Si
	Fin Si
FinAlgoritmo

	