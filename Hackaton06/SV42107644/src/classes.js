// Clases
class Sucursal {
    tecnicos = [];
    clientes = [];
    tickets = [];

    constructor(idSucursal, nombre, direccion, contacto) {
        this.idSucursal = idSucursal;
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
        this.fechaRegistro = getDate();
    }

    setTecnicos(tecnicos){
        this.tecnicos = tecnicos;
    }
    setClientes(clientes){
        this.clientes = clientes;
    }
    setTickets(tickets){
        this.tickets = tickets;
    }
}

class Usuario {
    constructor(idUsuario, username, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, numDocumento,
        distrito, direccion, correo) {
        this.idUsuario = idUsuario;
        this.username = username;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.tipoDocumento = tipoDocumento;
        this.numDocumento = numDocumento;
        this.distrito = distrito;
        this.direccion = direccion;
        this.correo = correo;
        this.fechaRegistro = getDate();
        this.estado = 'A'; //Activo
    }

    cambiarPassword(nuevoPassword) {
        this.password = nuevoPassword;
    }
}


class Tecnico extends Usuario {
    skills = [];
    constructor(idUsuario, username, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, numDocumento,
        distrito, direccion, correo, salario) {
        super(idUsuario, username, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, numDocumento,
            distrito, direccion, correo);
        this.salario = salario;
    }

    agregarSkill(skill) {
        this.skills.push(skill);
    }
}

class Skill {
    constructor(idSkill, marca, descripcion) {
        this.idSkill = idSkill;
        this.marca = marca;
        this.descripcion = descripcion;
    }
}

class Celular {
    constructor(idCelular, numero, marca, modelo, IMEI, numSerie) {
        this.idCelular = idCelular;
        this.numero = numero;
        this.marca = marca;
        this.modelo = modelo;
        this.IMEI = IMEI;
        this.numSerie = numSerie;
        this.fechaRegistro = getDate();
        this.bloqueado = false;
    }

    validarBloqueo() {
        this.bloqueado = !!(Math.random() * 2 | 0);
    }
} 

class Ticket {
    revision;
    mantenimiento;
    motivoCierre;

    constructor(idTicket, estado, usuarioRegistro, celular, cliente, cometariosCliente) {
        this.idTicket = idTicket;
        this.estado = estado;
        this.fechaRegistro = getDate();
        this.usuarioRegistro = usuarioRegistro;
        this.celular = celular;
        this.cliente = cliente;
        this.cometariosCliente = cometariosCliente;
        this.autorizado = false;
        this.cotizacion = new Cotizacion(0, 0, 0, 0);
        this.pagoAdelantado = 0;
        this.pagoPendiente = 0;
        this.totalPago = 0;
        this.tipoPago = '';
     }

    agregarRevision(revision) {
        this.revision = revision;
    }
    agregarMantenimiento(mantenimiento) {
        this.mantenimiento = mantenimiento;
    }
    agregarTipoPago(tipoPago) {
        this.tipoPago = tipoPago;
    }

    actualizaCotizacion(cotizacion) {
        this.cotizacion = cotizacion;
    }
    autorizarMantenimiento() {
        this.autorizado = true;
    }
}

class HistorialTicket {
    constructor(idTicket, estado, fechaModificacion, usuarioModificacion) {
        this.idTicket = idTicket;
        this.estado = estado;
        this.fechaModificacion = fechaModificacion;
        this.usuarioModificacion = usuarioModificacion;
    }
}

class Mantenimiento {
    constructor(idMantenimiento, tecnico) {
        this.idMantenimiento = idMantenimiento;
        this.tecnico = tecnico;
        this.tipoMantenimiento = '';
        this.observaciones = '';
    }
}

class Revision {
    constructor(idRevision, tecnico) {
        this.idRevision = idRevision;
        this.tecnico = tecnico;
        this.tipoDiagnostico = '';
        this.comentarios = '';
    }
}

class Cotizacion {
    constructor(idCotizacion, precio, igv, total) {
        this.idCotizacion = idCotizacion;
        this.precio = precio;
        this.igv = igv;
        this.total = total;
        this.detallesCotizacion = []; // Inicializamos como un arreglo vacío para almacenar los detalles
    }

    // Método para agregar un detalle a la cotización
    agregarDetalle(detalle) {
        this.detallesCotizacion.push(detalle);
    }
}

class DetalleCotizacion {
    constructor(idDetalle, precio, descripcion, tipo) {
        this.idDetalle = idDetalle;
        this.precio = precio;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.igv = (precio * 0.18).toFixed(2);
        this.total = (parseFloat(precio) + parseFloat(this.igv)).toFixed(2);
    }
}

class Repuesto {
    constructor(id_repuesto, idMarca, modelo, tipo, descripcion, precio) {
        this.id_repuesto = id_repuesto;
        this.idMarca = idMarca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Servicio {
    constructor(id_servicio, descripcion, precio) {
        this.id_servicio = id_servicio;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}


function getDate(){
    to_day = new Date();
    day = to_day.getDate();
    month = to_day.getMonth()+1;
    year =  to_day.getFullYear();
    return String(day+'/'+month+'/'+year);
}