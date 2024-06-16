Proceso PREGUNTA_5
    Escribir "Ingrese el n�mero de zapatos que se comprar�n:"
    Leer num_zapatos
    
    Si num_zapatos > 10 Y num_zapatos <= 20 Entonces
        descuento = 0.1
    Sino
        Si num_zapatos > 20 Y num_zapatos <= 30 Entonces
            descuento = 0.2
        Sino
            Si num_zapatos > 30 Entonces
                descuento = 0.4
            Sino
                descuento = 0
            FinSi
        FinSi
    FinSi
    
    precio_unitario = 80
    precio_total = precio_unitario * num_zapatos
    total_a_pagar = precio_total * (1 - descuento)
    
    Escribir "Debe pagarse:", total_a_pagar, "$"
FinProceso
