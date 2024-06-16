//Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Proceso P12
	Definir valor1 Como Entero
	definir num como cadena
	definir ultimo como caracter
	definir estatus como cadena

	Escribir "Ingresar numero"
	Leer valor1
	
	num = ConvertirATexto(valor1)
	ultimo = SubCadena(num,Longitud(num),Longitud(num))
	valor1 = ConvertirANumero(ultimo)
	
	Segun valor1 Hacer
		0:
			estatus = "Par"
		1:
			estatus = "Impar"
		2:
			estatus = "Par"
		3:
			estatus = "Impar"
		4:
			estatus = "Par"
		5:
			estatus = "Impar"
		6:
			estatus = "Par"
		7:
			estatus = "Impar"
		8:
			estatus = "Par"
		De Otro Modo:
			estatus = "Impar"
	Fin Segun

		escribir "Numero " i estatus
	
FinProceso
