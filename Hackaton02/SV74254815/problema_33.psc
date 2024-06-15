Proceso problema_33
	Definir respuesta Como Caracter
    Definir continuar Como Logico
    
    continuar = Verdadero
    
    Mientras continuar Hacer
        Escribir "¿Desea continuar? (S/N)"
        Leer respuesta
        
        Si Mayusculas(respuesta) = "N" Entonces
            continuar = Falso
        SiNo
            Si Mayusculas(respuesta) <> "S" Entonces
                Escribir "Respuesta inválida. Se asumirá que desea continuar."
            FinSi
        FinSi
    FinMientras
    
    Escribir "Programa finalizado."
	
FinProceso
