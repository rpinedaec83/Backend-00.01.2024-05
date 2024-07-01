Proceso PREGUNTA_26

	// Declarar variables para el dividendo, divisor, cociente y resto
	Definir dividendo, divisor, cociente, resto Como Entero
	
	// Leer el dividendo y el divisor
	Escribir "Ingrese el dividendo (entero positivo):"
	Leer dividendo
	Escribir "Ingrese el divisor (entero positivo):"
	Leer divisor
	
	// Inicializar el cociente a 0
	cociente <- 0
	// Inicializar el resto con el valor del dividendo
	resto <- dividendo
	
	// Realizar restas sucesivas mientras el resto sea mayor o igual al divisor
	Mientras resto >= divisor Hacer
		resto <- resto - divisor
		cociente <- cociente + 1
	FinMientras
	
	// Mostrar el cociente y el resto
	Escribir "El cociente es: ", cociente
	Escribir "El resto es: ", resto


FinProceso
