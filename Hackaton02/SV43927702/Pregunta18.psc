Proceso Pregunta18
	Definir PRECIO_UNIDAD_1 Como Real
    Definir PRECIO_UNIDAD_2 Como Real
    Definir PRECIO_UNIDAD_3 Como Real
    Definir PRECIO_UNIDAD_4 Como Real
    Definir GANANCIA_VENDEDOR Como Real
    PRECIO_UNIDAD_1 = 10
    PRECIO_UNIDAD_2 = 8
    PRECIO_UNIDAD_3 = 7
    PRECIO_UNIDAD_4 = 6
    GANANCIA_VENDEDOR = 0.0825 
    Definir cantidadCDs Como Entero
    Definir precioTotal Como Real
    Definir gananciaVendedor Como Real
    Escribir "Ingrese la cantidad de CDs a vender: "
    Leer cantidadCDs
    Si cantidadCDs <= 9 Entonces
        precioTotal <- cantidadCDs * PRECIO_UNIDAD_1
	Sino
		Si cantidadCDs >= 10 Y cantidadCDs <= 99 Entonces
        precioTotal <- cantidadCDs * PRECIO_UNIDAD_2
	Sino
		Si cantidadCDs >= 100 Y cantidadCDs <= 499 Entonces
        precioTotal <- cantidadCDs * PRECIO_UNIDAD_3
    Sino  
        precioTotal <- cantidadCDs * PRECIO_UNIDAD_4
    FinSi
FinSi
finsi
    
    gananciaVendedor <- precioTotal * GANANCIA_VENDEDOR

    Escribir "El precio total para el cliente es: $", precioTotal
    Escribir "La ganancia para el vendedor es: $", gananciaVendedor
FinProceso
