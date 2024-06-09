Proceso Pregunta6

    Definir horasTrabajadas Como Real
    Definir sueldoSemanal Como Real
    Definir sueldoPorHoraNormal Como Real
    Definir sueldoPorHoraExtra Como Real
    sueldoPorHoraNormal = 20
    sueldoPorHoraExtra = 25
    Escribir "Ingrese la cantidad de horas trabajadas en la semana: "
    Leer horasTrabajadas
    sueldoSemanal = 0
    Si horasTrabajadas <= 40 Entonces
        sueldoSemanal = horasTrabajadas * sueldoPorHoraNormal
    Sino
        sueldoSemanal = (40 * sueldoPorHoraNormal) + ((horasTrabajadas - 40) * sueldoPorHoraExtra)
    FinSi
    Escribir "El sueldo semanal es: $", sueldoSemanal
	
FinProceso
