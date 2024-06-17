function Ejercicio1(){
  //Pedimos que se ingrese un número y lo transformamos a un número
  let numEntero = parseInt(prompt("Ingrese un número"));
  //verificamos si tiene 3 cifras
  if (numEntero > 99 && numEntero < 1000){
      alert(`El número ${numEntero} tiene tres dígitos.`);
  }
  else {
      alert(`El número ${numEntero} no tiene tres dígitos.`);
  }
}
function Ejercicio2(){
  //Pedimos que se ingrese un número y lo transformamos a un número
  let numEntero = parseInt(prompt("Ingrese un número"));
  //Determinamos si es negativo
  if (numEntero < 0){
      alert(`El número ${numEntero} es negativo.`);
  }
  else {
      alert(`El número ${numEntero} no es negativo.`)
  }

}
function Ejercicio3(){
  //Pedimos que se ingrese un número y lo transformamos a un número
  let numEntero = parseInt(prompt("Ingrese un número"));
  //Determinamos si termina en 4
  let ultimoDigito = numEntero % 10;
  if (ultimoDigito === 4){
      alert(`El número ${numEntero} termina en 4.`);
  }
  else {
      alert(`El número ${numEntero} no termina en 4.`);
  }
}
function Ejercicio4(){
  // Pedimos al usuario que ingrese los tres números
  let num1 = parseInt(prompt("Ingrese el primer número: "));
  let num2 = parseInt(prompt("Ingrese el segundo número: "));
  let num3 = parseInt(prompt("Ingrese el tercer número: "));
  // Función para ordenar los números de menor a mayor
  function ordenarNumeros(a, b, c) {
  let numeros = [a, b, c];
  numeros.sort(function(a, b) {return a - b;});
  return numeros;
  }
  let numerosOrdenados = ordenarNumeros(num1, num2, num3);
  alert("Los números ordenados de menor a mayor son: " + numerosOrdenados.join(", "));
}
function Ejercicio5(){
  // Pedimos que ingrese la cantidad de zapatos
  let cantidadZapatos = parseInt(prompt("Ingrese la cantidad de zapatos que desea comprar: "));
  let precioZapato = 80;
  let precioTotal = cantidadZapatos * precioZapato;
  // Calculamos el descuento según la cantidad de zapatos
  let descuento = 0;
  if (cantidadZapatos > 30) {
      descuento = 0.4; 
  } else if (cantidadZapatos > 20) {
      descuento = 0.2;
  } else if (cantidadZapatos > 10) {
      descuento = 0.1;
  }
  // Calcular el precio final con descuento 
  let precioFinal = precioTotal - (precioTotal * descuento);
  // Mostrar el resultado
  alert(`Precio total sin descuento: $${precioTotal}`);
  alert(`Descuento aplicado: ${descuento * 100}%`);
  alert(`Precio final con descuento: $${precioFinal}`);
}
    
function Ejercicio6(){
  // Pedimos que ingrese las horas trabajadas
  let horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas esta semana: "));
  let pagoHoraRegular = 20;
  let pagoHoraExtra = 25;
  let sueldoSemanal;
  if (horasTrabajadas <= 40) {
    sueldoSemanal = horasTrabajadas * pagoHoraRegular;
  } else {
    let horasRegulares = 40;
    let horasExtras = horasTrabajadas - horasRegulares;
    sueldoSemanal = (horasRegulares * pagoHoraRegular) + (horasExtras * pagoHoraExtra);
  }
  alert(`El sueldo semanal del trabajador es: $${sueldoSemanal}`);
}

function Ejercicio7(){
  // Pedmos que ingrese el tipo de membresía
  let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C): ").toUpperCase();
  let costoTotal = parseFloat(prompt("Ingrese el costo total de la compra: "));
  // Definir los porcentajes de descuento para cada tipo de membresía
  let descuentos = {
    A: 0.1, 
    B: 0.15, 
    C: 0.2,
  };
  let descuento = 0;
  let costoFinal = costoTotal;

  if (tipoMembresia === "A" || tipoMembresia === "B" || tipoMembresia === "C") {
    descuento = costoTotal * descuentos[tipoMembresia];
    costoFinal = costoTotal - descuento;
    alert(`Descuento aplicado (${descuentos[tipoMembresia] * 100}%): $${descuento.toFixed(2)}`);
  } else {
    alert("Tipo de membresía no válido. No se aplicará ningún descuento.");
  }
  alert(`Costo final: $${costoFinal.toFixed(2)}`);
}
function Ejercicio8(){
  //Pedimos que ingrese las tres notas
  let nota1 = parseFloat(prompt("Ingrese la primera nota"));
  let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
  let nota3 = parseFloat(prompt("Ingrese la tercera nota"));
  let promedio = (nota1 + nota2 + nota3) / 3;
  alert("El promedio es: " + promedio);
  if (promedio >= 12){
    alert("El estudiante aprobó");
  } else{
    alert("El estudiante no aprobó");
  }
}
function Ejercicio9(){
  //Pedimos que ingrese el sueldo del trabajador
  let sueldo = parseFloat(prompt("Ingrese el sueldo del trabajador"));
  let aumento = 0
  if(sueldo > 2000){
    aumento = sueldo * 0.05
  } else{
    aumento = sueldo * 0.1
  }
  let sueldoFinal = sueldo + aumento
  alert("El aumento es: $" + aumento)
  alert("El nuevo sueldo del trabajador sera: $" + sueldoFinal)
}
function Ejercicio10(){
  //Pedimos que ingrese un número
  let num = parseInt(prompt("Ingrese un número"));
  if (num % 2 === 0) {
    alert(`El número ${num} es par`);
  } else{
    alert(`El número ${num} es impar`);
  }
}

function Ejercicio11(){
  // Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
  //Pedir que se ingrese 3 números
  let num1 = parseFloat(prompt("Ingrese el primer número"))
  let num2 = parseFloat(prompt("Ingrese el segundo número"))
  let num3 = parseFloat(prompt("Ingrese el tercer número"))
  function ordenarNumeros(a, b, c) {
  let numeros = [a, b, c];
  numeros.sort(function(a, b) {return a - b;});
  return numeros;
  }
  let numerosOrdenados = ordenarNumeros(num1, num2, num3);
  let numMayor = numerosOrdenados [2]
  alert("El número mayor es: " + numMayor)
}

function Ejercicio12(){
  //Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor
  //Pedir que se ingrese 2 números
  let num1 = parseFloat(prompt("Ingrese el primer número"))
  let num2 = parseFloat(prompt("Ingrese el segundo número"))
  function ordenarNumeros(a, b) {
  let numeros = [a, b];
  numeros.sort(function(a, b) {return a - b;});
  return numeros;
  }
  let numerosOrdenados = ordenarNumeros(num1, num2);
  let numMayor = numerosOrdenados [1]
  alert("El número mayor es: " + numMayor)
}
function Ejercicio13(){
  // Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
  //Pedimos que ingrese una letra
  let letra = prompt("Ingrese una letra").toUpperCase();
  if (letra === "A" || letra === "E" || letra === "I" ||letra === "O" ||letra === "U") {
    alert(`La letra (${letra.toLowerCase()}) es una vocal`)
  } else{
    alert(`La letra (${letra.toLowerCase()}) no es una vocal`)
  }
}
function Ejercicio14(){
  // Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al 10 y determine si es 
  // un número primo
  let num = parseInt(prompt("Ingrese un número entero positivo del 1 al 10: "));
  if (num >= 1 && num <= 10) {
    let numerosPrimos = [2, 3, 5, 7];
    if (num === 1) {
      alert(`El número ${num} no es primo.`);
    } else if (numerosPrimos.includes(num)) {
      alert(`El número ${num} es primo.`);
    } else {
      alert(`El número ${num} no es primo.`);
    }
  } else {
    alert("El número ingresado no está en el rango válido (1 al 10).");
  }
  
}
function Ejercicio15(){
  // Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos
  function convertir() {
    let opcion = prompt("Ingresa 1 para convertir centímetros a pulgadas o 2 para convertir libras a kilogramos:");
    if (opcion === "1") {
      let cm = prompt("Ingresa la cantidad en centímetros:");
      let pulgadas = cm * 0.393701;
      alert(`${cm} centímetros = ${pulgadas.toFixed(2)} pulgadas`);
    } else if (opcion === "2") {
      let lbs = prompt("Ingresa la cantidad en libras:");
      let kg = lbs * 0.453592;
      alert(`${lbs} libras = ${kg.toFixed(2)} kilogramos`);
    } else {
      alert("Opción inválida. Por favor, ingresa 1 o 2.");
    }
  }
  convertir();
}
function Ejercicio16(){
  function obtenerDia() {
    const numero = parseInt(prompt("Ingresa un número del 1 al 7:"));
    if (isNaN(numero) || numero < 1 || numero > 7) {
      alert("Por favor, ingresa un número válido entre 1 y 7.");
      return;
    }
    let dia;
    switch (numero) {
      case 1:
        dia = "Lunes";
        break;
      case 2:
        dia = "Martes";
        break;
      case 3:
        dia = "Miércoles";
        break;
      case 4:
        dia = "Jueves";
        break;
      case 5:
        dia = "Viernes";
        break;
      case 6:
        dia = "Sábado";
        break;
      case 7:
        dia = "Domingo";
        break;
    }
    alert(`El día correspondiente al número ${numero} es ${dia}.`);
  }
  obtenerDia();
}
function Ejercicio17(){
  function calcularHoraSiguiente() {
    let horaIngresada = prompt("Ingresa la hora en formato HH:mm:ss");
    // Separar horas, minutos y segundos
    let [horas, minutos, segundos] = horaIngresada.split(":");
    // Incrementar los segundos
    let nuevoSegundo = parseInt(segundos) + 1;
    let nuevoMinuto = parseInt(minutos);
    let nuevaHora = parseInt(horas);
    // Ajustar minutos y horas si es necesario
    if (nuevoSegundo === 60) {
      nuevoSegundo = 0;
      nuevoMinuto++;
    }
    if (nuevoMinuto === 60) {
      nuevoMinuto = 0;
      nuevaHora++;
    }
    if (nuevaHora === 24) {
      nuevaHora = 0;
    }
    let horaSiguiente = `${nuevaHora.toString().padStart(2, "0")}:${nuevoMinuto.toString().padStart(2, "0")}:${nuevoSegundo.toString().padStart(2, "0")}`;
    alert(`La hora dentro de un segundo será: ${horaSiguiente}`);
  }
  calcularHoraSiguiente();
}
function Ejercicio18(){
  function calcularVenta() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs a comprar:"));
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Debe ingresar un número válido mayor que cero.");
      return;
    }
    let precioUnitario;
    if (cantidad <= 9) {
      precioUnitario = 10;
    } else if (cantidad <= 99) {
      precioUnitario = 8;
    } else if (cantidad <= 499) {
      precioUnitario = 7;
    } else {
      precioUnitario = 6;
    }
    let precioTotal = cantidad * precioUnitario;
    let gananciaVendedor = precioTotal * 0.0825;
    alert(`Precio total para el cliente: $${precioTotal.toFixed(2)}`);
    alert(`Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);
  }
  calcularVenta();
}
function Ejercicio19(){
  function calcularSalarioSemanal() {
    let identificadorEmpleado = parseInt(prompt("Ingrese el identificador del empleado (1, 2, 3 o 4):"));
    let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados (máximo 6):"));
    if (isNaN(identificadorEmpleado) || identificadorEmpleado < 1 || identificadorEmpleado > 4) {
      alert("El identificador del empleado debe ser un número entre 1 y 4.");
      return;
    }
    if (isNaN(diasTrabajados) || diasTrabajados < 1 || diasTrabajados > 6) {
      alert("La cantidad de días trabajados debe ser un número entre 1 y 6.");
      return;
    }
    let salarioDiario;
    switch (identificadorEmpleado) {
      case 1:
        salarioDiario = 56;
        break;
      case 2:
        salarioDiario = 64;
        break;
      case 3:
        salarioDiario = 80;
        break;
      case 4:
        salarioDiario = 48;
        break;
    }
    let salarioSemanal = salarioDiario * diasTrabajados;
    alert(`El salario semanal del empleado es: $${salarioSemanal}`);
  }
  calcularSalarioSemanal();
}
function Ejercicio20(){
  function procesarNumeros() {
    const numeros = [];
    for (let i = 0; i < 4; i++) {
      const num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
      numeros.push(num);
    }
    const pares = numeros.filter(num => num % 2 === 0).length;
    alert(`Cantidad de números pares: ${pares}`);
    const mayor = Math.max(...numeros);
    alert(`El mayor de todos es: ${mayor}`);
    if (numeros[2] % 2 === 0) {
      const cuadradoSegundo = numeros[1] ** 2;
      alert(`El cuadrado del segundo número (${numeros[1]}) es: ${cuadradoSegundo}`);
    }
    if (numeros[0] < numeros[3]) {
      const media = numeros.reduce((sum, num) => sum + num, 0) / numeros.length;
      alert(`La media de los 4 números es: ${media}`);
    }
    if (numeros[1] > numeros[2] && numeros[2] >= 50 && numeros[2] <= 700) {
      const suma = numeros.reduce((sum, num) => sum + num, 0);
      alert(`La suma de los 4 números es: ${suma}`);
    }
  }
  procesarNumeros();
}
function Ejercicio21(){
  function calcularFactorial() {
    let numero = parseInt(prompt("Ingrese un número entero no negativo:"));
    if (isNaN(numero) || numero < 0) {
      alert("Por favor, ingrese un número entero no negativo.");
      return;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
    alert(`El factorial de ${numero} es: ${factorial}`);
  }
  calcularFactorial();
}

function Ejercicio22(){
  function calcularSumaNPrimeros() {
    let n = parseInt(prompt("Ingrese un número entero positivo:"));
    if (isNaN(n) || n <= 0) {
      alert("Por favor, ingrese un número entero positivo.");
      return;
    }
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
    alert(`La suma de los ${n} primeros números es: ${suma}`);
  }
  calcularSumaNPrimeros();
}

function Ejercicio23(){
  function calcularSumaImparesHastaN() {
    let n = parseInt(prompt("Ingrese un número entero positivo:"));
    if (isNaN(n) || n <= 0) {
      alert("Por favor, ingrese un número entero positivo.");
      return;
    }
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
      suma += i;
    }
    alert(`La suma de los números impares menores o iguales a ${n} es: ${suma}`);
  }
  calcularSumaImparesHastaN();
}

function Ejercicio24(){
  function sumarNumerosPares() {
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2) {
      suma += i;
    }
    alert(`La suma de todos los números pares hasta el 1000 es: ${suma}`);
  }
  sumarNumerosPares();
}

function Ejercicio25(){
  function calcularFactorial() {
    let numero = parseInt(prompt("Ingrese un número entero no negativo:"));
    if (isNaN(numero) || numero < 0) {
      alert("Por favor, ingrese un número entero no negativo.");
      return;
    }
    let factorial = calcularFactorialRecursivo(numero);
    alert(`El factorial de ${numero} es: ${factorial}`);
  }
  function calcularFactorialRecursivo(n) {
    if (n === 0) {
      return 1; 
    } else {
      return n * calcularFactorialRecursivo(n - 1); 
    }
  }
  calcularFactorial();
}

function Ejercicio26(){
  function calcularRestoCociente() {
    let dividendo = parseInt(prompt("Ingresa el dividendo (un número entero positivo)").trim() || "");
    let divisor = parseInt(prompt("Ingresa el divisor (un número entero positivo)").trim() || "");
    if (isNaN(dividendo) || isNaN(divisor) || divisor === 0) {
      alert("Valores ingresados inválidos");
      return;
    }
    let resto = dividendo;
    let cociente = 0;
    for (let cont = divisor; cont <= dividendo; cont += divisor) {
      cociente++;
    }
    for (let cont = divisor; cont <= dividendo; cont += divisor) {
      resto -= divisor;
    }
    alert(`El cociente de dividir ${dividendo} entre ${divisor} por restas sucesivas es: ${cociente}`);
    alert(`El resto de dividir ${dividendo} entre ${divisor} por restas sucesivas es: ${resto}`);
  }
  calcularRestoCociente();

}

function Ejercicio27(){
  let suma = 0;
  let contador = 0;
  let numero;
  do {
    numero = parseFloat(prompt("Ingresa un número positivo (o un número negativo para finalizar):"));
    if (numero >= 0) {
      suma += numero;
      contador++;
    } else if (numero < 0 && contador > 0) {
      let media = suma / contador;
      alert(`La media de los números ingresados es: ${media}`);
      return;
    } else {
      alert("No se ingresaron números positivos.");
      return;
    }
  } while (numero >= 0);
}

function Ejercicio28(){
  let suma = 0;
  let contador = 1;
  do {
    suma += contador;
    contador++;
  } while (contador <= 100);
  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function Ejercicio29(){
  let suma = 0;
  let contador = 1;
  while (contador <= 100) {
    suma += contador;
    contador++;
  }
  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function Ejercicio30(){
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    suma += i;
  }
  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function Ejercicio31(){
let numPares = 0;
let sumaPares = 0;
let numImpares = 0;
let sumaImpares = 0;
let numero;
for (let i = 0; i < 10; i++) {
  numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
  if (numero % 2 === 0) {
    numPares++;
    sumaPares += numero;
  } else {
    numImpares++;
    sumaImpares += numero;
  }
}
let mediaPares = sumaPares / numPares;
let mediaImpares = sumaImpares / numImpares;
alert(`La media de los números pares es: ${mediaPares}`);
alert(`La media de los números impares es: ${mediaImpares}`);
}

function Ejercicio33(){
  let respuesta = confirm("¿Deseas continuar con el programa?");
    if (respuesta) {
        alert("El usuario ha decidido continuar.");
    } else {
        alert("El usuario ha cancelado la operación.");
    }
}

function Ejercicio34(){
  for (let i = 1; i <= 9; i++) {
    alert(`Tabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
        alert(`${i} x ${j} = ${i * j}`);
    }
    alert('');
  }
}

function Ejercicio35(){
  let numeros = [];
    let totalNumeros = 20;
    for (let i = 0; i < totalNumeros; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i + 1} de ${totalNumeros}:`));
        while (isNaN(numero)) {
            numero = parseFloat(prompt(`Valor inválido. Ingresa el número ${i + 1} de ${totalNumeros}:`));
        }
        numeros.push(numero);
    }
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    alert(`El número mayor es: ${mayor}`);
    alert(`El número menor es: ${menor}`);
}

function Ejercicio36(){
function calcularFibonacci(n) {
  if (n <= 0) {
      return [];
  } else if (n === 1) {
      return [0];
  }
  const serie = [0, 1];
  for (let i = 2; i < n; i++) {
      serie.push(serie[i - 1] + serie[i - 2]);
  }
  return serie;
}
function solicitarNumeroDeTerminos() {
  let numeroDeTerminos = parseInt(prompt("Ingresa el número de términos de la serie de Fibonacci:"));
  while (isNaN(numeroDeTerminos) || numeroDeTerminos <= 0) {
      numeroDeTerminos = parseInt(prompt("Valor inválido. Ingresa un número entero positivo:"));
  }
  const serieFibonacci = calcularFibonacci(numeroDeTerminos);
  alert(`La serie de Fibonacci con ${numeroDeTerminos} términos es:`);
  alert(serieFibonacci.join(', '));
}
solicitarNumeroDeTerminos();
}

function Ejercicio37(){
function calcularMCD(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}
function solicitarNumerosYCalcularMCD() {
  let numero1 = parseInt(prompt("Ingresa el primer número:"));
  while (isNaN(numero1)) {
      numero1 = parseInt(prompt("Valor inválido. Ingresa el primer número:"));
  }
  let numero2 = parseInt(prompt("Ingresa el segundo número:"));
  while (isNaN(numero2)) {
      numero2 = parseInt(prompt("Valor inválido. Ingresa el segundo número:"));
  }
  const mcd = calcularMCD(numero1, numero2);
  alert(`El M.C.D. de ${numero1} y ${numero2} es: ${mcd}`);
}
solicitarNumerosYCalcularMCD();
}

function Ejercicio38(){
function esNumeroPerfecto(numero) {
  let sumaDivisores = 0;
  for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
          sumaDivisores += i;
      }
  }
  return sumaDivisores === numero;
}
function solicitarNumeroYVerificarPerfecto() {
  let numero = parseInt(prompt("Ingresa un número:"));
  while (isNaN(numero) || numero <= 0) {
      numero = parseInt(prompt("Valor inválido. Ingresa un número entero positivo:"));
  }
  if (esNumeroPerfecto(numero)) {
      alert(`El número ${numero} es un número perfecto.`);
  } else {
      alert(`El número ${numero} no es un número perfecto.`);
  }
}
solicitarNumeroYVerificarPerfecto();
}

function Ejercicio39(){
function aproximarPi(iteraciones) {
  let pi = 0;
  let signo = 1;
  for (let i = 0; i < iteraciones; i++) {
      pi += signo * (4 / (2 * i + 1));
      signo *= -1; 
  }
  return pi;
}
function solicitarIteraciones() {
  let iteraciones = parseInt(prompt("Ingresa el número de iteraciones para aproximar pi:"));
  while (isNaN(iteraciones) || iteraciones <= 0) {
      iteraciones = parseInt(prompt("Valor inválido. Ingresa un número entero positivo:"));
  }

  const piAproximado = aproximarPi(iteraciones);
  alert(`El valor aproximado de pi con ${iteraciones} iteraciones es: ${piAproximado}`);
}
solicitarIteraciones();
}

function Ejercicio40(){
function aproximarPiNilakantha(iteraciones) {
  let pi = 3;
  let signo = 1;
  for (let i = 1; i <= iteraciones; i++) {
      let numerador = 4;
      let denominador = (2 * i) * (2 * i + 1) * (2 * i + 2);
      pi += signo * (numerador / denominador);
      signo *= -1;
  }
  return pi;
}
function solicitarIteraciones() {
  let iteraciones = parseInt(prompt("Ingresa el número de iteraciones para aproximar pi:"));
  while (isNaN(iteraciones) || iteraciones <= 0) {
      iteraciones = parseInt(prompt("Valor inválido. Ingresa un número entero positivo:"));
  }
  const piAproximado = aproximarPiNilakantha(iteraciones);
  alert(`El valor aproximado de pi con ${iteraciones} iteraciones es: ${piAproximado}`);
}
solicitarIteraciones();
}