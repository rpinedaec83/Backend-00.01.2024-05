class Telefono {
    constructor(imei, numeroSerie, marca, modelo) {
        this.imei = imei;
        this.numeroSerie = numeroSerie;
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Sucursal {
    constructor(nombre, direccion, contacto = "") {
        this.id = `${nombre.trim()}_${Math.floor(Math.random() * 1000)}`.replace(/ /g, "_");
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
        this.tecnicos = [];
        this.tickets = [];
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

    existeTelefono(imei, numeroSerie) {
        return this.tickets.some((ticket) => ticket.telefono.imei === imei || ticket.telefono.numeroSerie === numeroSerie);
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

    estaReportado(imei, numeroSerie) {
        return this.telefonosReportados.some((telefono) => telefono.imei === imei || telefono.numeroSerie === numeroSerie);
    }

    estaRegistrado(imei, numeroSerie) {
        return this.sucursales.some((sucursal) => sucursal.existeTelefono(imei, numeroSerie));
    }
}


const newTecnico = new Tecnico("Juan", "Perez", "12345678", "917687563", "juan@gmail.com", ["Samsung", "Apple", "Huawei"]);
const newTecnico2 = new Tecnico("Ignacio", "Arregui", "2343432", "9176834463", "ignacio@gmail.com", ["Honor", "Xiomi", "Motorola"]);
const newTecnico3 = new Tecnico("Raul", "Flores", "2343345", "9176823463", "raul@gmail.com", ["Poco", "Redmi", "Alcatel"]);

newSucursal.agregarNuevoTecnico(newTecnico);
newSucursal2.agregarNuevoTecnico(newTecnico2);
newSucursal2.agregarNuevoTecnico(newTecnico3);

const updateSelect = () => {
    const selectElement = document.querySelector("#branch");
    selectElement.innerHTML = "";

    newSystem.sucursales.forEach((sucursal) => {
        const optionElement = document.createElement("option");
        optionElement.value = sucursal.nombre;
        optionElement.textContent = sucursal.nombre;
        selectElement.appendChild(optionElement);
    });
}


const telefono = new Telefono(imei, serialNumber, marca, modelo);
const ticket = new Ticket(telefono, diagnostico, autorizacion, abono);


updateSelect();


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('phoneForm');
    const tableBody = document.querySelector('#phoneTable tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const branch = document.getElementById('branch').value;
        const serialNumber = document.getElementById('serialNumber').value;
        const imei = document.getElementById('imei').value;
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const diagnostico = document.getElementById('diagnostico').value;
        const autorizacion = document.getElementById('autorizacion').value;
        const abono = document.getElementById('abono').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${generateID()}</td>
            <td>${branch}</td>
            <td>${serialNumber}</td>
            <td>${imei}</td>
            <td>${marca}</td>
            <td>${modelo}</td>
            <td>${diagnostico}</td>
            <td>${autorizacion}</td>
            <td>${abono}</td>
            <td>${ticket.estado}</td>
            <td><button class="assignTechButton">Asignar Técnico</button></td>
            <td><button class="assignPartsButton">Asignar Repuestos</button></td>
            <td><button class="changeStatusButton">Cambiar Estado</button></td>
        `;
        tableBody.appendChild(newRow);

        form.reset();
    });

     function generateID() {
        return Math.floor(Math.random() * 1000) + 1;
    }

     tableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('assignTechButton')) {
            const row = event.target.closest('tr');
            const id = row.querySelector('td:first-child').textContent;
            
             const branchName = row.querySelector('td:nth-child(2)').textContent.trim();

            const sucursal = newSystem.sucursales.find(sucursal => sucursal.nombre === branchName);

            if (!sucursal) {
                console.error(`No se encontró la sucursal ${branchName} en el sistema.`);
                return;
            }

            const tecnicosSucursal = sucursal.tecnicos.map(tecnico => `${tecnico.nombre} ${tecnico.apellido}`);

            const technician = prompt(`Ingrese el nombre del técnico de ${branchName}: \n\n${tecnicosSucursal.join("\n")}`);

            if (technician && tecnicosSucursal.includes(technician)) {
                row.querySelector('td:nth-child(11)').textContent = technician;
            } else {
                alert(`El técnico ${technician} no está registrado en la sucursal ${branchName}.`);
            }
        }
    });

    tableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('assignPartsButton')) {
            const row = event.target.closest('tr');
            const id = row.querySelector('td:first-child').textContent;
            const partsList = prompt('Ingrese los repuestos utilizados (separados por coma):');
            if (partsList) {
                row.querySelector('td:nth-child(12)').textContent = partsList;
            }
        }
    });

    tableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('changeStatusButton')) {
            const row = event.target.closest('tr');
            const assignedTechnician = row.querySelector('td:nth-child(11)').textContent.trim();
            const assignedParts = row.querySelector('td:nth-child(12)').textContent.trim();
    
            if (!assignedTechnician || !assignedParts) {
                alert('Debe asignar primero un técnico y repuestos antes de cambiar el estado.');
                return;
            }
    
            const currentState = row.querySelector('td:nth-child(10)').textContent;
            const allowedStates = ["revisado", "terminado"];
            const newState = prompt(`Estado actual: ${currentState}\nNuevo estado (revisado/terminado):`);
    
            if (newState && allowedStates.includes(newState.toLowerCase())) {
                row.querySelector('td:nth-child(10)').textContent = newState.toLowerCase();
                if (newState.toLowerCase() === 'terminado') {
                    event.target.disabled = true;
                }
            } else {
                alert(`El estado ${newState} no es válido. Solo se permiten los estados: ${allowedStates.join(', ')}.`);
            }
        }
    });
    
});





function asignarTecnico(ticket, marca) {
    const sucursal = newSystem.sucursales.find(s => s.tickets.includes(ticket));
    const tecnicoDisponible = sucursal.tecnicos.find(tecnico => tecnico.skills.includes(marca));

    if (tecnicoDisponible) {
        console.log(`Técnico asignado: ${tecnicoDisponible.nombre} ${tecnicoDisponible.apellido}`);
    } else {
        console.log("No hay técnico disponible con las habilidades necesarias.");
    }
}
