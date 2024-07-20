class Telefono {
    constructor(imei, numeroSerie, marca, modelo) {
        this.imei = imei;
        this.numeroSerie = numeroSerie;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = 'Por Revisar';
    }

    actualizarEstado(estado) {
        this.estado = estado;
    }
}

class Sucursal {
    constructor(nombre, direccion, contacto = "") {
        this.id = `${nombre.trim()}`.replace(/ /g, "_");
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
        this.tecnicos = [];
        this.tickets = [];
    }

    agregarNuevoTecnico(newTecnico) {
        this.tecnicos.push(newTecnico);
        newSystem.guardarEnLocalStorage(); 
    }

    addTicket(ticket) {
        this.tickets.push(ticket);
        newSystem.guardarEnLocalStorage(); 
    }

    eliminarTecnico(dni) {
        this.tecnicos = this.tecnicos.filter((tecnico) => tecnico.dni !== dni);
        newSystem.guardarEnLocalStorage(); 
    }
}

class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
        this.autorizacion = false;
        this.abono = 0;
    }

    autorizarServicio() {
        this.autorizacion = true;
    }

    realizarAbono(monto) {
        this.abono = monto;
    }
}

class Ticket {
    constructor(telefono, diagnostico, autorizacion, abono, estado = "Por Revisar") {
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.autorizacion = autorizacion;
        this.abono = abono;
        this.estado = estado;
        this.repuestos = [];
    }

    cambiarEstado(estado) {
        this.estado = estado;
        this.telefono.actualizarEstado(estado);
    }

    iniciarServicio() {
        if (this.autorizacion && this.abono >= 50) {
            this.telefono.actualizarEstado('En Reparacion');
            return 'Servicio iniciado';
        } else {
            return 'No se puede iniciar el servicio. Falta autorización o abono del 50%';
        }
    }

    finalizarServicio() {
        this.telefono.actualizarEstado('Reparado');
        return 'Servicio finalizado';
    }

    agregarRepuestos(repuesto) {
        this.repuestos.push(repuesto);
    }
}

class Tecnico {
    constructor(nombre, apellido, dni, celular, direccion, email, skills) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.celular = celular;
        this.direccion = direccion;
        this.email = email;
        this.skills = skills;
    }

    addSkill(skill) {
        this.skills.push(skill);
    }
}

class System {
    constructor() {
        this.sucursales = this.cargarDeLocalStorage('sucursales') || [];
        this.telefonosReportados = this.cargarDeLocalStorage('telefonosReportados') || [];
    }

    addSucursal(sucursal) {
        this.sucursales.push(sucursal);
        this.guardarEnLocalStorage();
    }

    addTelefonoReportado(telefono) {
        this.telefonosReportados.push(telefono);
        this.guardarEnLocalStorage();
    }

    estaReportado(imei) {
        return this.telefonosReportados.some(telefono => telefono.imei === imei);
    }

    getSucursalById(id) {
        const sucursal = this.sucursales.find((sucursal) => sucursal.id === id);
        if (!sucursal) throw new Error("No existe la sucursal");
        return sucursal;
    }

    guardarEnLocalStorage() {
        localStorage.setItem('sucursales', JSON.stringify(this.sucursales));
        localStorage.setItem('telefonosReportados', JSON.stringify(this.telefonosReportados));
    }

    cargarDeLocalStorage(clave) {
        const data = JSON.parse(localStorage.getItem(clave));
        if (clave === 'sucursales' && data) {
            return data.map(s => new Sucursal(s.nombre, s.direccion, s.contacto));
        }
        return data;
    }
}

const newSystem = new System();

const IMEIS_BANEADOS = localStorage.getItem("IMEIS_BANEADOS") ? JSON.parse(localStorage.getItem("IMEIS_BANEADOS")) : ["123456789012345", "987654321098765"];
localStorage.setItem("IMEIS_BANEADOS", JSON.stringify(IMEIS_BANEADOS));

function limpiarLocalStorage() {
    localStorage.removeItem('sucursales');
    localStorage.removeItem('telefonosReportados');
}

$(document).ready(function () {
    limpiarLocalStorage();

    $('#branch').on('change', function () {
        const selectedBranch = $(this).val();
        const selectedSucursal = newSystem.sucursales.find(s => s.nombre === selectedBranch);

        $('#tecnico').empty();
        $('#tecnico').append('<option value="">Seleccione un técnico</option>');

        if (selectedSucursal) {
            selectedSucursal.tecnicos.forEach(tecnico => {
                $('#tecnico').append(`<option value="${tecnico.nombre} ${tecnico.apellido}">${tecnico.nombre} ${tecnico.apellido}</option>`);
            });
        }
    });

    $('#phoneForm').on('submit', function (event) {
        event.preventDefault();

        const sucursal = $('#branch').val();
        const serialNumber = $('#serialNumber').val();
        const imei = $('#imei').val();
        const marca = $('#marca').val();
        const modelo = $('#modelo').val();
        const diagnostico = $('#diagnostico').val();
        const autorizacion = $('#autorizacion').val().toLowerCase() === 's';
        const abono = parseFloat($('#abono').val());
        const tecnico = $('#tecnico').val();

        if (newSystem.estaReportado(imei) || IMEIS_BANEADOS.includes(imei)) {
            alert('El teléfono está reportado o en la lista de IMEIs baneados y no puede acceder al servicio.');
            return;
        }

        const telefono = new Telefono(imei, serialNumber, marca, modelo);
        const cliente = new Cliente("Cliente");
        if (autorizacion) cliente.autorizarServicio();
        cliente.realizarAbono(abono);

        const ticket = new Ticket(telefono, diagnostico, autorizacion, abono, 'Por Revisar');

        const selectedSucursal = newSystem.sucursales.find(s => s.nombre === sucursal);
        if (selectedSucursal instanceof Sucursal) {
            selectedSucursal.addTicket(ticket);
        } else {
            alert('No se encontró la sucursal seleccionada.');
            return;
        }

        newSystem.guardarEnLocalStorage();

        const tableBody = $('#phoneTable tbody');
        const row = `<tr>
            <td>${sucursal}</td>
            <td>${serialNumber}</td>
            <td>${imei}</td>
            <td>${marca}</td>
            <td>${modelo}</td>
            <td>${diagnostico}</td>
            <td>${autorizacion ? 's' : 'n'}</td>
            <td>${abono}</td>
            <td class="estado">${ticket.estado}</td>
            <td>
                <button class="btn btn-info btn-sm action-button" onclick="cambiarEstado(this)">Cambiar Estado</button>
                <button class="btn btn-warning btn-sm action-button" onclick="verificarIMEI('${imei}')">Verificar IMEI</button>
            </td>
        </tr>`;
        tableBody.append(row);

        $('#phoneForm')[0].reset();
        $('#tecnico').empty();
        $('#tecnico').append('<option value="">Seleccione un técnico</option>');
    });

    $('#addSucursalButton').on('click', function () {
        $('#addSucursalModal').modal('show');
    });

    $('#addTecnicoButton').on('click', function () {
        $('#addTecnicoModal').modal('show');
        updateTecnicoSucursalSelect();
    });

    $('#addSucursalForm').on('submit', function (event) {
        event.preventDefault();
        const nombre = $('#sucursalNombre').val();
        const direccion = $('#sucursalDireccion').val();
        const contacto = $('#sucursalContacto').val();

        const nuevaSucursal = new Sucursal(nombre, direccion, contacto);

        newSystem.addSucursal(nuevaSucursal);

        updateSelect();

        $('#addSucursalModal').modal('hide');
        $('#addSucursalForm')[0].reset();
    });

    $('#addTecnicoForm').on('submit', function (event) {
        event.preventDefault();
        const sucursalNombre = $('#tecnicoSucursal').val();
        const nombre = $('#tecnicoNombre').val();
        const apellido = $('#tecnicoApellido').val();
        const dni = $('#tecnicoDNI').val();
        const celular = $('#tecnicoCelular').val();
        const email = $('#tecnicoEmail').val();
        const skills = $('#tecnicoSkills').val().split(',').map(skill => skill.trim());

        const selectedSucursal = newSystem.sucursales.find(s => s.nombre === sucursalNombre);
        if (selectedSucursal instanceof Sucursal) {
            const nuevoTecnico = new Tecnico(nombre, apellido, dni, celular, selectedSucursal.direccion, email, skills);
            selectedSucursal.agregarNuevoTecnico(nuevoTecnico);
        } else {
            alert('No se encontró la sucursal seleccionada.');
            return;
        }

        newSystem.guardarEnLocalStorage();

        $('#addTecnicoModal').modal('hide');
        $('#addTecnicoForm')[0].reset();
        updateSelect();
    });

    updateSelect();
});

function updateSelect() {
    const selectElement = document.querySelector("#branch");
    selectElement.innerHTML = '<option value="">Seleccione una sucursal</option>';

    newSystem.sucursales.forEach((sucursal) => {
        const optionElement = document.createElement("option");
        optionElement.value = sucursal.nombre;
        optionElement.textContent = sucursal.nombre;
        selectElement.appendChild(optionElement);
    });
}

function updateTecnicoSucursalSelect() {
    const selectElement = document.querySelector("#tecnicoSucursal");
    selectElement.innerHTML = '<option value="">Seleccione una sucursal</option>';

    newSystem.sucursales.forEach((sucursal) => {
        const optionElement = document.createElement("option");
        optionElement.value = sucursal.nombre;
        optionElement.textContent = sucursal.nombre;
        selectElement.appendChild(optionElement);
    });
}

function cambiarEstado(button) {
    const row = $(button).closest('tr');
    const estadoCell = row.find('.estado');
    let estadoActual = estadoCell.text();

    if (estadoActual === 'Por Revisar') {
        estadoActual = 'En Reparación';
    } else if (estadoActual === 'En Reparación') {
        estadoActual = 'Reparado';
    }

    estadoCell.text(estadoActual);
}

function verificarIMEI(imei) {
    const reportado = newSystem.estaReportado(imei);
    alert(`El IMEI ${imei} está ${reportado ? 'reportado' : 'no reportado'}.`);
}

function guardarEnLocalStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerDeLocalStorage(clave) {
    return JSON.parse(localStorage.getItem(clave));
}
