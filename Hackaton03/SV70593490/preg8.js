function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let nota1 = prompt("Ingrese la primera nota:");
let nota2 = prompt("Ingrese la segunda nota:");
let nota3 = prompt("Ingrese la tercera nota:");

nota1 = Number(nota1);
nota2 = Number(nota2);
nota3 = Number(nota3);

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0) {
    console.log("Por favor, ingrese notas válidas.");
} else {
    let promedio = calcularPromedio(nota1, nota2, nota3);
    
    let resultado = promedio >= 12 ? "Aprobado" : "No Aprobado";
    
    console.log("El promedio de las tres notas es: " + promedio.toFixed(2));
    console.log("El estudiante está: " + resultado);
}
