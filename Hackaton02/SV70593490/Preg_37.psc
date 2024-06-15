Proceso Preg_37
    
    Definir num1, num2, resta Como Entero;
    
    Escribir "Ingrese el primer número:";
    Leer num1;
    
    Escribir "Ingrese el segundo número:";
    Leer num2;
    
    Mientras num2 <> 0 Hacer;
        resto = num1 % num2;
        num1 = num2;
        num2 = resta;
    FinMientras
    
    Escribir "El máximo común divisor de ", num1, " y ", num2, " es ", num1;
    
FinProceso
