// 33.Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Algoritmo pregunta33

    Definir opcion Como Caracter
    Repetir
        Escribir "¿Desea continuar con la ejecucion del programa? (S/N):"
        Leer opcion

        Mientras opcion <> "S" y opcion <> "s" y opcion <> "N" y opcion <> "n" Hacer
            Escribir "Opcion no válida. Por favor ingrese S para sí o N para no:"
            Leer opcion
        FinMientras

    Hasta Que opcion == "N" o opcion == "n"

    Escribir "Programa terminado."

FinAlgoritmo
