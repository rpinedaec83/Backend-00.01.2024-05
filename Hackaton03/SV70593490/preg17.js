function calcularHoraSiguiente(horas, minutos, segundos) {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
            if (horas === 24) {
                horas = 0;
            }
        }
    }

    let nuevaHora = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    
    return nuevaHora;
}

let horas = parseInt(prompt("Ingrese las horas (formato 24 horas):"));
let minutos = parseInt(prompt("Ingrese los minutos:"));
let segundos = parseInt(prompt("Ingrese los segundos:"));

let horaSiguiente = calcularHoraSiguiente(horas, minutos, segundos);
console.log(`La hora siguiente a ${horas}:${minutos}:${segundos} es ${horaSiguiente}`);
