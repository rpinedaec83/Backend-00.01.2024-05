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
    this.id = `${nombre.trim()}`.replace(/ /g, "_");
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

  addAllSucursales(sucursales = []) {
    // this.sucursales.push(...sucursales);
    this.sucursales = sucursales.map(
      (sucursal) =>
        new Sucursal(sucursal.nombre, sucursal.direccion, sucursal.contacto)
    );
  }
  addTelefonoReportado(telefono) {
    this.telefonosReportados.push(telefono);
    localStorage.setItem(
      "telefonosReportados",
      JSON.stringify(this.telefonosReportados)
    );
  }

  addAllTelefonosReportados(telefonosReportados = []) {
    this.telefonosReportados = telefonosReportados.map(
      (telefono) =>
        new Telefono(
          telefono.imei,
          telefono.numeroSerie,
          telefono.marca,
          telefono.modelo
        )
    );
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
  // getSucursalById(id) {
  //   const suscural = this.sucursales.find((sucursal) => sucursal.id === id);

  //   if (!suscural) throw new Error("No existe la sucursal");

  //   const newSucursal = new Sucursal(
  //     suscural.nombre,
  //     suscural.direccion,
  //     suscural.contacto
  //   );

  //   return newSucursal;
  // }
  getSucursalById(id) {
    const suscural = this.sucursales.find((sucursal) => sucursal.id === id);

    if (!suscural) throw new Error("No existe la sucursal");
    return suscural;
  }
}

const newSystem = new System();

// const samsungS20 = new Telefono("123456789", "123456789", "Samsung", "S20");

// newSystem.addTelefonoReportado(samsungS10);

// console.log(newSystem);

// console.log("esta reportado", newSystem.estaReportado("123456789"));

// const newTicket = new Ticket(
//   samsungS20,
//   "Pantalla Rota",
//   true,
//   100,
//   "por revisar"
// );

// newTicket.cambiarEstado("reparando");
// // newSucursal.addTicket(newTicket);
// //paso 1 verificar si el telefono esta reportado

// /// diagosticar telefono

// console.log(newSystem.sucursales);

// //////////////////

const init = () => {
  const dataLocalStorage = JSON.parse(localStorage.getItem("sucursales"));

  const dataPhonesReported = JSON.parse(
    localStorage.getItem("telefonosReportados")
  );

  if (dataPhonesReported)
    newSystem.addAllTelefonosReportados(dataPhonesReported);

  if (dataLocalStorage) return newSystem.addAllSucursales(dataLocalStorage);

  let arrraySucursales = [];
  const newSucursal = new Sucursal(
    "Sucursal test",
    "Av. Siempre Viva 123",
    "123456"
  );
  arrraySucursales.push(newSucursal);
  const newSucursal2 = new Sucursal(
    "la mejor sucursal",
    "Av. Siempre Viva 123",
    "123456"
  );

  arrraySucursales.push(newSucursal2);
  const newSucursal3 = new Sucursal(
    "Sucursal 3",
    "Av. Salvador 123",
    "929496"
  );
  arrraySucursales.push(newSucursal3);

  let arrayTelefonosReportados = [];
  const samsungS10 = new Telefono("123456789", "123456789", "Samsung", "S10");
  arrayTelefonosReportados.push(samsungS10);

  // //permite guardar datos en local storage
  localStorage.setItem("sucursales", JSON.stringify(arrraySucursales));
  localStorage.setItem("telefonosReportados", JSON.stringify(arrayTelefonosReportados));
};

init();

console.log(newSystem);

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

const newTecnico = new Tecnico(
  "Juan",
  "Perez",
  "12345678",
  "917687563",
  "Calle san luis",
  "juan@gmail.com",
  ["Samsung", "Apple", "Huawei"]
);
const newTecnico2 = new Tecnico(
  "Alonso",
  "Sanchez",
  "22345566",
  "203456789",
  "Calle pachacutec",
  "alonso@gmail.com",
  ["Samsung"]
);

const newTecnico3 = new Tecnico(
  "Robin",
  "Kros",
  "83523525",
  "115445565",
  "Calle malvinas",
  "robin@gmail.com",
  ["Apple"]
);
const samsungS20 = new Telefono("123456789", "123456789", "Samsung", "S20");
const newTicket = new Ticket(
  samsungS20,
  "Pantalla Rota",
  true,
  100,
  "por revisar"
);

const existSucursal = newSystem.getSucursalById("Sucursal_test");
const existSucursal2 = newSystem.getSucursalById("la_mejor_sucursal");
const existSucursal3 = newSystem.getSucursalById("Sucursal_3");
//console.log(existSucursal);
existSucursal.agregarNuevoTecnico(newTecnico);
existSucursal2.agregarNuevoTecnico(newTecnico2);
existSucursal3.agregarNuevoTecnico(newTecnico3);

newTicket.cambiarEstado("reparando");
existSucursal.addTicket(newTicket);



console.log(newSystem);

///////

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
  sessionStorage.setItem('ESTADO', JSON.stringify(ticket));
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

const statusTelefono = () => {
  let status = sessionStorage.getItem('nuevoTicket');
  if (status) {
    let nuevoTicket = JSON.parse(status);
    let { telefono, diagnostico, autorizacion, abono, estado } = nuevoTicket;
    actualizarTabla(
      telefono.branch,
      telefono.numeroSerie,
      telefono.imei,
      telefono.marca,
      telefono.modelo,
      diagnostico,
      autorizacion,
      abono,
      estado
    );
  }
};
statusTelefono();