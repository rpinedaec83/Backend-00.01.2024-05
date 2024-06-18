Proceso Pregunta33
	
	Definir continuar Como Caracter
    Definir numero Como Entero
    Definir suma Como Entero
    Definir cantidadNumeros Como Entero
    Definir contador Como Entero
    Repetir
        suma = 0
        contador = 1
        Escribir "¿Cuántos números desea ingresar? "
        Leer cantidadNumeros
        Mientras contador <= cantidadNumeros Hacer
            Escribir "Ingrese el número ", contador, ": "
            Leer numero
            suma = suma + numero
            contador = contador + 1
        FinMientras
        Escribir "La suma total de los números ingresados es: ", suma
        Escribir "¿Desea continuar? (S/N): "
        Leer continuar
		
    Hasta Que continuar = 'N' O continuar = 'n'
FinProceso
