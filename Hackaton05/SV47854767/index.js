// El telefono ingresado debe tener numero de serie e IMEI que no esten reportados para acceder al servicio
// Un telefono primero debe pasar por una primera revision y se debe guardar el primer diagnostico
// Se debe tener la autorizacion escrita del usuario y el abono del 50% de la reparacion para que acceda al servicio
// Los tecnicos pueden tener uno o varios skills que se adecuen a la marca de telefono que se necesita acceder al servicio
// Los repuestos se agregaran a la reparacion de telefono
// Se debe mostrar el estado del equipo en sus diferentes estaciones de trabajo


class Telefono {
    constructor(numeroSerie, imei) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.diagnosticoInicial = '';
        this.autorizacionUsuario = false;
        this.abono = 0;
        this.repuestos = [];
        this.estado = 'Ingresado';
    }

    agregarDiagnostico(diagnostico) {
        this.diagnosticoInicial = diagnostico;
        this.estado = 'Diagnosticado';
    }

    autorizarReparacion(abono) {
        if (abono >= 50) {
            this.autorizacionUsuario = true;
            this.abono = abono;
            this.estado = 'Autorizado';
        } else {
            console.log('El abono debe ser al menos el 50% del costo total.');
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

class Tecnico {
    constructor(nombre) {
        this.nombre = nombre;
        this.skills = [];
    }

    agregarSkill(skill) {
        this.skills.push(skill);
    }
}

class Repuesto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Sucursal {
    constructor(nombre) {
        this.nombre = nombre;
        this.telefonos = [];
        this.tecnicos = [];
    }

    ingresarTelefono(telefono) {
        if (!this.telefonos.some(t => t.numeroSerie === telefono.numeroSerie || t.imei === telefono.imei)) {
            this.telefonos.push(telefono);
            console.log('Teléfono ingresado correctamente.');
        } else {
            console.log('El número de serie o IMEI ya está reportado.');
        }
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
    }

    buscarTelefono(imei) {
        return this.telefonos.find(t => t.imei === imei);
    }
}

class Cliente {
    constructor(nombre, telefonoContacto) {
        this.nombre = nombre;
        this.telefonoContacto = telefonoContacto;
        this.telefonos = [];
    }

    agregarTelefono(telefono) {
        this.telefonos.push(telefono);
    }
}

const sucursal = new Sucursal('Sucursal Centro');

const tecnico1 = new Tecnico('Juan Perez');
tecnico1.agregarSkill('Samsung');
tecnico1.agregarSkill('iPhone');


sucursal.agregarTecnico(tecnico1);

const cliente1 = new Cliente('Carlos García', '123-456-7890');

const telefono1 = new Telefono('123456', 'ABCDEF123456');

cliente1.agregarTelefono(telefono1);


sucursal.ingresarTelefono(telefono1);

telefono1.agregarDiagnostico('Pantalla rota');

telefono1.autorizarReparacion(50);

const repuesto1 = new Repuesto('Pantalla', 100);
telefono1.agregarRepuesto(repuesto1);

telefono1.cambiarEstado('Reparado');

// Crear algunas sucursales para el ejemplo
const sucursales = [
    new Sucursal('Miraflores'),
    new Sucursal('San Miguel'),
    new Sucursal('La Molina')
];

// Función para poblar el select de sucursales
function poblarSucursales() {
    const branchSelect = document.getElementById('branch');
    sucursales.forEach((sucursal, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = sucursal.nombre;
        branchSelect.appendChild(option);
    });
}

// Llamar a la función para poblar las sucursales al cargar la página
document.addEventListener('DOMContentLoaded', poblarSucursales);

// Manejar el formulario de ingreso de teléfono
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

