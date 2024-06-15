//Hacer un algoritmo en Pseint donde se ingresa una hora y nos calcula la hora dentro de un segundo.
Proceso P17
    Definir tipo Como numero
	Definir valor1 como numero
	Definir conversion como numero
    Escribir "Ingrese Medida a convertir 1 (cm -> Pulgadas) O 2 (Libra -> Kilogramos)"
	Leer tipo
	Segun tipo Hacer
		1:
			Escribir "Ingresar cm"
			Leer valor1
			conversion = valor1*0.393701
			Escribir  conversion i "Pulgadas"
		2:
			Escribir "Ingresar Libras"
			Leer valor1
			conversion = valor1*0.453592
			Escribir  conversion i "Kg"

		De Otro Modo:
			Escribir  "Codigo de medida Errao"
	Fin Segun
	
	
FinProceso