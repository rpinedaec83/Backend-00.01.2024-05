Proceso Pregunta20
	Definir num1, num2, num3, num4 Como Entero
    Definir pares Como Entero
    Definir mayor Como Entero
    Definir media Como Real
    Definir suma Como Entero
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
    Escribir "Ingrese el tercer número: "
    Leer num3
    Escribir "Ingrese el cuarto número entero positivo: "
    Leer num4

    pares = 0
    mayor = num1
    media = 0
    suma = 0
    Si num1 MOD 2 = 0 Entonces
        pares = pares + 1
    FinSi
    Si num2 MOD 2 = 0 Entonces
        pares = pares + 1
    FinSi
    Si num3 MOD 2 = 0 Entonces
        pares =pares + 1
    FinSi
    Si num4 MOD 2 = 0 Entonces
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
    Si num3 MOD 2 = 0 Entonces
        num2 <- num2 * num2
    FinSi

    Si num1 < num4 Entonces
        media <- (num1 + num2 + num3 + num4) / 4
    FinSi

    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        suma <- num1 + num2 + num3 + num4
    FinSi

    Escribir "Cantidad de números pares:", pares
    Escribir "El mayor de todos es:", mayor
    Escribir "El cuadrado del segundo si el tercero es par:", num2
    Escribir "La media de los 4 números si el primero es menor que el cuarto:", media
    Escribir "La suma de los 4 números si el segundo es mayor que el tercero y el tercero está entre 50 y 700:", suma
	
FinProceso
