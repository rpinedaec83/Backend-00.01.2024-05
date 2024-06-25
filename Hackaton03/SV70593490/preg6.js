function calcularSueldoSemanal(horasTrabajadas) {
    const tarifaNormal = 20;
    const tarifaExtra = 25;
    const horasNormales = 40;
    let sueldoTotal = 0;

    if (horasTrabajadas <= horasNormales) {
        sueldoTotal = horasTrabajadas * tarifaNormal;
    } else {
        let horasExtras = horasTrabajadas - horasNormales;
        sueldoTotal = (horasNormales * tarifaNormal) + (horasExtras * tarifaExtra);
    }

    return sueldoTotal;
}

let horasTrabajadas = prompt("Ingrese la cantidad de horas trabajadas en la semana:");

horasTrabajadas = Number(horasTrabajadas);

if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
    console.log("Por favor, ingrese una cantidad válida de horas trabajadas.");
} else {
    let sueldo = calcularSueldoSemanal(horasTrabajadas);
    console.log("El sueldo semanal es: $" + sueldo.toFixed(2));
}
