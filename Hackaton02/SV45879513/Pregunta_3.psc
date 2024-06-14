//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso P3
	Definir valor1 Como Entero
	Definir numerocadena como cadena
	definir ultimo Como caracter
	Escribir "Ingresar un numero"
	Leer valor1
	
	numerocadena = ConvertirATexto(valor1)
	
	ultimo = SubCadena(numerocadena,Longitud(numerocadena),Longitud(numerocadena))	
	
	Si ultimo = "4" Entonces
		Escribir "Ultimo digito es 4"
	SiNo
		Escribir "Ultimo digito no es 4"
	Fin Si
	
FinProceso
