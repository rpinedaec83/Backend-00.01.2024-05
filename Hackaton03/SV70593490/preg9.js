function calcularAumentoSalario(salarioActual) {
    let aumentoPorcentaje = 0;
    let nuevoSalario = 0;

    if (salarioActual > 2000) {
        aumentoPorcentaje = 0.05;
    } else {
        aumentoPorcentaje = 0.10;
    }

    nuevoSalario = salarioActual * (1 + aumentoPorcentaje);
    return nuevoSalario;
}

let salarioActual = prompt("Ingrese el salario actual del trabajador:");

salarioActual = Number(salarioActual);

if (isNaN(salarioActual) || salarioActual < 0) {
    console.log("Por favor, ingrese un salario válido.");
} else {
    let nuevoSalario = calcularAumentoSalario(salarioActual);
    let aumentoPorcentaje = (nuevoSalario - salarioActual) / salarioActual * 100;

    console.log(`Salario actual: $${salarioActual.toFixed(2)}`);
    console.log(`Porcentaje de aumento: ${(aumentoPorcentaje.toFixed(2))}%`);
    console.log(`Nuevo salario con aumento: $${nuevoSalario.toFixed(2)}`);
}
