Proceso Pregunta3
	Definir numero Como Entero
    Escribir "Ingrese un numero entero:"
    Leer numero
    ultimo_digito = Abs(numero) % 10
    Si ultimo_digito = 4 Entonces
        Escribir "El numero termina en 4."
    Sino
        Escribir "El numero no termina en 4."
    FinSi
FinProceso
