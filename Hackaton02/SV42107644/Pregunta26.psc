//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.

Proceso Pregunta26
	Definir primer_numero, segundo_numero, cociente, factor Como Entero
	bandera = Verdadero
	
	Mientras bandera Hacer
		Escribir "Ingrese 2 numeros para calcular el resto y cociente"
		Escribir "Ingrese el primer numero"
		Leer primer_numero
		Escribir "Ingrese el segundo numero"
		Leer segundo_numero
		
		Si segundo_numero <> 0 Entonces
			resto = primer_numero
			cociente  = 0
			factor = 1
			Si primer_numero < 0 Entonces
				factor = factor * (-1)
				resto = resto * factor
			FinSi
			Si segundo_numero < 0 Entonces
				factor = factor * (-1)
				segundo_numero = segundo_numero * (-1)
			FinSi
			Mientras resto >= segundo_numero Hacer
				resto = resto - segundo_numero
				cociente = cociente + 1
			Fin Mientras
			Escribir "La respuesta es: Cociente ", cociente * factor, " Residuo ", resto
		SiNo
			Escribir "No puede dividir entre 0"
		FinSi
 
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Desea realizar otra operacion: Presione S para si o N para no"
			Leer continuar
			Segun continuar Hacer
				"S","N":
					valida = Verdadero
				De Otro Modo:
					Escribir "Ingrese una opcion valida"
			Fin Segun
		FinMientras
		Si continuar == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso

