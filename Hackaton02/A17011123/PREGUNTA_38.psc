Proceso PREGUNTA_38
	Escribir "Ingrese un número: "
    Leer n
    suma = 0
    Para i = 1 Hasta n-1 Con Paso 1 Hacer
        Si n % i = 0 Entonces
            suma = suma + i
        FinSi
    Fin Para
    Si suma = n Entonces
        Escribir n, " es un número perfecto."
    Sino
        Escribir n, " no es un número perfecto."
    FinSi
FinProceso
