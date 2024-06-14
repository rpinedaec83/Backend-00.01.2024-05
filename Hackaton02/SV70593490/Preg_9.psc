Proceso Preg_9
	
	Definir aumentodeTrabajador Como Real
	
	Escribir "Ingrese su aumento";
	leer aumentodeTrabajador
	
	Si aumentodeTrabajador >= 2000 Entonces
		
		aumentodeTrabajador = aumentodeTrabajador * 1.05
		Escribir "El aumento es de: 5% "
		
	SiNo
		aumentodeTrabajador = aumentodeTrabajador * 0.10
		Escribir "Su aumento es de : 10% "
		
		
	FinSi
	
	
	
	
FinProceso
