Algoritmo Pregunta_19
    Definir idEmpleado Como Entero
    Definir diasTrabajados Como Entero
    Definir salarioDiario Como Real
    Definir pagoTotal Como Real
    Definir identificadorValido Como Logico
	
    Escribir "Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento): "
    Leer idEmpleado
	
    Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6): "
    Leer diasTrabajados
	
    Si diasTrabajados < 0 O diasTrabajados > 6 Entonces
        Escribir "La cantidad de días trabajados debe estar entre 0 y 6."
    SiNo
        identificadorValido <- Verdadero
		
        Segun idEmpleado Hacer
            1:
                salarioDiario <- 56
            2:
                salarioDiario <- 64
            3:
                salarioDiario <- 80
            4:
                salarioDiario <- 48
            De Otro Modo:
                Escribir "El número identificador del empleado es inválido."
                identificadorValido <- Falso
        Fin Segun
		
        Si identificadorValido Entonces
            pagoTotal <- salarioDiario * diasTrabajados
            Escribir "El pago total al empleado es: $", pagoTotal
        Fin Si
    Fin Si
FinAlgoritmo


