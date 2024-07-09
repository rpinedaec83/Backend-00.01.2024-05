document.getElementById('ingresoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroSerie = document.getElementById('numeroSerie').value;
    const imei = document.getElementById('imei').value;
    const diagnostico = document.getElementById('diagnostico').value;
    const autorizacion = document.getElementById('autorizacion').checked;
    const abono = document.getElementById('abono').value;

    if (!autorizacion || abono < 50) {
        alert('Debe tener autorización y abonar al menos el 50% del costo.');
        return;
    }

    const id = Date.now();

    const estado = 'En revisión';
    const tecnico = asignarTecnico();

    const fila = `<tr>
                    <td>${id}</td>
                    <td>${numeroSerie}</td>
                    <td>${imei}</td>
                    <td>${diagnostico}</td>
                    <td>${estado}</td>
                    <td>${tecnico}</td>
                  </tr>`;

    document.querySelector('#estadoTabla tbody').insertAdjacentHTML('beforeend', fila);

    document.getElementById('ingresoForm').reset();
});

function asignarTecnico() {
    const marca = detectarMarca();
    let tecnico;

    switch (marca) {
        case 'android':
            tecnico = 'Técnico Android';
            break;
        case 'ios':
            tecnico = 'Técnico iOS';
            break;
        default:
            tecnico = 'No hay técnico para esta marca';
    }

    return tecnico;
}

function detectarMarca() {
    const random = Math.random();
    if (random < 0.5) {
        return 'android';
    } else {
        return 'ios';
    }
}
