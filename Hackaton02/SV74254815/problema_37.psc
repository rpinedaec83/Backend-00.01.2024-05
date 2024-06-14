Proceso problema_37
    Escribir "Ingrese el primer número (a):"
    Leer a
    Escribir "Ingrese el segundo número (b):"
    Leer b
    a = Abs(a)
    b = Abs(b)
    Mientras b <> 0 Hacer
        temp = b
        b = a % b
        a = temp
    FinMientras
    Escribir "El M.C.D. es: ", a
FinProceso
