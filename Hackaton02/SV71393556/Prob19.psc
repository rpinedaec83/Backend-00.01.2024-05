Algoritmo Prob19
	//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su 
	//número identificador y salario diario correspondiente:
	//Cajero (56$/día).
	//Servidor (64$/día).
	//Preparador de mezclas (80$/día).
	//Mantenimiento (48$/día).
	//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al 
	//número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará 
	//por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	Definir  identificador, salario, nroDias, salarioTotal Como Entero;
	
	Escribir "Ingrese el numero identificador: ";
	leer identificador;
	
	Escribir "Ingrese la cantidad de dias trabajados: ";
	leer nroDias;
	
	Segun identificador Hacer
		1:
			puesto = "Cajero";
			salario = 56;
		2:
			puesto = "Servidor";
			salario = 64;
		3:
			puesto = "Preparador de mezclas";
			salario = 80;
		4:
			puesto = "Mantenimiento";
			salario = 48;
		De Otro Modo:
			Escribir "No es un identificador";
	Fin Segun
	salarioTotal = salario*nroDias
	Escribir "al empleado ", puesto,"  con una paga de: $",salarioTotal;
	
FinAlgoritmo
