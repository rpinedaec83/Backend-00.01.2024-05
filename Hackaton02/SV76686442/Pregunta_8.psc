Algoritmo Pregunta_8
	Escribir "Ingrese la nota1"
	Leer num1
	Escribir "Ingrese la nota2"
	Leer num2
	Escribir "Ingrese la nota3"
	Leer num3
	Si num1 < 0 O num1 > 20 O num2 < 0 O num2 > 20 O num3 < 0 O num3 > 20 Entonces
		Escribir "Nota invalida"
	SiNo
		promedio=(num1+num2+num3)/3
		Si promedio>=13 Entonces
			Escribir "El promedio del estudiante es ",promedio," por lo tanto esta aprobado"
		SiNo
			Escribir "El promedio del estudiante es ",promedio, " por lo tanto no esta aprobado"
		Fin Si
	Fin Si
	
FinAlgoritmo

