Proceso PREGUNTA_33
	Repetir
        suma = 0
        
        Escribir "Ingrese tres numeros:"
        
        Para n = 1 Hasta 3 Hacer
            Escribir "numero ", n, ":"
            Leer numero
            suma = suma + numero
        FinPara
		
        Escribir "La suma de los numeros ingresados es: ", suma
		
        Escribir "¿Desea continuar? escribe S para continuar y N para culminar:"
        Leer continuar
    Hasta Que continuar = "n"
FinProceso
