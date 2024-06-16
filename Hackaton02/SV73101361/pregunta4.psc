//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

Algoritmo pregunta4
    Dimensionar numeros[3]
    definir temp Como Entero;
    
    Escribir "Ingrese el primer numero entero: ";
    Leer numeros[1];
    
    Escribir "Ingrese el segundo numero entero: ";
    Leer numeros[2];
    
    Escribir "Ingrese el tercer numero entero: ";
    Leer numeros[3];
    
    Para i <- 1 Hasta 2 Hacer
        Para j <- i+1 Hasta 3 Hacer
            Si numeros[i] > numeros[j] Entonces
                temp <- numeros[i];
                numeros[i] <- numeros[j];
                numeros[j] <- temp;
            FinSi
        FinPara
    FinPara
    
    Escribir "Los numeros de menor a mayor son: ", numeros[1], ", ", numeros[2], ", ", numeros[3];

FinAlgoritmo
