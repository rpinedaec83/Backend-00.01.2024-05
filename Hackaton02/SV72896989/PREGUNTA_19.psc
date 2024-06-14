Proceso PREGUNTA_19
    Escribir "Ingrese el numero identificador del empleado"
    Leer identificador
    Escribir "Ingrese la cantidad de d�as que trabaj� en la semana"
    Leer dias_trabajados
    
    Segun identificador Hacer
        1:
            salario_diario = 56
        2:
            salario_diario = 64
        3:
            salario_diario = 80
        4:
            salario_diario = 48
    FinSegun
    
    salario_total = salario_diario * dias_trabajados
    
    Si identificador = 1 o identificador = 2 o identificador = 3 o identificador = 4 Entonces
		Escribir "El due�o de la tienda debe pagar al empleado $", salario_total
	SiNo
		Escribir "El numero identificador de empleado no es valido"
	FinSi
			
FinProceso

