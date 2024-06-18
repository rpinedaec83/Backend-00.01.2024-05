Proceso problema_35
	Definir num, mayor, menor Como Entero
    Definir i Como Entero

    Escribir "Ingrese el primer número:"
    Leer num

    mayor = num
    menor = num

    Para i = 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer num
        Si num > mayor Entonces
            mayor = num
        FinSi
        
        Si num < menor Entonces
            menor = num
        FinSi
    FinPara
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
	
FinProceso
