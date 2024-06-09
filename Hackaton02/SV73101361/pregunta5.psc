// 5.Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Algoritmo pregunta5

    // Declaración de variables
    Definir numeroZapatos Como Entero;
    Definir precioUnitario, totalCompra, descuento, totalConDescuento Como Real;

    precioUnitario <- 80;

    // Entrada de datos
    Escribir "Ingrese el numero de zapatos comprados: ";
    Leer numeroZapatos;

    // Cálculo del total de la compra sin descuento
    totalCompra <- numeroZapatos * precioUnitario;

    // Lógica de negocio para determinar el descuento
    Si numeroZapatos > 30 Entonces
        descuento <- 0.40;
    SiNo
        Si numeroZapatos > 20 Entonces
            descuento <- 0.20;
        SiNo
            Si numeroZapatos > 10 Entonces
                descuento <- 0.10;
            SiNo
                descuento <- 0.0;
            FinSi
        FinSi
    FinSi

    // Cálculo del total con descuento
    totalConDescuento <- totalCompra - (totalCompra * descuento);

    // Salida de resultados
    Escribir "Total de la compra sin descuento: $", totalCompra;
    Escribir "Descuento aplicado: ", descuento * 100, "%";
    Escribir "Total a pagar con descuento: $", totalConDescuento;

FinAlgoritmo
