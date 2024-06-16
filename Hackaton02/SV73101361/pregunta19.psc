// 19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

// Cajero (56$/día).

// Servidor (64$/día).

// Preparador de mezclas (80$/día).

// Mantenimiento (48$/día).

// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Algoritmo pregunta19
    Definir IDydiasTrabajados Como Entero;
    Definir ID como Entero;
    Definir diasTrabajados como Entero;
    Definir salarioDiario Como Entero;
    Definir pagoTotal Como Entero;

    Escribir "Ingrese el identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento) seguido de la cantidad de dias trabajados (ejemplo: 14 para identificador 1 y 4 días trabajados):";
    Leer IDydiasTrabajados;

    ID <- TRUNC(IDydiasTrabajados/10);
    Escribir "El ID es: ", ID;

    diasTrabajados <- IDydiasTrabajados % 10;
    Escribir "Los dias trabajados son: ", diasTrabajados;

    // Validar la cantidad de días trabajados
    Si diasTrabajados < 0 o diasTrabajados > 6 Entonces
        Escribir "Cantidad de dias trabajados no valido. Debe ser entre 0 y 6.";
    Sino
        Segun (ID) Hacer
            1:
                salarioDiario <- 56;
            2:
                salarioDiario <- 64;
            3:
                salarioDiario <- 80;
            4:
                salarioDiario <- 48;
            De Otro Modo:
                Escribir "Identificador de empleado no valido.";
        FinSegun

        pagoTotal <- salarioDiario * diasTrabajados;
        Escribir "El pago total para el empleado es: ", pagoTotal,"$";
    FinSi

FinAlgoritmo
