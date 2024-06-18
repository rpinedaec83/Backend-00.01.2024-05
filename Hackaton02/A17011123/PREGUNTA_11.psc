Proceso PREGUNTA_11
	Escribir "Ingrese el primer número: "
    Leer numero1
    Escribir "Ingrese el segundo número: "
    Leer numero2
    Escribir "Ingrese el tercer número: "
    Leer numero3
    
    Si numero1 >= numero2 Y numero1 >= numero3 Entonces
        Escribir "El mayor número es: ", numero1
    Sino
        Si numero2 >= numero1 Y numero2 >= numero3 Entonces
            Escribir "El mayor número es: ", numero2
        Sino
            Escribir "El mayor número es: ", numero3
        FinSi
    FinSi
FinProceso
