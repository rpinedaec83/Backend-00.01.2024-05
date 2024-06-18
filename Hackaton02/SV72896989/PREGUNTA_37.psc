Proceso PREGUNTA_37
    Escribir "Ingrese el primer numero:"
    Leer numero1
    
    Escribir "Ingrese el segundo numero:"
    Leer numero2
    
    // Algoritmo de Euclides para encontrar el M.C.D.
    Mientras numero2 <> 0 Hacer
        temporal = numero2
        numero2 = numero1 Mod numero2
        numero1 = temporal
    FinMientras
    
    Escribir "El M.C.D. es ", Abs(numero1)
FinProceso