// 15.Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Algoritmo pregunta15
    Definir cm como Real
    Definir pulgadas como Real
    Definir libras como Real
    Definir kg como Real
    Definir opciones como Entero

    Escribir "Presione 1 si desea convertir centimetros a pulgadas y 2 si desea convertir libras a kilogramos"
    Leer opciones

    Segun(opciones) Hacer
        1:
            Escribir "Ingrese la cantidad en centimetros:";
            Leer cm;
            pulgadas <- cm / 2.54;
            Escribir cm, " centímetros son ", pulgadas, " pulgadas.";
        2:
            Escribir "Ingrese la cantidad en libras:";
            Leer libras;
            kg <- libras * 0.453592;
            Escribir libras, " libras son ", kg, " kilogramos.";

            FinSegun

FinAlgoritmo