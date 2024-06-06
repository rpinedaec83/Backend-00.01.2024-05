Proceso Calculadora
	
	Escribir  "Ingresa el Primer Numero"
	Leer primer_numero
	Escribir  "Ingresa el Segundo Numero"
	Leer segundo_numero
	Escribir "Digita 1 para SUMAR, 2 para RESTAR, 3 para MULTIPLICAR y 4 para DIVIDIR"
	Leer operacion
	
	respuesta = 0
	
	Si operacion == 1 Entonces
		respuesta = primer_numero + segundo_numero
	SiNo
		Si operacion == 2 Entonces
			respuesta = primer_numero - segundo_numero
		SiNo
			Si operacion == 3 Entonces
				respuesta = primer_numero * segundo_numero
			SiNo
				Si operacion == 4 Entonces
					respuesta = primer_numero / segundo_numero
				FinSi
			FinSi
		FinSi
	Fin Si
	
	
	
	
	
	Escribir "La respuesta es: ", respuesta
	
	
FinProceso
