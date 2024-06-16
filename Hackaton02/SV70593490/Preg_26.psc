Proceso Preg_26
	
	Definir resta, cociente, divisor, dividendo Como Real
	
	Escribir "Ingrese el dividendo:"
	Leer dividendo
	
	Escribir "Ingrese el divisor:"
	Leer divisor
	
	cociente=0
	
	resta=dividendo
	
	mientras resta >= divisor Hacer
		resta=resta-divisor
		cociente=cociente+1
	FinMientras
	
	Escribir "El cociente es: ",cociente;
	Escribir "La resta es: ",resta;
	
FinProceso
