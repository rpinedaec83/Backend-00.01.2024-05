class Telefono {
    constructor(numeroDeSerie, IMEI, marca, modelo) {
        this.numeroDeSerie = numeroDeSerie;
        this.IMEI = IMEI;
        this.estado = 'Por Revisar';
        this.marca = marca;
        this.modelo = modelo;
    }

    actualizarEstado(estado) {
        this.estado = estado;
    }
}

class Sucursal {
    tecnicos = [];
    clientes = [];
    tickets = [];
    contacto = "";

    constructor(nombre, direccion, contacto = "") {
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
    }

    agregarNuevoTecnico(newTecnico) {
        this.tecnicos.push(newTecnico);
    }

    addTicket(ticket) {
        this.tickets.push(ticket);
    }

    eliminarTecnico(dni) {
        this.tecnicos = this.tecnicos.filter((tecnico) => tecnico.dni !== dni);
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
    constructor(telefono, diagnostico, abono, estado, sucursal, cliente) {
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.abono = abono;
        this.estado = estado;
        this.sucursal = sucursal;
        this.cliente = cliente;
        this.repuestos = [];
    }

    cambiarEstado(estado) {
        this.estado = estado;
        this.telefono.actualizarEstado(estado);
    }
    
 
    iniciarServicio() {
        if (this.cliente.autorizacion && this.cliente.abono >= 50) {
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
        this.sucursales = [];
        this.telefonosReportados = [];
    }

    addSucursal(sucursal) {
        this.sucursales.push(sucursal);
    }

    addTelefonoReportado(telefono) {
        this.telefonosReportados.push(telefono);
    }

    estaReportado(imei) {
        return this.telefonosReportados.some(Telefono => Telefono.IMEI === imei);
    }
}

class Repuesto {
    constructor(nombre, modelo, cantidad) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.cantidad = cantidad;
    }

    agregarRepuesto(cantidad) {
        this.cantidad += cantidad;
    }
}

const newSystem = new System();

const newSucursal1 = new Sucursal("Sucursal 1", "Av. Brasil 123", "945242445");
const newSucursal2 = new Sucursal("Sucursal 2", "Av. Perú 456", "954313131");

const tecnico1 = new Tecnico("Juan", "Perez", "12345678", "917687563", "Av. Siempre Viva", "juan.perez@gmail.com", ["Samsung", "Apple"]);
const tecnico2 = new Tecnico("Ana", "Gomez", "87654321", "917687564", "Av. Los Olivos", "ana.gomez@gmail.com", ["Huawei", "Xiaomi"]);
const tecnico3 = new Tecnico("Luis", "Martinez", "12348765", "917687565", "Av. La Marina", "luis.martinez@gmail.com", ["LG", "Sony"]);
const tecnico4 = new Tecnico("Maria", "Rodriguez", "87651234", "917687566", "Av. La Paz", "maria.rodriguez@gmail.com", ["Nokia", "Motorola"]);

newSucursal1.agregarNuevoTecnico(tecnico1);
newSucursal1.agregarNuevoTecnico(tecnico2);
newSucursal2.agregarNuevoTecnico(tecnico3);
newSucursal2.agregarNuevoTecnico(tecnico4);

newSystem.addSucursal(newSucursal1);
newSystem.addSucursal(newSucursal2);

$(document).ready(function () {
    $('#branch').on('change', function () {
        const selectedBranch = $(this).val();
        const selectedSucursal = newSystem.sucursales.find(s => s.nombre === selectedBranch);
        
        $('#tecnico').empty();
        $('#tecnico').append('<option value="">Seleccione un técnico</option>');
        
        if (selectedSucursal) {
            selectedSucursal.tecnicos.forEach(tecnico => {
                $('#tecnico').append(`<option value="${tecnico.nombre}">${tecnico.nombre}</option>`);
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

        const telefono = new Telefono(serialNumber, imei, marca, modelo);
        const cliente = new Cliente("Cliente");
        if (autorizacion) cliente.autorizarServicio();
        cliente.realizarAbono(abono);

        const ticket = new Ticket(telefono, diagnostico, abono, 'Por Revisar', sucursal, cliente);

        const selectedSucursal = newSystem.sucursales.find(s => s.nombre === sucursal);
        if (selectedSucursal) {
            selectedSucursal.addTicket(ticket);
        }

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
                <button class="action-button" onclick="cambiarEstado(this)">Cambiar Estado</button>
                <button class="action-button" onclick="verificarIMEI('${imei}')">Verificar IMEI</button>
            </td>
        </tr>`;
        tableBody.append(row);

        $('#phoneForm')[0].reset();
        $('#tecnico').empty();
        $('#tecnico').append('<option value="">Seleccione un técnico</option>');
    });
});

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
