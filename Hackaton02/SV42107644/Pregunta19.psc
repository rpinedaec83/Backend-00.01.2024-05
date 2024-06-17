//19. Hacer un algoritmo en Pseint para una heladeria se tienen 4 tipos de empleados 
//ordenados de la siguiente forma con su numero identificador y salario diario correspondiente:
//	Cajero (56$/dia).
//	Servidor (64$/dia).
//	Preparador de mezclas (80$/dia).
//	Mantenimiento (48$/dia).
//El dueño de la tienda desea tener un programa donde solo ingrese dos numeros enteros 
//que representen al numero identificador del empleado y la cantidad de dias que trabajo en la semana (6 dias maximos).
//Y el programa le mostrara por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingreso

Proceso Pregunta19
	Definir identificador, cantidad_dias Como Entero
	Definir sueldo Como Real
	Dimension salario[4]
	salario[1]= 56.00
	salario[2]= 64.00
	salario[3]= 80.00
	salario[4]= 48.00
	
	bandera = Verdadero
	Mientras bandera Hacer
		Escribir "Ingrese el identificador del empleado: " 
		Escribir " 1. Cajero (56$/dia)"
		Escribir " 2. Servidor (64$/dia)"
		Escribir " 3. Preparador de mezclas (80$/dia)"
		Escribir " 4. Mantenimiento (48$/dia)"
		valida = Falso
		Mientras NO valida Hacer
			Leer identificador
			Si identificador >= 1 y identificador <= 4 Entonces
				valida = Verdadero
			SiNo
				Escribir "Ingrese una opcion valida"
			FinSi
		FinMientras 
		
		Escribir "Ingrese la cantidad de horas trabajadas del empleado (maximo 6): " 
		valida = Falso
		Mientras NO valida Hacer
			Leer cantidad_dias
			Si cantidad_dias >= 0 y cantidad_dias <= 6 Entonces
				valida = Verdadero
			SiNo
				Escribir "Ingrese una opcion valida"
			FinSi
		FinMientras 
		
		sueldo = salario[identificador] * cantidad_dias
		Escribir "Ud debe pagar al empleado: ", sueldo, "$, por los ", cantidad_dias, " dias trabajados" 
		
		valida = Falso
		Mientras NO valida Hacer
			Escribir "Desea realizar otra operacion: Presione S para si o N para no"
			Leer continuar
			Segun continuar Hacer
				"S","N":
					valida = Verdadero
				De Otro Modo:
					Escribir "Ingrese una opcion valida"
			Fin Segun
		FinMientras
		Si continuar == "N" Entonces
			bandera = Falso
		FinSi
	FinMientras
FinProceso
