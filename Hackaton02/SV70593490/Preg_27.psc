Proceso Preg_27
	
	Definir Suma, Cantidad Como Real
	
	suma=0
	cantidad=0
	
	Escribir "Ingresa un numero positivo O un numero negativo para cerrar =) "
	leer num
	
	Mientras num >= 0 Hacer
		
		Suma= Suma + num
		
		Cantidad = Cantidad + 1
		
		leer num
		
	FinMientras
	
	Si Cantidad > 0 Entonces
		
		Escribir "La media de positivos es: ", suma / Cantidad
		
		
	SiNo
		
		Escribir "No ingreso numeros positivos"
	FinSi
	
FinProceso
