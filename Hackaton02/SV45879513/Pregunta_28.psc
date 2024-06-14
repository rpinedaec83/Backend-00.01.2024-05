//Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.
Proceso P28
	Definir Dividendo Como Entero
	Definir Divisor Como Entero
	Definir Resto Como numero
	Definir Cociente Como entero
	
	Escribir "Ingresar Dividendo"
	leer Dividendo
	Escribir "Ingresar Divisor"
	leer Divisor
	
	Si Dividendo>0 Y Divisor>0 Entonces
		
		Si Dividendo > Divisor Entonces
			Cociente = 0
			
			Repetir
				Dividendo = Dividendo - Divisor
				Cociente = Cociente + 1
				Resto = Dividendo
			Hasta Que Dividendo < Divisor
			
		SiNo
			cociente = 0
			Resto = Dividendo
		Fin Si
	SiNo
		Escribir "Ingresar un valor Positivo"
	Fin Si
	Escribir "Cociente " i Cociente
	Escribir "Resto " i Resto
	

FinProceso
