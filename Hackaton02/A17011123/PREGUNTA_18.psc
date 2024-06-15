Proceso PREGUNTA_18
	Escribir "Ingrese la cantidad de CDs a vender: "
    Leer cantidadCDs
    
    Si cantidadCDs <= 9 Entonces
        precioUnitario = 10
    Sino
        Si cantidadCDs >= 10 Y cantidadCDs <= 99 Entonces
            precioUnitario = 8
        Sino
            Si cantidadCDs >= 100 Y cantidadCDs <= 499 Entonces
                precioUnitario = 7
            Sino
                precioUnitario = 6
            FinSi
        FinSi
    FinSi
    
    precioTotalCliente = cantidadCDs * precioUnitario
    
    gananciaVendedor = precioTotalCliente * 0.0825
    
    Escribir "Precio total: $", precioTotalCliente
    Escribir "Ganancia: $", gananciaVendedor
FinProceso
