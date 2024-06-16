//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
Proceso Pregunta_13
	Definir letra Como Caracter
	Escribir "Ingrese una letra"
	Leer letra
	letra<-Mayusculas(letra)
	Si letra=='A' o letra=='E' o letra=='I' o letra=='O' o letra=='U'  Entonces
		Escribir "Es una vocal"
	SiNo
		Escribir "No es una vocal"
	Fin Si
FinProceso
