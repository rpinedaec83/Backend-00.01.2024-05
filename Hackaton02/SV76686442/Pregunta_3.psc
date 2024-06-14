Algoritmo Pregunta_3
	Escribir "Ingrese un numero"
	Definir num, ud como Entero
	Leer num
	Si num<0 Entonces
		num= num*(-1)
	Fin Si
	Si num>=0 Entonces
		ud=num-trunc(num/10)*10		
	Fin Si
	
	Si ud==4 Entonces
		Escribir "El numero ingresado termina en 4"
	SiNo
		Escribir "El numero ingresado no termina en 4"
	Fin Si
	
	
FinAlgoritmo
