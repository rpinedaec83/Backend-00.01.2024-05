class Telefono {
    constructor(numeroDeSerie, IMEI){
        this.numeroDeSerie = numeroDeSerie;
        this.IMEI = IMEI;
        this.estado = 'Nuevo';
    }

    verificarIMEI(){

        return true;
    }
}

class Revision {
    constructor(diagnostico, fecha){
        this.diagnostico = diagnostico;
        this.fecha = fecha;
    }
    realizarDiagnostico(diagnostico){
        this.diagnostico = diagnostico;
        this.fecha = new Date();
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

    realizarAbono(monto){
        this.abono = monto;
    }
}

class Tecnico {
    constructor(nombre){
        this.nombre = nombre;
        this.skills = [];
    }
    asignarSkill(skill){
        this.skills.push(skill);
    }
}
class Skill {
    constructor(nombre){
        this.nombre = nombre
    }

    describirSkill(){
        return `Skill: ${this.nombre}`;
    }
}

class Repuesto {
    constructor(nombre,modelo,cantidad){
        this.nombre = nombre;
        this.modelo = modelo;
        this.cantidad = cantidad;
    }

    agregarRespuesto(cantidad){
        this.cantidad += cantidad;
    }
}

class EstacionDeTrabajo {
    constructor(nombre, ubicacion){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.estado = 'Disponible';
    }

    actualizarEstado(estado){
        this.estado = estado;
    }
}

class Servicio {
    constructor(fechaInicio, telefono, cliente, tecnico, estacionDeTrabajo){
        this.fechaInicio = fechaInicio;
        this.fechaFin = null;
        this.telefono = telefono;
        this.cliente = cliente;
        this.tecnico = tecnico;
        this.estacionDeTrabajo = estacionDeTrabajo;
        this.repuestos = [];
    }

    iniciarServicio(){
        if(this.cliente.autorizacion && this.cliente.abono >= 50){
            this.telefono.estado = 'En Reparacion';
            this.estacionDeTrabajo.actualizarEstado('Ocupado');
            return 'Servicio iniciado';
        } else {
            return 'No se puede iniciar el servicio. Falta autorización o abono del 50%';
        }
    }

    finalizarServicio(){
        this.fechaFin = new Date();
        this.telefono.estado = 'Reparado';
        this.estacionDeTrabajo.actualizarEstado('Disponible');
        return 'Servicio finalizado';
    }

    agregarRepuestos(repuesto){
        this.repuestos.push(repuesto);
    }
}

$(document).ready(function(){
    $('#iniciarServicio').click(function(){
        const numeroDeSerie = $('#numeroDeSerie').val();
        const IMEI = $('#IMEI').val();
        const nombreCliente = $('nombreCliente').val();
        const abono = parseFloat($('#abono').val());
        const nombreTecnico = $('#nombreTecnico').val();

        let telefono = new Telefono(numeroDeSerie, IMEI);
        let cliente = new Cliente(nombreCliente);
        let tecnico = new Tecnico(nombreTecnico);
        let estacion = new EstacionDeTrabajo(nombreEstacion, 'Taller1');

        cliente.realizarAbono(abono);
        cliente.autorizarServicio();

        let servicio = new Servicio(new Date(), telefono, cliente, tecnico, estacion);
        let resultado = servicio.iniciarServicio(); 

        //$('#result').text(resultado);

        if (resultado === 'Servicio iniciado'){
            Swal.fire({
                title: 'Servicio iniciado',
                text: 'El servicio ha comenzado. Por favor, espera ...',
                icon: 'success',
                timer: 3000,
                timerProgressBar:true,
                didOpen:() => {
                    Swal.showLoading();
                }
            }).then(()=> {
                let finalizacion = servicio.finalizarServicio();
                Swal.fire({
                    title: 'Servicio completado',
                    text: finalizacion,
                    icon: 'success'
                });
            })

        } else {
            Swal.fire({
                title: 'Error',
                text: resultado,
                icon: 'error'
            });
        }
    });
});



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
   
  