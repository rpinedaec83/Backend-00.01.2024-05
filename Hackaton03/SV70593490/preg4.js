function ordenarNumeros(n1, n2, n3) {
    let numeros = [n1, n2, n3];
    numeros.sort(function(a, b) {
        return a - b;
    });
    return numeros;
}

let numero1 = prompt("Ingrese el primer número entero:");
let numero2 = prompt("Ingrese el segundo número entero:");
let numero3 = prompt("Ingrese el tercer número entero:");

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Por favor, ingrese números enteros válidos.");
} else {
    let numerosOrdenados = ordenarNumeros(numero1, numero2, numero3);
    console.log("Los números ordenados de menor a mayor son: " + numerosOrdenados.join(", "));
}