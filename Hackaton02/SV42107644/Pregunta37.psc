//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Proceso Pregunta37
	Definir primer_numero, segundo_numero, auxiliar Como Entero
	Escribir "Ingrese 2 numeros para determinar el maximo comun divisor por medio del algoritmo de Euclides"
	Escribir "Ingrese primer numero" 
	Leer primer_numero
	Escribir "Ingrese segundo numero" 
	Leer segundo_numero
	
	Mientras segundo_numero <> 0 Hacer
        auxiliar = segundo_numero
        segundo_numero = primer_numero % segundo_numero
        primer_numero = auxiliar
    FinMientras
	
    Escribir "El MCD es: ", primer_numero

FinProceso

