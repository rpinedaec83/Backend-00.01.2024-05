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
    this.nombre = nombre;
    this.direccion = direccion;
    this.contacto = contacto;
    this.tecnicos = [];
    this.tickets = [];
  }

  agregarTecnico(tecnico) {
    this.tecnicos.push(tecnico);
  }

  agregarTicket(ticket) {
    this.tickets.push(ticket);
  }
}

class Tecnico {
  constructor(nombre, apellido, dni, celular, email, skills = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.celular = celular;
    this.email = email;
    this.skills = skills;
  }
}

class Ticket {
  constructor(telefono, diagnostico, autorizacion, abono) {
    this.telefono = telefono;
    this.diagnostico = diagnostico;
    this.autorizacion = autorizacion;
    this.abono = abono;
    this.estado = "por revisar";
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
}

class Sistema {
  constructor() {
    this.sucursales = [];
    this.telefonosReportados = [];
    this.cargarDatos();
  }

  agregarSucursal(sucursal) {
    this.sucursales.push(sucursal);
    this.guardarDatos();
  }

  agregarTelefonoReportado(telefono) {
    this.telefonosReportados.push(telefono);
    this.guardarDatos();
  }

  estaReportado(imei) {
    return this.telefonosReportados.some(telefono => telefono.imei === imei);
  }

  guardarDatos() {
    localStorage.setItem('sucursales', JSON.stringify(this.sucursales));
    localStorage.setItem('telefonosReportados', JSON.stringify(this.telefonosReportados));
  }

  cargarDatos() {
    const sucursalesGuardadas = JSON.parse(localStorage.getItem('sucursales'));
    const telefonosReportadosGuardados = JSON.parse(localStorage.getItem('telefonosReportados'));
    
    if (sucursalesGuardadas) {
      this.sucursales = sucursalesGuardadas.map(suc => {
        const sucursal = new Sucursal(suc.nombre, suc.direccion, suc.contacto);
        suc.tecnicos.forEach(tecnico => {
          sucursal.agregarTecnico(new Tecnico(tecnico.nombre, tecnico.apellido, tecnico.dni, tecnico.celular, tecnico.email, tecnico.skills));
        });
        suc.tickets.forEach(ticket => {
          const telefono = new Telefono(ticket.telefono.imei, ticket.telefono.numeroSerie, ticket.telefono.marca, ticket.telefono.modelo);
          const ticketObj = new Ticket(telefono, ticket.diagnostico, ticket.autorizacion, ticket.abono);
          ticketObj.estado = ticket.estado; // conservar el estado del ticket
          sucursal.agregarTicket(ticketObj);
        });
        return sucursal;
      });
    }

    if (telefonosReportadosGuardados) {
      this.telefonosReportados = telefonosReportadosGuardados.map(tel => new Telefono(tel.imei, tel.numeroSerie, tel.marca, tel.modelo));
    }
  }
}

// Inicio Sistema
const sistema = new Sistema();

// Funciones para agregar elementos y actualizar la UI
function agregarSucursal(event) {
  event.preventDefault();
  const nombre = document.getElementById("sucursal-nombre").value;
  const direccion = document.getElementById("sucursal-direccion").value;
  const contacto = document.getElementById("sucursal-contacto").value;
  const nuevaSucursal = new Sucursal(nombre, direccion, contacto);
  sistema.agregarSucursal(nuevaSucursal);
  mostrarSucursales();
  document.getElementById("form-agregar-sucursal").reset();
  $('#agregarSucursalModal').modal('hide');
}

function agregarTecnico(event) {
  event.preventDefault();
  const sucursalNombre = document.getElementById("tecnico-sucursal").value;
  const nombre = document.getElementById("tecnico-nombre").value;
  const apellido = document.getElementById("tecnico-apellido").value;
  const dni = document.getElementById("tecnico-dni").value;
  const celular = document.getElementById("tecnico-celular").value;
  const email = document.getElementById("tecnico-email").value;
  const skills = document.getElementById("tecnico-skills").value.split(",").map(skill => skill.trim());

  const nuevoTecnico = new Tecnico(nombre, apellido, dni, celular, email, skills);
  const sucursal = sistema.sucursales.find(suc => suc.nombre === sucursalNombre);
  if (sucursal) {
    sucursal.agregarTecnico(nuevoTecnico);
  }
  mostrarTecnicos();
  document.getElementById("form-agregar-tecnico").reset();
  $('#agregarTecnicoModal').modal('hide');
  sistema.guardarDatos();
}

function agregarTicket(event) {
  event.preventDefault();
  const sucursalNombre = document.getElementById("ticket-sucursal").value;
  const imei = document.getElementById("ticket-imei").value;
  const numeroSerie = document.getElementById("ticket-serie").value;
  const marca = document.getElementById("ticket-marca").value;
  const modelo = document.getElementById("ticket-modelo").value;
  const diagnostico = document.getElementById("ticket-diagnostico").value;
  const autorizacion = document.getElementById("ticket-autorizacion").value === "true";
  const abono = parseFloat(document.getElementById("ticket-abono").value);

  if (sistema.estaReportado(imei)) {
    alert("El teléfono está reportado y no puede ser ingresado para reparación.");
    return;
  }

  const telefono = new Telefono(imei, numeroSerie, marca, modelo);
  const nuevoTicket = new Ticket(telefono, diagnostico, autorizacion, abono);
  const sucursal = sistema.sucursales.find(suc => suc.nombre === sucursalNombre);
  if (sucursal) {
    sucursal.agregarTicket(nuevoTicket);
  }
  mostrarTickets();
  document.getElementById("form-agregar-ticket").reset();
  $('#agregarTicketModal').modal('hide');
  sistema.guardarDatos(); 
}

function verificarIMEI() {
  const imei = document.getElementById("ticket-imei").value;

  // Verificar si el IMEI está reportado como robado
  if (sistema.estaReportado(imei)) {
    alert("El teléfono está reportado como robado.");
  } else {
    alert("El teléfono no está reportado como robado.");
  }
}

// Funciones para mostrar listas actualizadas
function mostrarSucursales() {
  const lista = document.getElementById("sucursales-list");
  lista.innerHTML = "";
  sistema.sucursales.forEach(sucursal => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${sucursal.nombre} - ${sucursal.direccion} (${sucursal.contacto})`;
    lista.appendChild(li);

    // Actualizar opciones de sucursales en los formularios
    actualizarOpcionesSucursales();
  });
}

function mostrarTecnicos() {
  const lista = document.getElementById("tecnicos-list");
  lista.innerHTML = "";
  sistema.sucursales.forEach(sucursal => {
    sucursal.tecnicos.forEach(tecnico => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${tecnico.nombre} ${tecnico.apellido} (DNI: ${tecnico.dni}) - Skills: ${tecnico.skills.join(", ")}`;
      lista.appendChild(li);
    });
  });
}

function mostrarTickets() {
  const lista = document.getElementById("tickets-list");
  lista.innerHTML = "";
  sistema.sucursales.forEach(sucursal => {
    sucursal.tickets.forEach(ticket => {
      const li = document.createElement("li");
      li.className = "list-group-item";

      // Contenido del ticket
      const contenido = document.createElement("div");
      contenido.innerHTML = `
        <span>Teléfono: ${ticket.telefono.marca} ${ticket.telefono.modelo}</span><br>
        <span>Diagnóstico: ${ticket.diagnostico}</span><br>
        <span>Estado: ${ticket.estado}</span><br>
      `;

      // Botón para cambiar estado
      const botonEstado = document.createElement("button");
      botonEstado.className = "btn btn-sm btn-outline-primary ml-2";
      botonEstado.textContent = "Cambiar Estado";
      botonEstado.addEventListener("click", () => cambiarEstadoTicket(ticket));

      // Agregar contenido y botón al elemento de la lista
      contenido.appendChild(botonEstado);
      li.appendChild(contenido);

      lista.appendChild(li);
    });
  });
}

function cambiarEstadoTicket(ticket) {
  const nuevoEstado = "terminado"; // Estado predeterminado al cambiar
  ticket.cambiarEstado(nuevoEstado);
  mostrarTickets(); // Actualizar la lista después del cambio
  sistema.guardarDatos(); 
}

function actualizarOpcionesSucursales() {
  const sucursales = sistema.sucursales.map(suc => suc.nombre);
  const selectTecnicoSucursal = document.getElementById("tecnico-sucursal");
  const selectTicketSucursal = document.getElementById("ticket-sucursal");

  selectTecnicoSucursal.innerHTML = "";
  selectTicketSucursal.innerHTML = "";

  sucursales.forEach(nombre => {
    const option1 = document.createElement("option");
    option1.value = nombre;
    option1.textContent = nombre;
    selectTecnicoSucursal.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = nombre;
    option2.textContent = nombre;
    selectTicketSucursal.appendChild(option2);
  });
}

// Event listeners para formularios
document.getElementById("form-agregar-sucursal").addEventListener("submit", agregarSucursal);
document.getElementById("form-agregar-tecnico").addEventListener("submit", agregarTecnico);
document.getElementById("form-agregar-ticket").addEventListener("submit", agregarTicket);

// Inicializar con algunos datos de ejemplo
const inicializarSistema = () => {
  const sucursalEjemplo = new Sucursal("Sucursal Central", "Av. Principal 123", "contacto@central.com");
  sistema.agregarSucursal(sucursalEjemplo);

  const tecnicoEjemplo = new Tecnico("Juan", "Perez", "12345678", "912345678", "juan@correo.com", ["Samsung", "Apple"]);
  sucursalEjemplo.agregarTecnico(tecnicoEjemplo);

  const telefonoEjemplo = new Telefono("987654321", "87654321", "Samsung", "Galaxy S10");
  sistema.agregarTelefonoReportado(telefonoEjemplo);

  const imeiBloqueado1 = new Telefono("123", "12345678", "Marca1", "Modelo1");
  const imeiBloqueado2 = new Telefono("132", "23456789", "Marca2", "Modelo2");
  sistema.agregarTelefonoReportado(imeiBloqueado1);
  sistema.agregarTelefonoReportado(imeiBloqueado2);

  mostrarSucursales();
  mostrarTecnicos();
}

inicializarSistema();
