Proceso PREGUNTA_19
//Hacer un algoritmo en Pseint para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero identificador y salario diario correspondiente:
//	Cajero (56$/d�a).
//	Servidor (64$/d�a).
//	Preparador de mezclas (80$/d�a).
//Mantenimiento (48$/d�a).
//	El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al n�mero identificador 
	//del empleado y la cantidad de d�as que trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar� por pantalla la cantidad de
	//dinero que el due�o le debe pagar al empleado que ingres�
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
	
	Escribir trabajador," se le pagar� ",pago," dolares"
	
	
FinProceso
