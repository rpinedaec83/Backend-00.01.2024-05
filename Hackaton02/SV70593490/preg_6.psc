Proceso preg_6
	
	Definir sueldo, horasTrabajadas, horasExtras Como Entero
	
	
	
	Escribir "Ingrese el numero de horas trabajadas"
	leer horasTrabajadas
	
	Si horasTrabajadas <= 40 Entonces
		
		sueldo = horasTrabajadas * 20
		
	SiNo
		horasExtras = horasTrabajadas - 40 
		
		sueldo = (40 * 20) + (horasExtras * 25)
		
		
		
	FinSi
	
	Escribir "Su sueldo sera de: ",sueldo;
	
FinProceso
