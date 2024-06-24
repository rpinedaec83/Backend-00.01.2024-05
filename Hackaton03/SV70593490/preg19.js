function calcularSalario(idEmpleado, diasTrabajados) {
    let salarioDiario;

    switch (idEmpleado) {
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
        default:
            return "Número de identificador de empleado inválido.";
    }

    if (diasTrabajados < 1 || diasTrabajados > 6) {
        return "Cantidad de días trabajados inválida. Ingrese un número del 1 al 6.";
    }

    let salarioSemanal = salarioDiario * diasTrabajados;

    return salarioSemanal;
}

let idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado (1-4):"));
let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados (1-6):"));

let salario = calcularSalario(idEmpleado, diasTrabajados);

if (typeof salario === 'string') {
    console.log(salario);
} else {
    console.log(`El salario semanal a pagar al empleado es: $${salario}`);
}
