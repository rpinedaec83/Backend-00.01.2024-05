//3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Proceso Pregunta3
	Definir num Como Entero
	Definir ultimoNum Como Entero
	
	Escribir "Ingrese un numero"
	Leer num
	
	ultimoNum = num % 10
	
	Si ultimoNum = 4 Entonces
		Escribir "El numero SI termina en 4"
	SiNo
		Escribir "El numero NO termina en 4"
	FinSi
	
FinProceso
