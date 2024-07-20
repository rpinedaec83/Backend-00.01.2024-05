class Telefono {
    constructor(numeroSerie, imei, so) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.so = so; 
        this.reportado = false; 
        this.diagnostico = null; 
        this.estado = 'Pendiente'; 
        this.repuestos = []; 
    }

    verificarReporte() {
        if (this.numeroSerie === '1234567890' || this.imei === 'ABCDE') {
            this.reportado = true;
        }
    }

    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
    }

    actualizarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}

class Tecnico {
    constructor(nombre, apellido, habilidades = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.habilidades = habilidades; 
    }

    esAdecuadoParaTelefono(telefono) {
        return this.habilidades.includes(telefono.so);
    }
}

class Repuesto {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

class ServicioTecnico {
    constructor() {
        this.cliente = null;
        this.telefono = null;
        this.abono = 0;
        this.autorizado = false;
        this.tecnicoAsignado = null;
        this.costoReparacion = 0;
        this.repuestos = [];
    }

    asignarTelefono(telefono) {
        telefono.verificarReporte();

        if (!telefono.reportado) {
            this.telefono = telefono;
            this.telefono.estado = 'Ingreso';
        } else {
            throw new Error('El teléfono está reportado y no puede ser ingresado.');
        }
    }

    pasarRevision(diagnostico) {
        if (this.telefono) {
            this.telefono.diagnostico = diagnostico;
            this.telefono.estado = 'En revisión';
        } else {
            throw new Error('No hay teléfono asignado para realizar la revisión.');
        }
    }

    determinarCostoReparacion(costo) {
        this.costoReparacion = costo;
    }

    ingresarDatosCliente(cliente, abono) {
        if (abono < (this.costoReparacion * 0.5)) {
            throw new Error('El abono debe ser al menos el 50% del costo de reparación.');
        }
        this.cliente = cliente;
        this.abono = abono;
    }

    autorizarReparacion() {
        if (this.cliente && this.cliente.autorizacionEscrita && this.abono >= (this.costoReparacion * 0.5)) {
            this.autorizado = true;
            this.telefono.estado = 'Autorizado';
        } else {
            throw new Error('El cliente debe proporcionar autorización escrita y abonar al menos el 50% del costo de la reparación.');
        }
    }

    asignarTecnico(tecnico) {
        if (this.autorizado && tecnico.esAdecuadoParaTelefono(this.telefono)) {
            this.tecnicoAsignado = tecnico;
            this.telefono.estado = 'En reparación';
        } else {
            throw new Error('No se puede asignar el técnico debido a restricciones de habilidades o autorización.');
        }
    }

    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
    }

    calcularCostoTotal() {
        let costoTotal = this.costoReparacion;
        this.repuestos.forEach(repuesto => {
            costoTotal += repuesto.valor;
        });
        return costoTotal;
    }

    finalizarReparacion() {
        if (this.tecnicoAsignado) {
            this.telefono.estado = 'Reparado';
        } else {
            throw new Error('No se ha asignado un técnico para la reparación.');
        }
    }

    obtenerEstadoTelefono() {
        return this.telefono ? this.telefono.estado : 'No hay teléfono asignado.';
    }
}

class Sucursal {
    constructor(nombre) {
        this.nombre = nombre;
        this.servicioTecnico = new ServicioTecnico();
        this.reparaciones = [];
    }

    ingresarTelefono(telefono) {
        try {
            this.servicioTecnico.asignarTelefono(telefono);
        } catch (error) {
            console.error('Error al ingresar teléfono:', error.message);
        }
    }

    realizarRevision(diagnostico) {
        try {
            this.servicioTecnico.pasarRevision(diagnostico);
        } catch (error) {
            console.error('Error al realizar revisión:', error.message);
        }
    }

    determinarCostoReparacion(costo) {
        this.servicioTecnico.determinarCostoReparacion(costo);
    }

    ingresarDatosCliente(cliente, abono) {
        try {
            this.servicioTecnico.ingresarDatosCliente(cliente, abono);
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    }

    autorizarReparacion() {
        try {
            this.servicioTecnico.autorizarReparacion();
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    }

    asignarTecnico(tecnico) {
        try {
            this.servicioTecnico.asignarTecnico(tecnico);
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    }

    agregarRepuesto(repuesto) {
        this.servicioTecnico.agregarRepuesto(repuesto);
    }

    calcularCostoTotal() {
        return this.servicioTecnico.calcularCostoTotal();
    }

    finalizarReparacion() {
        try {
            this.servicioTecnico.finalizarReparacion();
            this.reparaciones.push(this.servicioTecnico);
            this.servicioTecnico = new ServicioTecnico();
        } catch (error) {
            console.error('Error al finalizar reparación:', error.message);
        }
    }

    obtenerReparaciones() {
        return this.reparaciones.map(servicio => ({
            numeroSerie: servicio.telefono.numeroSerie,
            imei: servicio.telefono.imei,
            so: servicio.telefono.so,
            diagnostico: servicio.telefono.diagnostico,
            estado: servicio.telefono.estado,
            repuestos: servicio.repuestos.map(r => r.nombre).join(', ')
        }));
    }

    obtenerEstadoTelefono() {
        return this.servicioTecnico.obtenerEstadoTelefono();
    }
}

class Cliente {
    constructor(nombre, autorizacionEscrita) {
        this.nombre = nombre;
        this.autorizacionEscrita = autorizacionEscrita;
    }
}
class Reparacion {
    constructor(telefono, sucursal, diagnostico, costo, cliente) {
        this.telefono = telefono;
        this.sucursal = sucursal;
        this.diagnostico = diagnostico;
        this.costo = costo;
        this.cliente = cliente;
        this.repuestos = [];
    }

    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
    }

    finalizarReparacion() {
        this.telefono.estado = 'Reparado';
    }

    obtenerEstado() {
        return this.telefono.estado;
    }

    obtenerDatosParaTabla() {
        return {
            numeroSerie: this.telefono.numeroSerie,
            imei: this.telefono.imei,
            so: this.telefono.so,
            diagnostico: this.diagnostico,
            estado: this.telefono.estado,
            repuestos: this.repuestos.map(repuesto => repuesto.nombre).join(', ')
        };
    }
}
// Validación de objetos en JavaScript

// Verificar si un teléfono ha sido reportado
const telefono1 = new Telefono('1234', 'ABCDEH', 'Android');
telefono1.verificarReporte();
console.log(telefono1.reportado);
console.log(telefono1.estado);  // false

// Crear técnicos con diferentes habilidades
const tecnico1 = new Tecnico('Juan', 'Pérez', ['Android']);
const tecnico2 = new Tecnico('María', 'Gómez', ['iOS']);
const tecnico3 = new Tecnico('Antonio', 'Gómez', ['Android', 'iOS']);

// Verificar si un técnico es adecuado para un teléfono
console.log(tecnico1.esAdecuadoParaTelefono(telefono1));  // true para Android
console.log(tecnico2.esAdecuadoParaTelefono(telefono1));  // false para iOS

// Crear repuestos y añadirlos a la reparación
const repuesto1 = new Repuesto('Pantalla', 100);
const repuesto2 = new Repuesto('Batería', 50);

const cliente1 = new Cliente('Carlos', true);

// Crear una sucursal y asignar un teléfono
const sucursal1 = new Sucursal('Sucursal A');

try {
    sucursal1.ingresarTelefono(telefono1);
    console.log(telefono1.estado)
    console.log('Teléfono ingresado correctamente.');
} catch (error) {
    console.log('Error:', error.message);
}

// Realizar revisión y asignar diagnóstico
try {
    sucursal1.realizarRevision('Pantalla rota');
    console.log('Revisión realizada.');
    console.log(telefono1.estado);
} catch (error) {
    console.log('Error:', error.message);
}

// Determinar el costo de reparación
sucursal1.determinarCostoReparacion(240);

// Ingresar datos del cliente y el abono
try {
    sucursal1.ingresarDatosCliente(cliente1, 120);
    console.log('Datos del cliente ingresados correctamente.');
} catch (error) {
    console.log('Error:', error.message);
}

// Autorizar reparación
try {
    sucursal1.autorizarReparacion();
    console.log('Reparación autorizada.');
    console.log(telefono1.estado);
} catch (error) {
    console.log('Error:', error.message);
}

// Asignar técnico
try {
    sucursal1.asignarTecnico(tecnico1);
    console.log('Técnico asignado correctamente.');
} catch (error) {
    console.log('Error:', error.message);
}

// Agregar repuestos
sucursal1.agregarRepuesto(repuesto1);
sucursal1.agregarRepuesto(repuesto2);

// Calcular costo total de reparación
const costoTotal = sucursal1.calcularCostoTotal();
console.log(`Costo total de la reparación: $${costoTotal}`);

// Finalizar reparación
try {
    sucursal1.finalizarReparacion();
    console.log(telefono1.estado);
    console.log('Reparación finalizada.');
} catch (error) {
    console.log('Error:', error.message);
}

// Obtener estado del teléfono
console.log('Estado del teléfono:', sucursal1.obtenerEstadoTelefono());

// Obtener reparaciones realizadas
console.log('Reparaciones realizadas:', sucursal1.obtenerReparaciones());


const btnIngresarDatos = document.getElementById("btnIngresarDatos");

btnIngresarDatos.addEventListener('click', function () {
    Swal.fire({
        title: 'Ingresar datos del teléfono',
        html: `
        <input id="numeroSerie" class="swal2-input" placeholder="Número de serie">
        <input id="imei" class="swal2-input" placeholder="IMEI">
        `,
        showCancelButton: true,
        confirmButtonText: 'Siguiente',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            const imei = document.getElementById('imei').value;
            const numeroSerie = document.getElementById('numeroSerie').value;

            if (!numeroSerie || !imei) {
                Swal.showValidationMessage('Todos los campos son requeridos');
                return false;
            }

            const telefonoNuevo = new Telefono(numeroSerie, imei);
            telefonoNuevo.verificarReporte();

            if (telefonoNuevo.reportado) {
                Swal.showValidationMessage('El teléfono está reportado y no puede ser ingresado.');
                return false;
            }

            return telefonoNuevo;
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            const telefono = result.value;
            mostrarFormularioDatos(telefono);
        }
    });
});

function mostrarFormularioDatos(telefono) {
    Swal.fire({
        title: 'Datos adicionales del teléfono',
        html: `
        <select id="so" class="swal2-input">
            <option value="" disabled selected>Selecciona el SO</option>
            <option value="Android">Android</option>
            <option value="iOS">iOS</option>
        </select>
        <select id="sucursal" class="swal2-input">
            <option value="" disabled selected>Selecciona la sucursal</option>
            <option value="1">Sucursal A</option>
            <option value="2">Sucursal B</option>
        </select>
        `,
        showCancelButton: true,
        confirmButtonText: 'Siguiente',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const so = document.getElementById('so').value;
            const sucursalSeleccionada = document.getElementById('sucursal').value;

            if (!so || !sucursalSeleccionada) {
                Swal.showValidationMessage('Todos los campos son requeridos');
                return false;
            }

            telefono.so = so;

            return { telefono, sucursal: sucursalSeleccionada };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { telefono, sucursal } = result.value;
            mostrarFormularioDiagnostico(telefono, sucursal);
        }
    });
}

function mostrarFormularioDiagnostico(telefono, sucursal) {
    Swal.fire({
        title: 'Ingresar diagnóstico y costo',
        html: `
        <textarea id="diagnostico" class="swal2-textarea" placeholder="Ingrese diagnóstico"></textarea>
        <input id="costo" type="number" class="swal2-input" placeholder="Costo de reparación">
        <br/>
        <br/>
        <select id="repuesto" class="swal2-input">
            <option value="" disabled selected>Selecciona el repuesto</option>
            <option value="Pantalla">Pantalla</option>
            <option value="Batería">Batería</option>
        </select>
        `,
        showCancelButton: true,
        confirmButtonText: 'Siguiente',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const diagnostico = document.getElementById('diagnostico').value;
            const costo = parseFloat(document.getElementById('costo').value);
            const repuestoSeleccionado = document.getElementById('repuesto').value;

            if (!diagnostico || isNaN(costo) || !repuestoSeleccionado || costo<=0) {
                Swal.showValidationMessage('Todos los campos son requeridos o puso un valor invalido para el costo');
                return false;
            }

            const repuesto = new Repuesto(repuestoSeleccionado, repuestoSeleccionado === 'Pantalla' ? 100 : 50);

            // Crear una instancia de ServicioTecnico y usar sus métodos
            const servicioTecnico = new ServicioTecnico();
            servicioTecnico.determinarCostoReparacion(costo);
            servicioTecnico.agregarRepuesto(repuesto);
            const costoTotal = servicioTecnico.calcularCostoTotal();
       
            return { telefono, sucursal, diagnostico, costo, repuesto, costoTotal };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { telefono, sucursal, diagnostico, costo, repuesto, costoTotal } = result.value;
           
            mostrarFormularioCliente(telefono, sucursal, diagnostico, costo, repuesto, costoTotal);

           
        }
    });
}


function mostrarFormularioCliente(telefono, sucursal, diagnostico, costo, repuesto, costoTotal) {
    Swal.fire({
        title: 'Datos del cliente',
        html: `
        <p>Costo Total de la reparación: $${costoTotal}</p>
        <input id="nombreCliente" class="swal2-input" placeholder="Nombre del cliente">
        <input id="abono" type="number" class="swal2-input" placeholder="Abono">
        <label><input type="checkbox" id="autorizacionEscrita"> Autorización escrita</label>
        `,
        showCancelButton: true,
        confirmButtonText: 'Siguiente',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const nombreCliente = document.getElementById('nombreCliente').value;
            const abono = parseFloat(document.getElementById('abono').value);
            const autorizacionEscrita = document.getElementById('autorizacionEscrita').checked;

            if (!nombreCliente || isNaN(abono) || abono < (costoTotal * 0.5) || abono>costoTotal) {
                Swal.showValidationMessage('Todos los campos son requeridos y se necesita autorización escrita y abono del 50%.');
                return false;
            }

            return { telefono, sucursal, diagnostico, costo, repuesto, nombreCliente, abono, autorizacionEscrita };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const { telefono, sucursal, diagnostico, costo, repuesto, nombreCliente, abono, autorizacionEscrita } = result.value;
            realizarAutorizacion(telefono, sucursal, diagnostico, costo, repuesto, nombreCliente, abono, autorizacionEscrita);
        }
    });
}


function realizarAutorizacion(telefono, sucursal, diagnostico, costo, repuesto, nombreCliente, abono, autorizacionEscrita) {
    Swal.fire({
        title: 'Autorización de reparación',
        html: `
        <select id="tecnico" class="swal2-input">
            <option value="" disabled selected>Selecciona el técnico</option>
            <option value="1">Juan Pérez (Android)</option>
            <option value="2">María Gómez (iOS)</option>
            <option value="3">Antonio Gómez (Android, iOS)</option>
        </select>
        `,
        showCancelButton: true,
        confirmButtonText: 'Autorizar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const tecnicoId = document.getElementById('tecnico').value;

            if (!tecnicoId) {
                Swal.showValidationMessage('Todos los campos son requeridos');
                return false;
            }

            let tecnicoSeleccionado;
            if (tecnicoId === '1') tecnicoSeleccionado = tecnico1;
            else if (tecnicoId === '2') tecnicoSeleccionado = tecnico2;
            else if (tecnicoId === '3') tecnicoSeleccionado = tecnico3;

            if (!tecnicoSeleccionado.esAdecuadoParaTelefono(telefono)) {
                Swal.showValidationMessage('El técnico no es adecuado para el sistema operativo del teléfono.');
                return false;
            }

            const cliente = new Cliente(nombreCliente, autorizacionEscrita);
            const reparacion = new Reparacion(telefono, sucursal, diagnostico, costo, cliente);
            reparacion.agregarRepuesto(repuesto);
            reparacion.tecnicoAsignado = tecnicoSeleccionado;

            return reparacion;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const reparacion = result.value;
            agregarReparacionATabla(reparacion);
            Swal.fire({
                title: 'Reparación iniciada',
                icon: 'success',
                text: 'La reparación ha sido iniciada correctamente.'
            });
        }
    });
}

function agregarReparacionATabla(reparacion) {
    const tabla = document.querySelector('#tablaReparaciones tbody');
    const repuestosNombres = reparacion.repuestos.map(r => r.nombre).join(', ');
    const row = `
    <tr>
    <td>${reparacion.telefono.numeroSerie}</td>
    <td>${reparacion.telefono.imei}</td>
    <td>${reparacion.telefono.so}</td>
    <td>${reparacion.diagnostico}</td>
    <td>En reparación</td>
    <td>${repuestosNombres}</td>
    <td>${reparacion.tecnicoAsignado.nombre} ${reparacion.tecnicoAsignado.apellido}</td>
    <td>${reparacion.cliente.nombre}</td>
    
    <td>
        <button class="btn btn-success btn-sm" onclick="finalizarReparacion('${reparacion.telefono.numeroSerie}')">Reparar</button>
    </td>
</tr>
    `;
    tabla.innerHTML += row;
    document.getElementById('tablaReparaciones').style.display = 'block';
}

function finalizarReparacion(numeroSerie) {
    // Aquí puedes implementar la lógica para cambiar el estado de "En reparación" a "Reparado"
    // Por ejemplo:
    const rows = document.querySelectorAll('#tablaReparaciones tbody tr');
    rows.forEach(row => {
        if (row.children[0].textContent === numeroSerie) {
            row.children[4].textContent = 'Reparado';
            row.querySelector('button').setAttribute('disabled', 'disabled');
        }
    });

    Swal.fire({
        title: 'Reparación finalizada',
        icon: 'success',
        text: 'La reparación ha sido marcada como finalizada.'
    });
}



