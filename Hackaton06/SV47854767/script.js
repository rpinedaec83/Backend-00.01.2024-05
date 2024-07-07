class Telefono {
    constructor(numeroSerie, imei, marca, modelo, diagnostico) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.diagnosticoInicial = diagnostico;
        this.autorizacionUsuario = false;
        this.abono = 0;
        this.repuestos = [];
        this.estado = 'Ingresado';
    }

    agregarDiagnostico(diagnostico) {
        this.diagnosticoInicial = diagnostico;
        this.estado = 'Diagnosticado';
    }

    autorizarReparacion(autorizacion, abono) {
        if (autorizacion.toLowerCase() === 'sí' && abono >= 50) {
            this.autorizacionUsuario = true;
            this.abono = abono;
            this.estado = 'Autorizado';
        } else {
            console.log('La autorización debe ser "sí" y el abono al menos el 50% del costo total.');
        }
    }

    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
        this.estado = 'Reparando';
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}

class Sucursal {
    constructor(nombre) {
        this.nombre = nombre;
        this.telefonos = [];
    }

    ingresarTelefono(telefono) {
        if (!this.telefonos.some(t => t.numeroSerie === telefono.numeroSerie || t.imei === telefono.imei)) {
            this.telefonos.push(telefono);
            console.log('Teléfono ingresado correctamente.');
        } else {
            console.log('El número de serie o IMEI ya está reportado.');
        }
    }

    buscarTelefono(imei) {
        return this.telefonos.find(t => t.imei === imei);
    }
}

const sucursales = [
    new Sucursal('Sucursal Centro'),
    new Sucursal('Sucursal Norte'),
    new Sucursal('Sucursal Sur')
];

function poblarSucursales() {
    const branchSelect = document.getElementById('branch');
    sucursales.forEach((sucursal, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = sucursal.nombre;
        branchSelect.appendChild(option);
    });
}

function guardarDatos() {
    const datos = sucursales.map(sucursal => ({
        nombre: sucursal.nombre,
        telefonos: sucursal.telefonos
    }));
    localStorage.setItem('sucursales', JSON.stringify(datos));
}

function cargarDatos() {
    const datos = localStorage.getItem('sucursales');
    if (datos) {
        const sucursalesGuardadas = JSON.parse(datos);
        sucursalesGuardadas.forEach(sucursalData => {
            const sucursal = new Sucursal(sucursalData.nombre);
            sucursalData.telefonos.forEach(telefonoData => {
                const telefono = new Telefono(
                    telefonoData.numeroSerie,
                    telefonoData.imei,
                    telefonoData.marca,
                    telefonoData.modelo,
                    telefonoData.diagnosticoInicial
                );
                telefono.autorizarReparacion(
                    telefonoData.autorizacionUsuario ? 'sí' : 'no',
                    telefonoData.abono
                );
                telefono.cambiarEstado(telefonoData.estado);
                sucursal.ingresarTelefono(telefono);
            });
            sucursales.push(sucursal);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
    poblarSucursales();
    mostrarTelefonos();
});

document.getElementById('phoneForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const branchIndex = document.getElementById('branch').value;
    const numeroSerie = document.getElementById('serialNumber').value;
    const imei = document.getElementById('imei').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const diagnostico = document.getElementById('diagnostico').value;
    const autorizacion = document.getElementById('autorizacion').value;
    const abono = parseFloat(document.getElementById('abono').value);

    const telefono = new Telefono(numeroSerie, imei, marca, modelo, diagnostico);
    telefono.autorizarReparacion(autorizacion, abono);

    sucursales[branchIndex].ingresarTelefono(telefono);

    guardarDatos();
    mostrarTelefonos();
});

function mostrarTelefonos() {
    const tbody = document.getElementById('phoneTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    sucursales.forEach(sucursal => {
        sucursal.telefonos.forEach(telefono => {
            const row = tbody.insertRow();
            row.insertCell(0).innerText = sucursal.nombre;
            row.insertCell(1).innerText = telefono.numeroSerie;
            row.insertCell(2).innerText = telefono.imei;
            row.insertCell(3).innerText = telefono.marca;
            row.insertCell(4).innerText = telefono.modelo;
            row.insertCell(5).innerText = telefono.diagnosticoInicial;
            row.insertCell(6).innerText = telefono.autorizacionUsuario ? 'Sí' : 'No';
            row.insertCell(7).innerText = telefono.abono;
            row.insertCell(8).innerText = telefono.estado;
        });
    });
}



