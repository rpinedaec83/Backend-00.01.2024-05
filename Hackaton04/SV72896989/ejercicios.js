function ejercicio1_reto1(){

    let a = parseFloat(prompt("Ingrese el primer numero:"));
    let b = parseFloat(prompt("Ingrese el segundo numero:"));
    let suma = a + b;
    alert("La suma de los dos numeros es " + suma);

}

function ejercicio2_reto1(){

    let base = parseFloat(prompt("Ingrese el numero a potenciar"));
    let exponente = parseFloat(prompt("Ingrese el exponente"))
    let potencia = Math.pow(base, exponente);
    alert("La potencia " + base + " elevado a la " + exponente + " es " + potencia)

}