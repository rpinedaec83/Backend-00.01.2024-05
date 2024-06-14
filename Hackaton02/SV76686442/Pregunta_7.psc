Algoritmo Pregunta_7
    Definir tipoMembresia Como Caracter
    Escribir "Ingrese el tipo de membresía, digite A, B o C"
    Leer tipoMembresia
    Definir monto Como Real
    Escribir "Ingrese el monto de su compra"
    Leer monto
    tipoMembresia <- Mayusculas(tipoMembresia)
    
    Si monto > 0 Entonces
        Si tipoMembresia = 'A' Entonces
            des = 0.1 * monto
        Sino
            Si tipoMembresia = 'B' Entonces
                des = 0.15 * monto
            Sino
                Si tipoMembresia = 'C' Entonces
                    des = 0.2 * monto
                Sino
                    Escribir "Tipo de membresía invalido"
                Fin Si
            Fin Si
        Fin Si
        
        Si tipoMembresia = 'A' o tipoMembresia = 'B' o tipoMembresia = 'C' Entonces
            PagoTotal = monto - des
            Escribir "Su total a pagar es: ", PagoTotal
        Fin Si
    Sino
        Escribir "Monto ingresado invalido"
    Fin Si
FinAlgoritmo


