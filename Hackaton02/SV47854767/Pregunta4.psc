//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

Proceso Pregunta4
	Definir num1, num2, num3 Como Entero
	Definir menor, intermedio, mayor Como Entero
	
	Escribir "Ingrese el 1er numero"
	Leer  num1
	Escribir "Ingrese el 2do numero"
	Leer  num2
	Escribir "Ingrese el 3er numero"
	Leer  num3
	
	
	Si num1 <= num2 y num1 <= num3 Entonces
		menor = num1
		Si num2 <= num3 Entonces
			intermedio = num2
			mayor = num3
		SiNo
			intermedio = num3
			mayor = num2
		FinSi
	Sino
        Si num2 <= num1 y num2 <= num3 Entonces
            menor = num2
            Si num1 <= num3 Entonces
                intermedio = num1
                mayor = num3
            Sino
                intermedio = num3
                mayor = num1
            FinSi
        Sino
            menor = num3
            Si num1 <= num2 Entonces
                intermedio = num1
                mayor = num2
            Sino
                intermedio = num2
                mayor = num1
            FinSi
        FinSi
   	FinSi
	
	Escribir "Los numeros ordenados de menor a mayor son: ", menor,", ", intermedio, ", ", mayor
	
FinProceso
