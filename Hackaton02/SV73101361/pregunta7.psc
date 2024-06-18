// 7.Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento

Algoritmo pregunta7
    Definir tipoMembresia Como Caracter;
    Definir montoCompra, montoDescuento, montoFinal Como Real;
    
    Escribir "Ingrese el tipo de membresia (A, B, C): ";
    Leer tipoMembresia;
    
    Escribir "Ingrese el monto de la compra: ";
    Leer montoCompra;
    
    Segun (tipoMembresia) Hacer
        Caso "A":
            montoDescuento <- montoCompra * 0.10;
        Caso "B":
            montoDescuento <- montoCompra * 0.15;
        Caso "C":
            montoDescuento <- montoCompra * 0.20;
        De Otro Modo:
            montoDescuento <- 0;
            Escribir "Tipo de membresia no valida.";
    FinSegun
    
    montoFinal <- montoCompra - montoDescuento;
    
    Escribir "El monto de descuento es: $", montoDescuento;
    Escribir "El monto final a pagar es: $", montoFinal;
    
FinAlgoritmo
