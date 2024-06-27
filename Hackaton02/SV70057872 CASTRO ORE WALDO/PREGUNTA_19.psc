Proceso PREGUNTA_19
//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//	Cajero (56$/día).
//	Servidor (64$/día).
//	Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//	El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador 
	//del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de
	//dinero que el dueño le debe pagar al empleado que ingresó
	Escribir "Ingrese el codigo del trabajador"
	leer codigo
	
	Escribir "Ingrese el numero de dias"
	leer dias
	
	Definir pago como entero
	Definir trabajador Como Caracter
	
	Segun codigo Hacer
		01:
			trabajador = "Cajero"
			pago=dias*56
		02:
			trabajador = "Servidor"
			pago=dias*64
		03:
			trabajador = "Preparador de mezclas"
			pago=dias*80
		04:
			trabajador = "Mantenimiento"
			pago=dias*48
		De Otro Modo:
			Escribir "Escriba un codigo valido"
	Fin Segun
	
	Escribir trabajador," se le pagará ",pago," dolares"
	
	
FinProceso
