//Hacer un algoritmo en Pseint para una heladería se tiene 4 tipos de empleados 
//ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor ($64/día).
//Preparador de mezclas ($80/día).
//Mantenimiento ($48/día).
//El dueño de la tienda desea tener un programa donde sólo 
//ingrese dos números enteros que representen al número identificador del empleado y 
//la cantidad de días que trabajó en la semana (6 días máximos). 
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le 
//debe pagar al empleado que ingresó
Proceso  P19
	Definir  identifiacdor Como Entero
	Definir numerodias Como Entero
	Definir Pago Como Entero
 	Escribir  "Ingresar identificador Cajero(11), Servidor(12), Preprarador de mezclas(13), Mantenimiento(14)"
	leer identificador
	Escribir  "# dias Maximo 6 dias"
 	leer numerodias 
	
 	si numerodias > 6 Entonces
 		Escribir "# dias Invalido"
 	SiNo
		
		Segun identificador Hacer
			11:
				Pago = numerodias*56
				Escribir "Total a pagar " i pago
			12:
				Pago = numerodias*64
				Escribir "Total a pagar " i pago
			13:
				Pago = numerodias*80
				Escribir "Total a pagar " i pago
			14:
				Pago = numerodias*48
				Escribir "Total a pagar " i pago	
			De Otro Modo:
				Escribir "Identificador Invalido"
		Fin Segun
		
	FinSi
	
FinProceso
