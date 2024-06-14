Proceso Preg_4
	
	Definir num1, num2, num3, xd Como Entero
	
	Escribir "Ingrese 3 numeros enteros"
	Leer num1, num2, num3
	
	Si num1 > num2 Entonces
		xd = num1
		num1 = num2
		num2 = xd
	FinSi
	
	Si num3 > num2 Entonces
		xd = num1
		num1 = num3
		num3 = xd
	FinSi
	
	Si num2 > num3 Entonces
		xd = num2
		num2 = num3
		num3 = xd
	FinSi
	
	
	Escribir "Los números ordenados de menor a mayor son:", num1 , num2 , num3
	
	
	
FinProceso
