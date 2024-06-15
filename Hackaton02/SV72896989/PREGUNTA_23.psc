Proceso PREGUNTA_23
    Escribir "Se calculara la suma de los numeros impares menores o iguales a n. Ingrese el valor de n:"
    Leer n
    
    suma_impares = 0
    
    Para i <- 1 hasta n Hacer
        Si i % 2 <> 0 Entonces
            suma_impares = suma_impares + i
        FinSi
    FinPara
    
    Escribir "La suma de los numeros impares menores o iguales a ", n, " es ", suma_impares
FinProceso

