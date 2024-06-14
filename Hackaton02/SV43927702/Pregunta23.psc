Proceso Pregunta23
	Definir n Como Entero
    Definir suma Como Entero
    Escribir "Ingrese el valor de n: "
    Leer n
    suma = 0
    Para i desde 1 hasta n Con Paso 1 Hacer
        Si i MOD 2 <> 0 Entonces
            suma = suma + i
        FinSi
    FinPara
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
FinProceso
