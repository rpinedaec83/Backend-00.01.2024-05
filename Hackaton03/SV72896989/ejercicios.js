function ejercicio1(){

    let numero = parseInt(prompt("Escribe un numero"))
    if (numero > 99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero no tiene 3 digitos")
    }
}

function ejercicio2() {
    let numero_ingresado = parseInt(prompt("Ingrese un número entero"));

    if (numero_ingresado < 0) {
        alert("El número ingresado es negativo");
    } else if (numero_ingresado === 0) {
        alert("El número ingresado es 0, por lo que no es negativo ni positivo.");
    } else if (numero_ingresado > 0) {
        alert("El número ingresado no es negativo.");
    }
}

function ejercicio3() {
    let numero_ingresado = parseInt(prompt("Ingrese un número"));
    
    let ultima_cifra = Math.abs(numero_ingresado) % 10;
    
    if (ultima_cifra === 4) {
        alert("El número ingresado termina en 4.");
    } else {
        alert("El número ingresado no termina en 4.");
    }
}

function ejercicio4() {
    let primer_numero = parseInt(prompt("Ingrese el primer número"), 10);
    let segundo_numero = parseInt(prompt("Ingrese el segundo número"), 10);
    let tercer_numero = parseInt(prompt("Ingrese el tercer número"), 10);

    if (tercer_numero > segundo_numero && segundo_numero > primer_numero) {
        alert("Números de menor a mayor: " + primer_numero + ", " + segundo_numero + ", " + tercer_numero);
    } else if (segundo_numero > tercer_numero && tercer_numero > primer_numero) {
        alert("Números de menor a mayor: " + primer_numero + ", " + tercer_numero + ", " + segundo_numero);
    } else if (tercer_numero > primer_numero && primer_numero > segundo_numero) {
        alert("Números de menor a mayor: " + segundo_numero + ", " + primer_numero + ", " + tercer_numero);
    } else if (primer_numero > tercer_numero && tercer_numero > segundo_numero) {
        alert("Números de menor a mayor: " + segundo_numero + ", " + tercer_numero + ", " + primer_numero);
    } else if (primer_numero > segundo_numero && segundo_numero > tercer_numero) {
        alert("Números de menor a mayor: " + tercer_numero + ", " + segundo_numero + ", " + primer_numero);
    } else if (segundo_numero > primer_numero && primer_numero > tercer_numero) {
        alert("Números de menor a mayor: " + tercer_numero + ", " + primer_numero + ", " + segundo_numero);
    }
}

function ejercicio5(){
    let num_zapatos = parseInt(prompt("Ingrese el número de zapatos que se comprarán"), 10);
    let descuento = 0;
    
    if (num_zapatos > 10 && num_zapatos <= 20) {
        descuento = 0.1;
    } else if (num_zapatos > 20 && num_zapatos <= 30) {
        descuento = 0.2;
    } else if (num_zapatos > 30) {
        descuento = 0.4;
    }
    
    let precio_unitario = 80;
    let precio_total = precio_unitario * num_zapatos;
    let total_a_pagar = precio_total * (1 - descuento);
    
    alert("Debe pagarse: $" + total_a_pagar);
}

function ejercicio6(){
    let horas_trabajadas = prompt("Ingrese número de horas trabajadas");
    horas_trabajadas = parseInt(horas_trabajadas);
    
    let sueldo_semanal;
    
    if (horas_trabajadas <= 40) {
        sueldo_semanal = horas_trabajadas * 20;
    } else {
        sueldo_semanal = (40 * 20) + ((horas_trabajadas - 40) * 25);
    }
    
    alert("Su sueldo semanal es de $" + sueldo_semanal);
}

function ejercicio7(){
    let membresia = prompt("Ingrese el tipo de membresía (A, B o C)");
    let monto = prompt("Ingrese el monto en dólares a pagar");
    monto = parseFloat(monto);
    
    let descuento;
    
    if (membresia.toLowerCase() === "a") {
        descuento = 0.1;
    } else if (membresia.toLowerCase() === "b") {
        descuento = 0.15;
    } else if (membresia.toLowerCase() === "c") {
        descuento = 0.2;
    } else {
        descuento = 0;
    }
    
    let total_a_pagar = monto * (1 - descuento);
    alert("Tienes un descuento de " + (descuento * 100) + "%.\nSolo tendrás que pagar $" + total_a_pagar);    
}

function ejercicio8(){
    //Considero como nota aprobatoria 12.5 o más
    let nota_1 = prompt("Ingrese nota 1");
    let nota_2 = prompt("Ingrese nota 2");
    let nota_3 = prompt("Ingrese nota 3");
    
    nota_1 = parseFloat(nota_1);
    nota_2 = parseFloat(nota_2);
    nota_3 = parseFloat(nota_3);
    
    let promedio = (nota_1 + nota_2 + nota_3) / 3;
    
    if (promedio >= 12.5) {
        alert("El estudiante aprobó");
    } else {
        alert("El estudiante no aprobó");
    }    
}

function ejercicio9(){
    let salario = prompt("Ingrese el salario del trabajador:");

    salario = parseFloat(salario);
    
    let aumento;
    
    if (salario >= 2000) {
        aumento = salario * 1.05;
    } else {
        aumento = salario * 1.10;
    }
    
    alert("El aumento del trabajador es: $" + aumento);    
}

function ejercicio10(){
    let numero = prompt("Ingrese un número:");

    numero = parseInt(numero);
    
    if (numero % 2 === 0) {
        alert("El número ingresado es par");
    } else {
        alert("El número ingresado es impar");
    }    
}

function ejercicio11(){
    let primer_numero = prompt("Ingrese el primer número:");
    let segundo_numero = prompt("Ingrese el segundo número:");
    let tercer_numero = prompt("Ingrese el tercer número:");
    
    primer_numero = parseInt(primer_numero);
    segundo_numero = parseInt(segundo_numero);
    tercer_numero = parseInt(tercer_numero);
    
    if (tercer_numero > segundo_numero && segundo_numero > primer_numero) {
        alert("El número mayor es " + tercer_numero);
    } else if (segundo_numero > tercer_numero && tercer_numero > primer_numero) {
        alert("El número mayor es " + segundo_numero);
    } else if (tercer_numero > primer_numero && primer_numero > segundo_numero) {
        alert("El número mayor es " + tercer_numero);
    } else if (primer_numero > tercer_numero && tercer_numero > segundo_numero) {
        alert("El número mayor es " + primer_numero);
    } else if (primer_numero > segundo_numero && segundo_numero > tercer_numero) {
        alert("El número mayor es " + primer_numero);
    } else if (segundo_numero > primer_numero && primer_numero > tercer_numero) {
        alert("El número mayor es " + segundo_numero);
    }    
}

function ejercicio12(){
    let primer_numero = prompt("Ingrese el primer número:");
    let segundo_numero = prompt("Ingrese el segundo número:");
    
    primer_numero = parseInt(primer_numero);
    segundo_numero = parseInt(segundo_numero);
    
    if (primer_numero > segundo_numero) {
        alert("El número mayor es " + primer_numero);
    } else {
        alert("El número mayor es " + segundo_numero);
    }    
}

function ejercicio13(){
    let letra = prompt("Ingrese una letra:");

    switch (letra.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert("La letra ingresada es una vocal");
            break;
        default:
            alert("La letra ingresada no es una vocal");
    }
        
}

function ejercicio14(){
    let numero = parseInt(prompt("Ingrese un número entre 1 y 10:"));
    let contador = 0;

    if (numero < 1 || numero > 10) {
        alert("El número ingresado no está en el rango permitido");
    } else {
        for (let divisor = 1; divisor <= 10; divisor++) {
            if (numero % divisor === 0) {
             contador++;
             }
         }

    if (contador === 2) {
        alert("El número ingresado es primo");
    } else {
        alert("El número ingresado no es primo");
    }
}

}

function ejercicio15(){
    let tipo_conversion = parseInt(prompt("Digita 1 para CONVERTIR CENTIMETROS A PULGADAS y 2 para CONVERTIR LIBRAS A KILOGRAMOS"));

    switch (tipo_conversion) {
        case 1:
            let cm = parseFloat(prompt("Ingresa los centímetros a convertir"));
            let pulg = cm / 2.54;
            alert("Pulgadas = " + pulg + " pulg");
            break;
        case 2:
            let lb = parseFloat(prompt("Ingresa las libras a convertir"));
            let kg = lb * 0.453592;
            alert("Kilogramos = " + kg + " kg");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona 1 o 2.");
    }    
}

function ejercicio16(){
    let numero = parseInt(prompt("Ingrese un número"));

    switch (numero) {
        case 1:
            alert("El número ingresado corresponde al día lunes");
            break;
        case 2:
            alert("El número ingresado corresponde al día martes");
            break;
        case 3:
            alert("El número ingresado corresponde al día miércoles");
            break;
        case 4:
            alert("El número ingresado corresponde al día jueves");
            break;
        case 5:
            alert("El número ingresado corresponde al día viernes");
            break;
        case 6:
            alert("El número ingresado corresponde al día sábado");
            break;
        case 7:
            alert("El número ingresado corresponde al día domingo");
            break;
        default:
            alert("El número ingresado no corresponde a un día válido");
    }    
}

function ejercicio17(){
    let hora = parseInt(prompt("Ingrese la hora (formato 24 horas)"));
    let minutos = parseInt(prompt("Ingrese los minutos"));
    let segundos = parseInt(prompt("Ingrese los segundos"));
    
    if (hora < 0 || hora > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
        alert("Valores no válidos");
    } else {
        segundos++;
    
        if (segundos === 60) {
            segundos = 0;
            minutos++;
    
            if (minutos === 60) {
                minutos = 0;
                hora++;
    
                if (hora === 24) {
                    hora = 0;
                }
            }
        }
    
        alert(`La hora dentro de un segundo es: ${hora}:${minutos}:${segundos}`);
    }    
}

function ejercicio18(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a vender"));
    let precio_unitario;

    if (cantidad >= 500) {
        precio_unitario = 6;
    } else if (cantidad >= 100 && cantidad <= 499) {
        precio_unitario = 7;
    } else if (cantidad >= 10 && cantidad <= 99) {
        precio_unitario = 8;
    } else {
        precio_unitario = 10;
    }

    let precio_total_cliente = cantidad * precio_unitario;
    let ganancia_vendedor = precio_total_cliente * 0.0825;

    alert(`El precio total para el cliente es $${precio_total_cliente}.\nLa ganancia para el vendedor es $${ganancia_vendedor}`);
}

function ejercicio19(){
    let identificador = parseInt(prompt("Ingrese el número identificador del empleado"));
    let salario_diario, dias_trabajados;

    switch (identificador) {
        case 1:
            salario_diario = 56;
            dias_trabajados = parseInt(prompt("Ingrese la cantidad de días que trabajó en la semana"));
            break;
        case 2:
            salario_diario = 64;
            dias_trabajados = parseInt(prompt("Ingrese la cantidad de días que trabajó en la semana"));
            break;
        case 3:
            salario_diario = 80;
            dias_trabajados = parseInt(prompt("Ingrese la cantidad de días que trabajó en la semana"));
            break;
        case 4:
            salario_diario = 48;
            dias_trabajados = parseInt(prompt("Ingrese la cantidad de días que trabajó en la semana"));
            break;
        default:
            alert("El número identificador de empleado no es válido");
            break;
    }

    if (identificador >= 1 && identificador <= 4) {
        let salario_total = salario_diario * dias_trabajados;
        alert("El dueño de la tienda debe pagar al empleado $" + salario_total);
    }  
}

function ejercicio20(){
    let num1, num2, num3, num4;
    let pares = 0, mayor, media, suma = 0;
    let mensaje = "";
    
    num1 = parseInt(prompt("Ingrese el primer número"));
    num2 = parseInt(prompt("Ingrese el segundo número"));
    num3 = parseInt(prompt("Ingrese el tercer número"));
    num4 = parseInt(prompt("Ingrese el cuarto número"));
    
    if (num1 % 2 === 0) {
        pares++;
    }
    if (num2 % 2 === 0) {
        pares++;
    }
    if (num3 % 2 === 0) {
        pares++;
    }
    if (num4 % 2 === 0) {
        pares++;
    }
    
    mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    if (num4 > mayor) {
        mayor = num4;
    }
    
    mensaje += "Cantidad de números pares: " + pares + "\n";
    mensaje += "El número mayor es: " + mayor + "\n";
    
    if (num3 % 2 === 0) {
        mensaje += "El cuadrado del segundo es: " + (num2 * num2) + "\n";
    }
    
    if (num1 < num4) {
        media = (num1 + num2 + num3 + num4) / 4;
        mensaje += "La media es: " + media + "\n";
    }
    
    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        suma = num1 + num2 + num3 + num4;
        mensaje += "La suma de los 4 números es: " + suma + "\n";
    }
    
    alert(mensaje);    
}

function ejercicio21(){
    let numero = prompt("Ingrese un número");
    numero = parseInt(numero);
    
    let factorial = 1;
    
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    
    alert("El factorial de " + numero + " es " + factorial);    
}

function ejercicio22(){
    let n = prompt("Se sumarán los primeros n números. Ingrese el valor de n:");
    n = parseInt(n);
    
    let suma = 0;
    
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    
    alert("La suma de los primeros " + n + " números es " + suma);
}

function ejercicio23(){
    let n = prompt("Se calculará la suma de los números impares menores o iguales a n. Ingrese el valor de n:");
    n = parseInt(n);
    
    let suma_impares = 0;
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            suma_impares += i;
        }
    }
    
    alert("La suma de los números impares menores o iguales a " + n + " es " + suma_impares);  
}

function ejercicio24(){
    let suma_pares = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma_pares += i;
    }
    
    alert("La suma de todos los números pares hasta 1000 es " + suma_pares);    
}

function ejercicio25(){
    let numero = prompt("Ingrese un número");
    numero = parseInt(numero);
    
    let factorial = 1;
    let i = 1;
    
    while (i <= numero) {
        factorial = factorial * i;
        i = i + 1;
    }
    
    alert("El factorial de " + numero + " es " + factorial);
}

function ejercicio26(){
    let dividendo = prompt("Ingrese el dividendo");
    let divisor = prompt("Ingrese el divisor");
    
    dividendo = parseInt(dividendo); // Convertir la entrada del dividendo a entero
    divisor = parseInt(divisor); // Convertir la entrada del divisor a entero
    
    let cociente = 0;
    let resto = dividendo;
    
    while (resto >= divisor) {
        resto = resto - divisor;
        cociente = cociente + 1;
    }
    
    alert("El cociente es " + cociente + " y el resto es " + resto);
}

function ejercicio27(){
    let suma = 0;
    let contador = 0;
    let numero;
    
    do {
        numero = prompt("Ingrese un numero positivo (o un numero negativo para terminar este programa):");
        numero = parseInt(numero);
    
        if (numero >= 0) {
            suma = suma + numero;
            contador = contador + 1;
        }
    } while (numero >= 0);
    
    if (contador > 0) {
        let media = suma / contador;
        alert("La media de los numeros ingresados es " + media);
    } else {
        alert("No se ingreso ningun numero positivo");
    }    
}

function ejercicio28(){
    let suma = 0;
    let contador = 1;
    
    while (contador <= 100) {
        suma = suma + contador;
        contador = contador + 1;
    }
    
    alert("La suma de los primeros cien números es " + suma);
}

function ejercicio29(){

}

function ejercicio30(){

}

function ejercicio31(){

}

function ejercicio32(){

}

function ejercicio33(){

}

function ejercicio34(){

}

function ejercicio35(){

}

function ejercicio36(){

}

function ejercicio37(){

}

function ejercicio38(){

}

function ejercicio39(){

}

function ejercicio40(){

}