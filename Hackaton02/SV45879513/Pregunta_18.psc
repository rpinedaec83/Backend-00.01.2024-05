//Hacer un algoritmo en Pseint para una empresa que se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. 
//Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//	$8. Si se compran entre 10 unidades hasta el 99.
//			$7. Entre 100 y 499 unidades.
//		$6. Para más de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. 
//Realice un algoritmo en Pseint que dado un número de CDs a vender 
//calcule el precio total para el cliente y la ganancia para el vendedor.

Proceso  P18
    Definir numero Como Entero
	
    // Solicitar al usuario que ingrese un número
    Escribir "Ingrese un número del 1 al 7:"
    Leer numero
	
    // Verificar el número e imprimir el día correspondiente
    Segun numero Hacer
        1: Escribir "Lunes"
        2: Escribir "Martes"
        3: Escribir "Miércoles"
        4: Escribir "Jueves"
        5: Escribir "Viernes"
        6: Escribir "Sábado"
        7: Escribir "Domingo"
        De Otro Modo:
            Escribir "Número inválido. Por favor ingrese un número del 1 al 7."
    FinSegun
FinProceso

