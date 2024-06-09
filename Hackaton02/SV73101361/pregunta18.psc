// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

// $10. Si se compran unidades separadas hasta 9.

// $8. Si se compran entre 10 unidades hasta 99.

// $7. Entre 100 y 499 unidades.

// $6. Para mas de 500 unidades.

// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.


Algoritmo pregunta18

    Definir CDs Como Entero;
    Definir PU Como Real;
    Definir PT Como Real;
    Definir Ganancia Como Real;

    Escribir "Ingrese la cantidad de CDs a comprar:";
    Leer CDs;

    // Determinar el precio por unidad según la cantidad
    Si CDs <= 9 Entonces
        PU <- 10;
    Sino Si CDs >= 10 Y CDs <= 99 Entonces
        PU <- 8;
        Sino Si CDs >= 100 Y CDs <= 499 Entonces
            PU <- 7;
            Sino
            PU <- 6;
            FinSi
        FinSi
    FinSi

    PT <- CDs * PU;
    Ganancia <- PT * 0.0825;

    Escribir "El precio total para el cliente fue de: $", PT;
    Escribir "La Ganancia para el vendedor: $", Ganancia;

FinAlgoritmo
