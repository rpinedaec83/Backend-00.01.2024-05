Proceso PREGUNTA_9
	
    Escribir "Ingrese el salario actual del trabajador: "
    Leer salarioActual
    
    Si salarioActual > 2000 Entonces
        aumento = salarioActual * 0.05
    Sino
        aumento = salarioActual * 0.10
    FinSi
    
    nuevoSalario = salarioActual + aumento
    
    Escribir "El aumento es de: $", aumento
    Escribir "El nuevo salario es de: $", nuevoSalario
FinProceso
