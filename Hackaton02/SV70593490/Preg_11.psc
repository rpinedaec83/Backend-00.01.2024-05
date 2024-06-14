Proceso Preg_11
	
	Definir a, b, c Como Real
	
	Escribir "Ingresar el primer numero"
	leer a
	
	Escribir "Ingresar el segundo numero"
	leer b
	
	Escribir "Ingresar el tercer numero"
	leer c
	

	Si a >= b Y a >= c Entonces
		
		Escribir "El numero mayor es: ",a;
		
	SiNo
		Si b >= a Y b >= c Entonces
			
			Escribir "El numero mayor es: ",b;
			
		SiNo
				Escribir "El numero mayor es: ",c;
				
			FinSi
		FinSi
	
	
FinProceso
