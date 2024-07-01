/**El telefono ingresado debe tener numero de serie e IMEI que no esten reportados para acceder al servicio
Un telefono primero debe pasar por una primera revision y se debe guardar el primer diagnostico
Se debe tener la autorizacion escrita del usuario y el abono del 50% de la reparacion para que acceda al servicio
Los tecnicos pueden tener uno o varios skills que se adecuen a la marca de telefono que se necesita acceder al servicio
Los repuestos se agregaran a la reparacion de telefono
Se debe mostrar el estado del equipo en sus diferentes estaciones de trabajo */
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
    this.id = `${nombre.trim()}_${Math.floor(Math.random() * 1000)}`.replace(
      / /g,
      "_"
    );
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
  constructor(
    telefono,
    diagnostico,
    autorizacion,
    abono,
    estado = "por revisar"
  ) {
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
    // const telefonoReportado = this.telefonosReportados.find(
    //   (phone) => phone.imei === imei
    // );

    // return telefonoReportado ? true : false;
    return result;
  }
  get sucursales() {
    return this.sucursales;
  }
}

const newSystem = new System();
const newSucursal = new Sucursal(
  "Sucursal 1",
  "Av. San Juan 123",
  "123456"
);
const newSucursal2 = new Sucursal(
  "Sucursal 2",
  "Av. Villa 123",
  "103050"
);
const newSucursal3 = new Sucursal(
  "Sucursal 3",
  "Av. Salvador 123",
  "929496"
);

newSystem.addSucursal(newSucursal);
newSystem.addSucursal(newSucursal2);
newSystem.addSucursal(newSucursal3);

const newTecnico = new Tecnico(
  "Juan",
  "Perez",
  "12345678",
  "917687563",
  "juan@gmail.com",
  ["Samsung", "Apple", "Huawei"]
);

const newTecnico2 = new Tecnico(
  "Alonso",
  "Sanchez",
  "22345566",
  "203456789",
  "alonso@gmail.com",
  ["Samsung"]
);

newSucursal.agregarNuevoTecnico(newTecnico);
newSucursal.agregarNuevoTecnico(newTecnico2);

const samsungS10 = new Telefono("123456789", "123456789", "Samsung", "S10");
const samsungS20 = new Telefono("123456789", "123456789", "Samsung", "S20");
const huaweiy7 = new Telefono("234567890", "123456789", "Huawei", "y7");

newSystem.addTelefonoReportado(samsungS10);
newSystem.addTelefonoReportado(huaweiy7);

console.log(newSystem);

console.log("esta reportado", newSystem.estaReportado("123456789"));

const newTicket = new Ticket(
  samsungS20,
  "Pantalla Rota",
  true,
  100,
  "por revisar"
);

newTicket.cambiarEstado("reparando");
newSucursal.addTicket(newTicket);
//paso 1 verificar si el telefono esta reportado

/// diagosticar telefono

console.log(newSystem.sucursales);

//////////////////

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

///////////////////

function Formulario(event) {
  event.preventDefault(); 
  let branch = document.getElementById('branch').value;
  let serialNumber = document.getElementById('serialNumber').value;
  let imei = document.getElementById('imei').value;
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let diagnostico ="";
  let autorizacion ="";
  let abono ="";
  let estado ="";
  console.log(newSystem.estaReportado(imei));
  if (newSystem.estaReportado(imei)) {
    diagnostico = "EQUIPO REPORTADO";
    autorizacion = "EQUIPO REPORTADO";
    abono = "EQUIPO REPORTADO";
    estado = "EQUIPO REPORTADO";
  }else{
    diagnostico = document.getElementById('diagnostico').value;
    autorizacion = document.getElementById('autorizacion').value;
    abono = parseInt(document.getElementById('abono').value);
    if(abono>=50 && autorizacion == "si"){
      estado = "Reparado";
    } else if(abono>=50 && autorizacion != "si"){
      estado = "Falta autorizacion";
    } else if(abono<50 && autorizacion == "si"){
      estado = "Falta Bono supere el 50%";
    }else{
     estado = "Por revisar";
      }
    }
  let telefono = new Telefono(imei, serialNumber, marca, modelo);
  let ticket = new Ticket(telefono, diagnostico, autorizacion, abono);
  let sucursal = newSystem.sucursales.find(s => s.nombre === branch);
  sucursal.addTicket(ticket);
  actualizarTabla(branch,serialNumber,imei,marca,modelo,diagnostico,autorizacion,abono,estado);
  document.getElementById('phoneForm').reset();
}

function actualizarTabla(branch,serialNumber,imei,marca,modelo,diagnostico,autorizacion,abono,estado) {
  const Tabla = document.querySelector('#phoneTable tbody');
  let nuevaFila = Tabla.insertRow();
  nuevaFila.innerHTML = `
      <td>${branch}</td>
      <td>${serialNumber}</td>
      <td>${imei}</td>
      <td>${marca}</td>
      <td>${modelo}</td>
      <td>${diagnostico}</td>
      <td>${autorizacion}</td>
      <td>${abono}</td>
      <td>${estado}</td>
  `;
}