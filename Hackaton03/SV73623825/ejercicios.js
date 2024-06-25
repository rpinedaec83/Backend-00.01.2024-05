function ejercicio1(){

    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero no tiene 3 digitos")
    }
}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio2(){
    let numero  = parseInt(prompt("Escribe un numero"));
    if(numero>=0){
        alert("No es un numero negativo")
    }else{
        alert("Es un numero negativo")
    }
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio3(){
    let numero  = parseInt(prompt("Escribe un numero ENTERO"));
    if(numero%10===4){
        alert("Numero termina en 4")
    }else{
        alert("Numero NO termina en 4")
    }
}
//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio4(){
    
    let a  = parseInt(prompt("Escribe un numero"));
    let b  = parseInt(prompt("Escribe un numero"));
    let c  = parseInt(prompt("Escribe un numero"));

    if (a <= b && a <= c) {
        menor = a;
        if (b <= c) {
            medio = b;
            mayor = c;
        } else {
            medio = c;
            mayor = b;
        }
    } else if (b <= a && b <= c) {
        menor = b;
        if (a <= c) {
            medio = a;
            mayor = c;
        } else {
            medio = c;
            mayor = a;
        }
    } else {
        menor = c;
        if (a <= b) {
            medio = a;
            mayor = b;
        } else {
            medio = b;
            mayor = a;
        }
    }
    alert(menor+" "+medio+" "+mayor)
}

/*5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una 
promoción de descuento para vender al mayor, esta dependerá del número de zapatos 
que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
si el número de zapatos es mayor 
de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son 
más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.*/
function ejercicio5(){
    const costo = 80
    let zapatos  = parseInt(prompt("Ingrese el numero de zapatos vendidos"));
    if (zapatos>30) {
        alert("Total a pagar "+costo*zapatos*0.6)
    }else if(zapatos>20) {
        alert("Total a pagar "+costo*zapatos*0.8)
    }else if(zapatos>10){
        alert("Total a pagar "+costo*zapatos*0.9)
    }else{
        alert("Total a pagar "+costo*zapatos)
    }
    
}

/*6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a 
saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
se le pagará $20 por hora, pero si trabaja más de 40 horas entonces 
las horas extras se le pagarán a $25 por hora.*/
function ejercicio6(){
    let horasTrabajo  = parseInt(prompt("Ingrese las horas de tabajo de la semana"));
    if (horasTrabajo<=40) {
        pago=horasTrabajo*20
        alert("El pago que le corresponde al trabajor es "+pago)
    }else{
        pago=40*20+25*(horasTrabajo-40)
        alert("El pago que le corresponde al trabajor es "+pago)
    }
   

}
/*7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento 
por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres 
tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento

   */
function ejercicio7(){
    let monto  = parseInt(prompt("Ingrese el monto a pagar"));
    let membresia  = prompt("Ingrese el tipo de membresia");
    membresia = membresia.toUpperCase()
    switch (membresia) {
        case 'A':
            alert(monto*0.9) // 10% de descuento
            break;
        case 'B':
            alert(monto*0.85) // 15% de descuento
            break;
        case 'C':
            alert(monto*0.8) // 20% de descuento
            break;
        default:
            alert("No cuenta con membresia el monto a pagar es "+monto);
            break;
    }
}

//8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function ejercicio8(){
    //nota para aprobar es ser mayor o igual a 10
    let n1 = parseInt(prompt("Ingrese un numero"));
    let n2 = parseInt(prompt("Ingrese un numero"));
    let n3 = parseInt(prompt("Ingrese un numero"));
    let promedio=(n1+n2+n3)/3
    if (promedio>=10) {
        alert("Promedio es = "+promedio+" APROBADO")
    }else{
        alert("Promedio es = "+promedio+" DESAPROBADO")
    }
}

/*9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
se debe tomar en cuenta 
que si ganaba más de $2000 tendrá un aumento del 5%, 
si generaba menos de $2000 su aumento será de un 10%.*/
function ejercicio9(){
    let monto = parseInt(prompt("Ingrese el monto del trabajor"));
    if (monto>=2000) {
        aumento=monto*1.05
    }else{
        aumento=monto*1.10;
    }
    alert("El nuevo monto a pagar al trabajor es "+aumento.toFixed(2))
}

//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio10(){
     let n1 = parseInt(prompt("Ingrese un numero"))
     if (n1%2==0) {
        alert("Numero es PAR")
     }else{
        alert("Numero es IMPAR")
     } 
}

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio11(){
    let n1 = parseInt(prompt("Ingrese un numero"));
    let n2 = parseInt(prompt("Ingrese un numero"));
    let n3 = parseInt(prompt("Ingrese un numero"));
    if (n1 >= n2 && n1 >= n3) {
        alert("El mayor numero es "+n1)
    } else if (n2 >= n1 && n2 >= n3) {
        alert("El mayor numero es "+n2)
    } else {
        alert("El mayor numero es "+n3)
    }
}

//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio12(){
    let n1 = parseInt(prompt("Ingrese un numero"));
    let n2 = parseInt(prompt("Ingrese un numero"));
    if (n1 >= n2 ) {
        alert("El mayor numero es "+n1)
    } else {
        alert("El mayor numero es "+n2)
    }
}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio13(){
    let letra  = prompt("Ingrese una letra");
    letra = letra.toUpperCase()
    if (letra==="A"||letra==="E"||letra==="I"||letra==="O"||letra==="U") {
        alert("La letra es una VOCAL")
    } else {
        alert("La letra NO es una VOCAL")
    }
}
//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y 
//determine si es un número primo.
function ejercicio14(){
    let n1 = parseInt(prompt("Ingrese un numero"));

    if (esPrimo(n1)) {
        alert("El numero "+n1+" es PRIMO")
    } else {
        alert("El numero "+n1+" NO PRIMO")
    }
    //Crear funcion
    function esPrimo(numero) {
        if (numero <= 1) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false
            }
        }
        return true
    }
}
//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio15(){
    let cen = parseFloat(prompt("Ingrese un valor centrimetro"));
    let lib = parseFloat(prompt("Ingrese un valor libras"));
    alert(`${cen} centrimetros en pulgadas equivale a ${cen*0.393701} y ${lib} libras en pulgadas equivale a ${lib*0.453592}`)

}
//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function ejercicio16(){
    let n1 = parseInt(prompt("Ingrese un numero"));
    switch (n1) {
        case 1:
            alert("LUNES")
            break;
        case 2:
            alert("MARTES")
            break;
        case 3:
            alert("MIERCOLES")
            break;
        case 4:
            alert("JUEVES")
            break;
        case 5:
            alert("VIERNES")
            break;
        case 6:
            alert("SABADO")
            break;
        case 7:
            alert("DOMINGO")
            break;                        
        default:
            alert("Numero incorecto")
            break;
    }
}

//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function ejercicio17(){
    let hora = parseInt(prompt("Ingrese la hora"));
    let minutos = parseInt(prompt("Ingrese los minutos"));
    let segundos = parseInt(prompt("Ingrese los segundos"));
    function formatoDosDigitos(num) {
        return num.toString().padStart(2, '0');
    }
    if (hora <0 || hora >23 || minutos<0 || minutos>59 || segundos<0 || segundos>59) {
        alert("Valores no validos")
    }else{
        segundos++
        if (segundos===60) {
            segundos=0
            minutos++
        } if (minutos===60) {
            minutos=0
            hora++
        } if (hora===24){
            hora=0
        }
        alert("La hora dentro de un segundo es "+formatoDosDigitos(hora)+":"+formatoDosDigitos(minutos)+":"+formatoDosDigitos(segundos))     
    }
    

}

/*18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y 
distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
(supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar 
    un algoritmo en JavaScript que dado un número de CDs a vender 
    calcule el precio total para el cliente y la ganancia para el vendedor.*/
function ejercicio18(){
    let cd = parseInt(prompt("Ingrese la cantidad de cd vendidos"));
    const ganancia=0.0825
    if (cd<10) {
        alert("Precio total "+(cd*10).toFixed(2))
        alert("Ganancia del vendedor "+(cd*10*ganancia).toFixed(2))
    } else {
        if (cd<100) {
            alert("Precio total "+(cd*8).toFixed(2))
        alert("Ganancia del vendedor "+(cd*8*ganancia).toFixed(2))
        } else {
            if (cd<500) {
                alert("Precio total "+(cd*7).toFixed(2))
                alert("Ganancia del vendedor "+(cd*7*ganancia).toFixed(2))
            } else {
                alert("Precio total "+(cd*6).toFixed(2))
                alert("Ganancia del vendedor "+(cd*6*ganancia).toFixed(2))
            }
        }
        
    }
    
}
/*19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos 
de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

    Cajero (56$/día).

    Servidor (64$/día).

    Preparador de mezclas (80$/día).

    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo 
    ingrese dos números enteros que representen al número 
    identificador del empleado y la cantidad de días que 
    trabajó en la semana (6 días máximos). Y el programa le mostrará 
    por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó*/
function ejercicio19(){
    let ident=prompt(`Ingrese identificador del trabajador:
        C=cajero
        S=servidor
        P=preparador mezclas
        M=mantenimiento`)
    let dias = parseInt(prompt("Ingrese los dias de trabajo"))
    let cajero=56
    let servidor=64
    let preparador=80
    let mantenimiento=48
    ident = ident.toUpperCase()
    if (dias<=6) {
        switch (ident) {
            case "C":
                alert("Monto a pagar "+dias*56)
                break;
            case "S":
                alert("Monto a pagar "+dias*64)
                break;
            case "P":
                alert("Monto a pagar "+dias*80)
                break;
            case "M":
                alert("Monto a pagar "+dias*48)
                break;        
            default:
                alert("Datos incorrectos")
                break;
        }
    } else {
        alert("Datos incorrectos")
    }
}

/*20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y 
verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?

    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.

    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido 
    entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular 
    la suma de los 4 números.*/
function ejercicio20(){
    let n1 = parseInt(prompt("Ingrese un numero"));
    let n2 = parseInt(prompt("Ingrese un numero"));
    let n3 = parseInt(prompt("Ingrese un numero"));
    let n4 = parseInt(prompt("Ingrese un numero"));
    let pares = 0;
    if (n1 % 2 === 0) {
        pares += 1;
    }
    
    if (n2 % 2 === 0) {
        pares += 1;
    }
    
    if (n3 % 2 === 0) {
        pares += 1;
    }
    
    if (n4 % 2 === 0) {
        pares += 1;
    }
    alert("Numeros de pares ingresados es "+pares)

    let mayor = n1;
    if (n2 > mayor) {
        mayor = n2;
    }
    if (n3 > mayor) {
        mayor = n3;
    }
    if (n4 > mayor) {
        mayor = n4;
    }
    alert("El numero mayor es "+mayor)

    if (n3 % 2 === 0) {
        let cuadradoSegundo = n3 ** 2;
        alert("El cuadrado del segundo es "+cuadradoSegundo)
    }

    if (n1 < n4) {
        let media = (n1 + n2 + n3 + n4) / 4;
         alert("El promedio es "+media)
    }

}
//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function ejercicio21(){
    let n = parseInt(prompt("Ingrese un numero"));
    
   
    const factorial = (n) => {
        if (n == 0 || n == 1) {
          return 1;
        } else {
          return n * factorial(n - 1);
        }
      };
      alert("El factorial del "+n+" = "+factorial(n))
}

//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function ejercicio22(){
    n=parseInt(prompt("Ingrese un numero"))
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    alert("La suma de los "+n+" primeros numeros es "+suma)
}
//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function ejercicio23(){
    n=parseInt(prompt("Ingrese un numero"))
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (i%2!==0) {
            suma += i;
        }
    }
    alert("La suma de los "+n+" primeros numeros impares es "+suma)
}
//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function ejercicio24(){
    let suma = 0;
    for (let i = 2; i <= 1000; i+=2) {
        suma += i;
    }
    alert("La suma de los 1000 primeros numeros pares es "+suma)
}
//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function ejercicio25(){
    num=parseInt(prompt("Ingrese un numero")) 
    let factorial = 1; 
    while (num - 1 > 0) {
    factorial = factorial * num
    num = num - 1
    }
    alert("El factorial del "+num+" = "+factorial)
}
//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function ejercicio26(){
    let dividendo=parseInt(prompt("Ingrese el dividendo"))
    let divisor=parseInt(prompt("Ingrese el divisor"))
    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto = resto - divisor;
        cociente++;
  }
  alert("El resto es "+resto+" y el cociente es "+cociente)
}
//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos,
// se debe acabar el programa al ingresar un número negativo.
function ejercicio27(){
    let suma = 0
    let cantidad = 0
    while (true) {
      let numero = parseInt(prompt("Ingresa un numero"))
      if (numero < 0) {
        break; // Termina el bucle si el número ingresado es negativo
      }
      suma += numero;
      cantidad++;
    }
    if (cantidad===0) {
        alert("No se ingresaron numeros positivos")
    } else {
        let promedio=suma/cantidad
        alert("El promedio es "+promedio)
    }
}
//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
function ejercicio28(){
    let suma = 0;
    let contador = 1;

    do {
        suma += contador;
        contador++;
    } while (contador <= 100);
    alert("Suma de los 100 primeros numeros es "+suma)
}
//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function ejercicio29(){
    let suma = 0;
    let contador = 1;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }
    alert("Suma de los 100 primeros numeros es "+suma)
}
//30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function ejercicio30(){
    let suma = 0;

    for (let contador = 1; contador <= 100; contador++) {
        suma += contador;
    }
    alert("Suma de los 100 primeros numeros es "+suma)
}
//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares,
// sólo se ingresará diez números.
function ejercicio31(){
    let cont = 1;
    let sumpar = 0;
    let sumimpar = 0;
    let contpar = 0;
    let contimpar = 0;

    while (cont <= 10) {
        let num = parseInt(prompt("Ingrese un número:"));

        if (num % 2 === 0) {
        sumpar += num;
        contpar++;
        } else {
        sumimpar += num;
        contimpar++;
        }

        cont++;
    }
    if (contpar === 0) {
        contpar = 1;
    }
    if (contimpar === 0) {
        contimpar = 1;
    }

    // Calcular promedios
    const promedioPares = sumpar / contpar;
    const promedioImpares = sumimpar / contimpar;
    alert(`El promedio de números pares es: ${promedioPares}`);
    alert(`El promedio de números impares es: ${promedioImpares}`);
}
//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, 
//hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
function ejercicio32(){
    
}
//33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function ejercicio33(){

    let continuar = true;
    while (continuar) {
        alert("El programa está ejecutando...");
        let respuesta = prompt("Si desea cotinuar escriba s");
        if (respuesta.toLowerCase() !== 's') {
        continuar = false;
        }
    }
}
//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.
function ejercicio34(){
    let multi=[]
    for (let i = 1; i <= 9; i++) {
        alert(`Tabla del ${i}:`);
        for (let j = 1; j <= 12; j++) {
            multi.push(`${i} x ${j} = ${i * j}`)
            
        }
        alert(JSON.stringify(multi));
        multi=[]
      }
}
//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, 
//se debe ingresar sólo veinte números.
function ejercicio35(){
    let numeros = [];
  
    for (let i = 0; i < 20; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);
    }

    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

    alert(`El número mayor es: ${mayor}`);
    alert(`El número menor es: ${menor}`);
}
//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacc.
function ejercicio36(){
    let n = parseInt(prompt("Ingrese un numero"))
    let primero = 0;
    let segundo = 1;
    let numeros = [];
    for (let i = 1; i <= n; i++) {
        numeros.push(primero);
        let tercero = primero + segundo;
        primero = segundo;
        segundo = tercero;
    }
    alert(JSON.stringify(numeros));
}
//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function ejercicio37(){
    let n1 = parseInt(prompt("Ingrese un numero"));
    let n2 = parseInt(prompt("Ingrese un numero"));
    while (n2 !== 0) {
        let temp = n2;
        n2 = n1 % n2;
        n1 = temp;
      }
    if (n2 !== 0) {
        alert("El M.C.D es "+n1)  
    } else {
        alert("Datos ingresado incorrectamente")
    }  
    
}
//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function ejercicio38(){
    function esNumeroPerfecto(num) {
        if (num <= 1) {
          return false;
        }
      
        let sumaDivisores = 0;
      
        for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            sumaDivisores += i;
          }
        }
      
        return sumaDivisores === num;
      }
  let n1 = parseInt(prompt("Ingrese un numero"));   
  alert(`¿${n1} es un número perfecto? ${esNumeroPerfecto(n1)}`);    
}
function ejercicio39(){
    function aproximacionPiGregoryLeibniz(terminos) {
        let pi = 0;
        let denominador = 1;
        let signo = 1;
      
        for (let i = 0; i < terminos; i++) {
          pi += signo * (4 / denominador);
          denominador += 2; 
          signo *= -1; 
        }
      
        return pi;
      }
      
      let n1 = parseInt(prompt("Ingrese un numero")); 
      const piAproximado = aproximacionPiGregoryLeibniz(n1);
      alert(`Aproximación de pi con ${n1} términos de la serie de Gregory-Leibniz: ${piAproximado}`);
}
function ejercicio40(){
    function aproximacionPiNilakantha(terminos) {
        let pi = 3;
        let signo = 1;
        let denominador = 2;
      
        for (let i = 0; i < terminos; i++) {
          pi += signo * (4 / (denominador * (denominador + 1) * (denominador + 2)));
          signo *= -1; 
          denominador += 2; 
        }
      
        return pi;
      }

      let n1 = parseInt(prompt("Ingrese un numero")); 
      const piAproximado = aproximacionPiNilakantha(n1);
      alert(`Aproximación de pi con ${n1} términos de la serie de Nilakantha: ${piAproximado}`);
}