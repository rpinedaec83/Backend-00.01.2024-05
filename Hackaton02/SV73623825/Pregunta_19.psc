//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
//con su número identificador y salario diario correspondiente:
//FinPara
//Cajero (56$/día).
//Servidor (64$/día).				
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al 
//número identificador del empleado y la cantidad de días que 
//trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
Proceso Pregunta_19
	Escribir "************************"
	Escribir "Cajero = 1"
	Escribir "Servidor = 2"
	Escribir "Preparador de mezclas = 3"
	Escribir "Mantenimiento = 4"
	Escribir "************************"
	Definir trabajador,dias Como Entero
	Escribir "Ingrese el numero del trabajador"
	Leer trabajador
	Escribir "Dias trabajados en la semana"
	Leer dias
	Si dias<6 Entonces
		Segun trabajador Hacer
			1:
				Escribir "Cajero se le debe pagar $",dias*56
			2:
				Escribir "Servidor se le debe pagar $",dias*64
			3:
				Escribir "Preparador de mezclas se le debe pagar $",dias*80
			4:
				Escribir "Mantenimiento se le debe pagar $", dias*48	
			De Otro Modo:
				Escribir "Datos incorrectos"
		Fin Segun
	SiNo
		Escribir "Datos incorrectos"
	Fin Si
	
FinProceso
