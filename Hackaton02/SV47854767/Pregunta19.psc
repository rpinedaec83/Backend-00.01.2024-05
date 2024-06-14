//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente 
//forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día). Servidor (64$/día). Preparador de mezclas (80$/día). Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número 
//identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Proceso Pregunta19
	
	Definir identificador, diasTrabajados Como Entero
    Definir salarioDiario, salarioTotal Como Real
	
    Escribir "Ingrese el numero identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):"
    Leer identificador
	
    Escribir "Ingrese la cantidad de dias trabajados en la semana (6 dias maximo):"
    Leer diasTrabajados
	
    Si diasTrabajados < 0 o diasTrabajados > 6 Entonces
        Escribir "Error: La cantidad de dias trabajados debe estar entre 0 y 6."
    Sino
        Segun identificador Hacer
            1:
                salarioDiario = 56
            2:
                salarioDiario = 64
            3:
                salarioDiario = 80
            4:
                salarioDiario = 48
		De Otro Modo:
			Escribir "Error: Identificador de empleado incorrecto."
		FinSegun
	FinSi

	salarioTotal = salarioDiario * diasTrabajados

	Escribir "El salario total para el empleado es: $", salarioTotal
    
FinProceso
