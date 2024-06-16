Proceso PREGUNTA_20
	Definir num1, num2, num3, num4 Como Entero
    Definir pares Como Entero
    Definir mayor Como Entero
    Definir suma Como Real
    
    Escribir "Ingrese N°1: "
    Leer num1
    Escribir "Ingrese N°2: "
    Leer num2
    Escribir "Ingrese N°3: "
    Leer num3
    Escribir "Ingrese N°4: "
    Leer num4
    
    pares = 0
    mayor = num1
    
    Si num1 % 2 = 0 Entonces
        pares = pares + 1
    FinSi
    Si num2 % 2 = 0 Entonces
        pares = pares + 1
    FinSi
    Si num3 % 2 = 0 Entonces
        pares = pares + 1
    FinSi
    Si num4 % 2 = 0 Entonces
        pares = pares + 1
    FinSi
    
    Si num2 > mayor Entonces
        mayor = num2
    FinSi
    Si num3 > mayor Entonces
        mayor = num3
    FinSi
    Si num4 > mayor Entonces
        mayor = num4
    FinSi
    
    Si num3 % 2 = 0 Entonces
        Escribir "El cuadrado del segundo número es:", num2^2
    FinSi
    
    Si num1 < num4 Entonces
        suma = (num1 + num2 + num3 + num4) / 4
        Escribir "La media de los 4 números es:", suma
    FinSi
    
    Si num2 > num3 Entonces
        Si num3 >= 50 Y num3 <= 700 Entonces
            Escribir "El tercer número está entre 50 y 700."
            suma = num1 + num2 + num3 + num4
            Escribir "La suma de los 4 números es:", suma
        FinSi
    FinSi
    
    Escribir "Cantidad de números pares:", pares
    Escribir "El mayor de todos los números es:", mayor
FinProceso
