Proceso Preg_31
	
    Definir num, par, impar, contpar, contimpar Como Entero;
	
    par = 0;
    impar = 0;
    contpar = 0;
    contimpar = 0;
	
    Para contador <- 1 Hasta 10 Hacer
        Escribir "Ingrese un número (par o impar):";
        Leer num;
		
        Si num mod 2 = 0 Entonces;
            par = par + num;
            contpar = contpar + 1;
        SiNo;
            impar = impar + num;
            contimpar = contimpar + 1;
        FinSi;
    FinPara;
	
    Si contpar > 0 Entonces;
        Escribir "La media de los pares es: ", par / contpar;
    SiNo;
        Escribir "No se ingresaron números pares";
    FinSi;
	
    Si contimpar > 0 Entonces;
        Escribir "La media de los impares es: ", impar / contimpar;
    SiNo;
        Escribir "No se ingresaron números impares";
    FinSi;
	
FinProceso
