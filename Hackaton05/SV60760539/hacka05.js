class Telefono {
    constructor(imei, numeroSerie, marca, modelo) {
        this.imei = imei;
        this.numeroSerie = numeroSerie;
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Sucursal {
    id = "";
    tecnicos = [];
    nombre = "";
    clientes = [];
    tickets = [];
    contacto = "";
    constructor(nombre, direccion, contacto = "") {
        this.id = `${nombre.trim()}_${Math.floor(Math.random() * 1000)}`.replace(/ /g, "_");
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

class Ticket {
    constructor(telefono, diagnostico, autorizacion, abono, estado = "por revisar") {
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.autorizacion = autorizacion;
        this.abono = abono;
        this.estado = estado;
    }
    cambiarEstado(estado) {
        this.estado = estado;
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
    sucursales = [];
    telefonosReportados = [];
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
        const result = false;

        for (let i = 0; i < this.telefonosReportados.length; i++) {
            if (this.telefonosReportados[i].imei === imei) {
                return true;
            }
        }
        return result;
    }
    get sucursales() {
        return this.sucursales;
    }
}

const newSystem = new System();
const newSucursal = new Sucursal("SolucionesTec Sucursal N°1", "Av. Siempre Viva 123", "123456");
const newSucursal2 = new Sucursal("SolucionesTec Sucursal N°2", "Av. Siempre Viva 123", "123456");
const newSucursal3 = new Sucursal("SolucionesTec Sucursal N°3", "Av. Siempre Viva 123", "123456");
newSystem.addSucursal(newSucursal);
newSystem.addSucursal(newSucursal2);
newSystem.addSucursal(newSucursal3);

const newTecnico = new Tecnico("Juan", "Perez", "12345678", "917687563", "juan@gmail.com", ["Samsung", "Apple", "Huawei"]);
newSucursal.agregarNuevoTecnico(newTecnico);

const samsungS10 = new Telefono("123456789", "123456789", "Samsung", "S10");
const samsungS20 = new Telefono("123456789", "123456789", "Samsung", "S20");
newSystem.addTelefonoReportado(samsungS10);

const newTicket = new Ticket(samsungS20, "Pantalla Rota", true, 100, "por revisar");
newTicket.cambiarEstado("reparando");
newSucursal.addTicket(newTicket);

const updateSelect = () => {
    const selectElement = document.querySelector("#branch");
    selectElement.innerHTML = "";

    newSystem.sucursales.forEach((sucursal, index) => {
        const optionElement = document.createElement("option");
        optionElement.value = sucursal.nombre;
        optionElement.textContent = sucursal.nombre;
        selectElement.appendChild(optionElement);
    });
};

updateSelect();

function mostrarAlerta() {
    alert("El teléfono está en proceso de reparación");
}

//////aaaaaa