// 9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

Algoritmo pregunta9
Definir sueldo como entero
Definir aumento como real
Definir sueldo_aumentado como real

Escribir "Escriba el sueldo del trabajador:"
Leer sueldo

    Si (sueldo>=2000) Entonces
        aumento <- 0.05
    SiNo
        aumento <- 0.10
    FinSi

    sueldo_aumentado <- sueldo * (aumento + 1)

Escribir "El aumento del trabajador ha sido de ", aumento,"% por tanto su sueldo ahora es: ", sueldo_aumentado

FinAlgoritmo