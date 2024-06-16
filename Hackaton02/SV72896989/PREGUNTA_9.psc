Proceso PREGUNTA_9
    Escribir "Ingrese el salario del trabajador:"
    Leer salario
    
	//Asumir� que 2000 tambi�n implica un aumento de 5% porque no se especifica
    Si salario >= 2000 Entonces
        aumento = salario * 1.05
    Sino
        aumento = salario * 1.10
    FinSi
    
    Escribir "El aumento del trabajador es: $", aumento
FinProceso
