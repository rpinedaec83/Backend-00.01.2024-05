Proceso PREGUNTA_12
	Escribir "Ingrese el primer número: "
    Leer numero1
    Escribir "Ingrese el segundo número: "
    Leer numero2
    
    Si numero1 > numero2 Entonces
        Escribir "El mayor número es: ", numero1
    Sino
        Si numero2 > numero1 Entonces
            Escribir "El mayor número es: ", numero2
        Sino
            Escribir "Ambos números son iguales."
        FinSi
    FinSi
FinProceso
