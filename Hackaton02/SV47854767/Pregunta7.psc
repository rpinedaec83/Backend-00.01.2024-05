//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus 
//clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
//Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

Proceso Pregunta7
	
	Definir tipoMembresia Como Caracter
    Definir precioHelado, dcto, precioConDcto Como Real
    
    Escribir "Ingrese el precio del helado:"
    Leer precioHelado
    
    Escribir "Ingrese el tipo de membresia:"
    Leer tipoMembresia
    
    dcto = 0
    
	Segun tipoMembresia Hacer
        "A":
            dcto = precioHelado * 0.10
        "B":
            dcto = precioHelado * 0.15
        "C":
            dcto = precioHelado * 0.20
        De Otro Modo:
            Escribir "Tipo de membresía no valida. No aplica descuento."
            dcto = 0
    FinSegun
    
    precioConDcto = precioHelado - dcto
    
	Escribir "El precio con descuento es: $", precioConDcto
FinProceso
