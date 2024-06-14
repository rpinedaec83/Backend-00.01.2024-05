Proceso CalculadoraV3
	bandera = Verdadero
	Mientras bandera Hacer
		Escribir  "Ingresa el Primer Numero"
		Leer primer_numero
		Escribir  "Ingresa el Segundo Numero"
		Leer segundo_numero
		Escribir "Digita 1 para SUMAR, 2 para RESTAR, 3 para MULTIPLICAR y 4 para DIVIDIR"
		Leer operacion
		respuesta = 0
		Segun operacion Hacer
			1:
				respuesta = primer_numero + segundo_numero
			2:
				respuesta = primer_numero - segundo_numero
			3:
				respuesta = primer_numero * segundo_numero
			4:
				respuesta = primer_numero / segundo_numero
			De Otro Modo:
				Escribir "Opcion No Valida"
		Fin Segun
		Escribir "La respuesta es: ", respuesta
		Escribir "Desea realizar otra operacion: Presione S para si o N para no"
		Leer continuar
		si continuar == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
	
FinProceso
