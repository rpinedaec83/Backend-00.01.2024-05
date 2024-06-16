Proceso Pregunta9
    Definir salarioActual Como Real
    Definir aumento Como Real
    Definir nuevoSalario Como Real
    Escribir "Ingrese el salario actual del trabajador: "
    Leer salarioActual
    Si salarioActual > 2000 Entonces
        aumento <- salarioActual * 0.05
    Sino
        aumento <- salarioActual * 0.10
    FinSi
    nuevoSalario <- salarioActual + aumento
    Escribir "El aumento es: $", aumento
    Escribir "El nuevo salario es: $", nuevoSalario
	
FinProceso
