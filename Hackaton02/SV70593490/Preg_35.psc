Proceso Preg_35
	
	Definir num, mayor, menor Como Entero
	
	Escribir "Ingrese el primer numero:"
	leer num
	
	mayor = num
	menor = num
	
	Para n = 2 hasta 20 con paso 1 hacer 
		Escribir "Ingrese el numero ", n, ":"
		leer num
		
		Si num > mayor Entonces
			mayor = num
		FinSi
		
		Si num < menor Entonces
			menor = num
		FinSi
	FinPara
	
	Escribir "El mayor es: ", mayor
	Escribir "El menor es: ", menor
	
FinProceso
