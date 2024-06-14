Proceso PREGUNTA_37
    Escribir "Ingrese el primer número (a): "
    Leer a
    Escribir "Ingrese el segundo número (b): "
    Leer b
    Mientras b <> 0 Hacer
        residuo = a % b
        a = b
        b = residuo
    Fin Mientras
    Escribir "El MCD es: ", a
FinProceso
