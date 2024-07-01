const cotizaciones = [];
var usuarioEncontrado;

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
}

class Usuario {
    constructor(idUsuario, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, numDocumento,
                distrito, direccion, correo) {
        this.idUsuario = idUsuario;
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

    cambiarPassword(nuevoPassword){
        this.password = nuevoPassword;
    }
}


class Tecnico extends Usuario {
    skills = []; 
    constructor(idUsuario, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, numDocumento,
        distrito, direccion, correo,salario) {
        super(idUsuario, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, numDocumento,
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
    constructor(idCelular, numero ,marca, modelo, IMEI, numSerie) {
        this.idCelular = idCelular;
        this.numero = numero;
        this.marca = marca;
        this.modelo = modelo;
        this.IMEI = IMEI;
        this.numSerie = numSerie;
        this.fechaRegistro = getDate();
        this.bloqueado=false;
    }

    validarBloqueo(){
        this.bloqueado = !!(Math.random() * 2 | 0);
    }
}

class Ticket {
    revision;
    mantenimiento;
    tipoPago;

    constructor(idTicket, estado, usuarioRegistro, celular, cliente, cometariosCliente) {
        this.idTicket = idTicket;
        this.estado = estado;
        this.fechaRegistro = getDate();
        this.usuarioRegistro = usuarioRegistro;
        this.celular = celular;
        this.cliente = cliente;
        this.cometariosCliente = cometariosCliente;
        this.autorizado = false;
        this.cotizacion = new Cotizacion(cotizaciones.length,0,0,0);
        this.pagoAdelantado = 0;
        this.pagoPendiente = 0;
        this.totalPago = 0;
    }

    agregarRevision(revision){
        this.revision = revision;
    }
    agregarMantenimiento(mantenimiento){
        this.mantenimiento = mantenimiento;
    }
    agregarTipoPago(tipoPago){
        this.tipoPago = tipoPago;
    }

    actualizaCotizacion(cotizacion){
        this.cotizacion=cotizacion;
    }
    autorizarMantenimiento(){
        this.autorizado=true;
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
    tipoMantenimiento = '';
    observaciones = '';

    constructor(idMantenimiento, tecnico) {
        this.idMantenimiento = idMantenimiento;
        this.tecnico = tecnico;
    }
}

class Revision {
    tipoDiagnostico = '';
    comentarios = '';

    constructor(idRevision,tecnico) {
        this.idRevision = idRevision;
        this.tecnico = tecnico;
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

class Marca {
    constructor(idMarca, nombre) {
        this.idMarca = idMarca;
        this.nombre = nombre;
    }
}

// Datos simulados
const contacto = new Usuario(0, 'Silvana', 'Moreno', 'Perez', 'DNI', '09987546',
    'San Isidro', 'Ca. Tradiciones 220', 'smoreno@email.com');

contacto.cambiarPassword('1234');

const sucursales = [
    new Sucursal(1, 'Sucursal 1', 'Jr. La Arboleda 892, Surco', contacto),
    new Sucursal(2, 'Sucursal 2', 'Av. Javier Prado 342, San Isidro', contacto),
    new Sucursal(3, 'Sucursal 3', 'Av. La Mar 389, San Miguel',contacto)
];

const marcas = [
    new Marca(1, 'Apple'),
    new Marca(2, 'Samsung'),
    new Marca(3, 'Xiaomi')
];

const tipoDocumentos = ['DNI','Pasaporte','RUC','Carnet de Extranjería'];


const usuariosSimulados = [
    contacto,
    new Usuario(1, 'Tyrion', 'Lannister', '', 'DNI', '12345678', 'Lima', 'Av. Principal 123', 'tlannister@email.com'),
    new Usuario(2, 'Jon', 'Snow', '', 'DNI', '23456789', 'Lima', 'Av. Principal 234', 'jsnow@email.com'),
    new Usuario(3, 'Arya', 'Stark', '', 'DNI', '34567890', 'Lima', 'Av. Principal 345', 'astark@email.com'),
    new Usuario(4, 'Daenerys', 'Targaryen', '', 'DNI', '45678901', 'Lima', 'Av. Principal 456', 'dtargaryen@email.com'),
 ];

const clientesSimulados = [
    new Usuario(5, 'Rhaenyra', 'Targaryen', '', 'DNI', '87654321', 'Lima', 'Av. Javier Prado 123', 'rtargaryen@email.com'),
    new Usuario(6, 'Aemond', 'Targaryen', '', 'DNI', '76543218', 'Lima', 'Av. Javier Prado 234', 'atargaryen@email.com'),
    new Usuario(7, 'Helaena ', 'Targaryen', '', 'DNI', '65432187', 'Lima', 'Av. Javier Prado 345', 'htargaryen@email.com'),
    new Usuario(8, 'Daemon', 'Targaryen', '', 'DNI', '54321876', 'Lima', 'Av. Javier Prado 456', 'datargaryen@email.com'),
    new Usuario(9, 'Aegon', 'Targaryen', '', 'DNI', '43218765', 'Lima', 'Av. Javier Prado 567', 'aedtargaryen@email.com'),
    new Usuario(10, 'Viserys', 'Targaryen', '', 'DNI', '32187654', 'Lima', 'Av. Javier Prado 678', 'vtargaryen@email.com'),
    new Usuario(11, 'Jaehaera', 'Targaryen', '', 'DNI', '21876543', 'Lima', 'Av. Javier Prado 789', 'jtargaryen@email.com'),
    new Usuario(12, 'Jaehaerys', 'Targaryen', '', 'DNI', '18765432', 'Lima', 'Av. Javier Prado 890', 'jatargaryen@email.com'),
    new Usuario(13, 'Maelor', 'Targaryen', '', 'DNI', '87654320', 'Lima', 'Av. Javier Prado 901', 'mtargaryen@email.com')
 ];



 const tecnicosSimulados = [
    new Tecnico(14, 'Otto', 'Hightower', '', 'DNI', '14725836', 'Lima', 'Av. La Mar 741', 'ohightower@email.com',1200),
    new Tecnico(15, 'Corlys', 'Velaryon', '', 'DNI', '96385274', 'Lima', 'Av. La Mar 258', 'cvelaryon@email.com',1000),
    new Tecnico(16, 'Erryk', 'Cargyll', '', 'DNI', '85214796', 'Lima', 'Av. La Mar 625', 'ecargyll@email.com',1100),
];
// Datos simulados de tickets en curso
let ticketsSimulados = [
    new Ticket(1, 'Pendiente Revisión', contacto, 
        new Celular(1, '972159987' ,'Apple', '15 Pro' ,'123456789087654', 'D92S945A090'), 
        clientesSimulados[0],''),
    new Ticket(2, 'En Revisión', contacto, 
        new Celular(2, '965235785' ,'Xiaomi', 'Redmi Note 13 Pro','234567890876541', 'D92S945A091'), 
        clientesSimulados[1],''),
    new Ticket(3, 'Revisión Atendida', contacto, 
        new Celular(3, '985235478' ,'Apple', '14','345678908765412', 'D92S945A092'), 
        clientesSimulados[2],''),
    new Ticket(4, 'Pendiente Autorización', contacto, 
        new Celular(4, '964785021' ,'Samsung','Galaxy M55' ,'456789087654123', 'D92S945A093'), 
        clientesSimulados[3],''),
    new Ticket(5, 'Autorizada', contacto, 
        new Celular(5, '923475865' ,'Xiaomi', 'Redmi Note 13 Pro','567890876541234', 'D92S945A094'), 
        clientesSimulados[4],''),
    new Ticket(6, 'Pendiente Reparación', contacto, 
        new Celular(6, '965798526' ,'Samsung','Galaxy S24 Ultra' ,'678908765412345', 'D92S945A095'), 
        clientesSimulados[5],''),
    new Ticket(7, 'En Reparación', contacto, 
        new Celular(7, '936547845' ,'Apple', '13','789087654123456', 'D92S945A096'), 
        clientesSimulados[6],''),
    new Ticket(8, 'Reparación Atendida', contacto, 
        new Celular(8, '905485698' ,'Samsung', 'Galaxy A55 5G', '890876541234567', 'D92S945A097'), 
        clientesSimulados[7],''),
    new Ticket(9, 'Cerrado', contacto, 
        new Celular(9, '965895745' ,'Xiaomi', 'Redmi Note 13 Pro','908765412345678', 'D92S945A098'), 
        clientesSimulados[8],''),
                
];



// Función para simular inicio de sesión
function iniciarSesion(usuario, contraseña) {

    usuarioEncontrado = usuariosSimulados.find(u => u.correo === usuario && u.password === contraseña);
    
    //Actualizacion de datos para la simulación

    tecnicosSimulados[0].agregarSkill(new Skill(1, 'Apple', 'Reemplazo de Pantalla'));
    tecnicosSimulados[0].agregarSkill(new Skill(2, 'Apple', 'Reemplazo de Batería'));
    tecnicosSimulados[0].agregarSkill(new Skill(3, 'Apple', 'Reemplazo de Bocina'));
    tecnicosSimulados[0].agregarSkill(new Skill(4, 'Samsung', 'Reemplazo de Pantalla'));
    tecnicosSimulados[0].agregarSkill(new Skill(5, 'Samsung', 'Reemplazo de Batería'));
    tecnicosSimulados[0].agregarSkill(new Skill(6, 'Samsung', 'Reemplazo de Bocina'));
    tecnicosSimulados[0].agregarSkill(new Skill(7, 'Xiaomi', 'Reemplazo de Pantalla'));
    tecnicosSimulados[0].agregarSkill(new Skill(8, 'Xiaomi', 'Reemplazo de Batería'));
    tecnicosSimulados[0].agregarSkill(new Skill(9, 'Xiaomi', 'Reemplazo de Bocina'));

    let revision1 = new Revision(1,tecnicosSimulados[0]);
    let revision2 = new Revision(2,tecnicosSimulados[0]);
    let revision3 = new Revision(3,tecnicosSimulados[0]);
    let revision4 = new Revision(4,tecnicosSimulados[0]);
    let revision5 = new Revision(5,tecnicosSimulados[0]);
    let revision6 = new Revision(6,tecnicosSimulados[0]);
    let revision7 = new Revision(7,tecnicosSimulados[0]);

    revision1.tipoDiagnostico = 'Pantalla rota'; revision1.comentarios = 'Se debe reemplazar la pantalla';
    revision2.tipoDiagnostico = 'Batería dañana'; revision2.comentarios = 'Se debe reemplazar la batería';
    revision3.tipoDiagnostico = 'Bocina dañana'; revision3.comentarios = 'Se debe reemplazar las bocinas';
    revision4.tipoDiagnostico = 'Pantalla rota'; revision4.comentarios = 'Se debe reemplazar la pantalla';
    revision5.tipoDiagnostico = 'Pantalla rota'; revision5.comentarios = 'Se debe reemplazar la pantalla';
    revision6.tipoDiagnostico = 'Pantalla rota'; revision6.comentarios = 'Se debe reemplazar la pantalla';
    revision7.tipoDiagnostico = 'Batería dañana'; revision7.comentarios = 'Se debe reemplazar la batería';
    
    let mantenimiento1 = new Mantenimiento(1,tecnicosSimulados[1]);
    tecnicosSimulados[1].agregarSkill(new Skill(1, 'Apple', 'Reemplazo de Pantalla'));
    tecnicosSimulados[1].agregarSkill(new Skill(2, 'Apple', 'Reemplazo de Batería'));
    tecnicosSimulados[1].agregarSkill(new Skill(3, 'Apple', 'Reemplazo de Bocina'));
    tecnicosSimulados[1].agregarSkill(new Skill(4, 'Samsung', 'Reemplazo de Pantalla'));
    tecnicosSimulados[1].agregarSkill(new Skill(5, 'Samsung', 'Reemplazo de Batería'));
    tecnicosSimulados[1].agregarSkill(new Skill(6, 'Samsung', 'Reemplazo de Bocina'));
    tecnicosSimulados[2].agregarSkill(new Skill(1, 'Xiaomi', 'Reemplazo de Pantalla'));
    tecnicosSimulados[2].agregarSkill(new Skill(2, 'Xiaomi', 'Reemplazo de Batería'));
    tecnicosSimulados[2].agregarSkill(new Skill(3, 'Xiaomi', 'Reemplazo de Bocina'));

    let mantenimiento2 = new Mantenimiento(2,tecnicosSimulados[2]);
    
    mantenimiento1.tipoMantenimiento = 'Reemplazo de pantalla'; mantenimiento1.observaciones = 'Se reemplazó la pantalla correctamente';
    mantenimiento2.tipoMantenimiento = 'Reemplazo de batería'; mantenimiento2.observaciones = 'Se reemplazó la batería correctamente';
    
    let cotizacion1 = new Cotizacion(0, 100.00, 18.00, 118.00);
    cotizacion1.detallesCotizacion.push(new DetalleCotizacion(1, 50.00, 'Limpieza', 'Servicio', 'Limpieza'));
    cotizacion1.detallesCotizacion.push(new DetalleCotizacion(2, 50.00, 'Cambio de pantalla', 'Servicio', 'Cambio de pantalla'));

    let cotizacion2 = new Cotizacion(1, 85.00, 15.30, 100.30);
    cotizacion2.detallesCotizacion.push(new DetalleCotizacion(1, 30.00, 'Bateria', 'Repuesto', 'Bateria'));
    cotizacion2.detallesCotizacion.push(new DetalleCotizacion(2, 55.00, 'Pantalla', 'Repuesto', 'Pantalla'));

    let cotizacion3 = new Cotizacion(2, 60.00, 10.80, 70.80);
    cotizacion3.detallesCotizacion.push(new DetalleCotizacion(1, 20.00, 'Cambio de bocina', 'Servicio', 'Cambio de bocina'));
    cotizacion3.detallesCotizacion.push(new DetalleCotizacion(2, 40.00, 'Pantalla', 'Repuesto', 'Pantalla'));

    let cotizacion4 = new Cotizacion(3, 50.00, 9.00, 59.00);
    cotizacion4.detallesCotizacion.push(new DetalleCotizacion(1, 25.00, 'Limpieza', 'Servicio', 'Limpieza'));
    cotizacion4.detallesCotizacion.push(new DetalleCotizacion(2, 25.00, 'Cambio de bateria', 'Servicio', 'Cambio de bateria'));

    let cotizacion5 = new Cotizacion(4, 150.00, 27.00, 177.00);
    cotizacion5.detallesCotizacion.push(new DetalleCotizacion(1, 75.00, 'Cambio de pantalla', 'Servicio', 'Cambio de pantalla'));
    cotizacion5.detallesCotizacion.push(new DetalleCotizacion(2, 75.00, 'Bateria', 'Repuesto', 'Bateria'));

    let cotizacion6 = new Cotizacion(5, 200.00, 36.00, 236.00);
    cotizacion6.detallesCotizacion.push(new DetalleCotizacion(1, 100.00, 'Cambio de pantalla', 'Servicio', 'Cambio de pantalla'));
    cotizacion6.detallesCotizacion.push(new DetalleCotizacion(2, 100.00, 'Pantalla', 'Repuesto', 'Pantalla'));

    let cotizacion7 = new Cotizacion(6, 90.00, 16.20, 106.20);
    cotizacion7.detallesCotizacion.push(new DetalleCotizacion(1, 45.00, 'Cambio de bocina', 'Servicio', 'Cambio de bocina'));
    cotizacion7.detallesCotizacion.push(new DetalleCotizacion(2, 45.00, 'Bateria', 'Repuesto', 'Bateria'));

    cotizaciones.push(cotizacion1, cotizacion2, cotizacion3, cotizacion4, cotizacion5, cotizacion6, cotizacion7);

    ticketsSimulados[2].agregarRevision(revision1);
    ticketsSimulados[2].actualizaCotizacion(cotizacion1);
   
    ticketsSimulados[3].agregarRevision(revision2);
    ticketsSimulados[3].actualizaCotizacion(cotizacion2);

    ticketsSimulados[4].agregarRevision(revision3);
    ticketsSimulados[4].autorizarMantenimiento();
    ticketsSimulados[4].actualizaCotizacion(cotizacion3);
    ticketsSimulados[4].pagoAdelantado=ticketsSimulados[4].cotizacion.total*0.5;
    ticketsSimulados[4].pagoPendiente=ticketsSimulados[4].cotizacion.total*0.5;

    ticketsSimulados[5].agregarRevision(revision4);
    ticketsSimulados[5].autorizarMantenimiento();
    ticketsSimulados[5].actualizaCotizacion(cotizacion4);
    ticketsSimulados[5].pagoAdelantado=ticketsSimulados[5].cotizacion.total*0.5;
    ticketsSimulados[5].pagoPendiente=ticketsSimulados[5].cotizacion.total*0.5;

    ticketsSimulados[6].agregarRevision(revision5);
    ticketsSimulados[6].autorizarMantenimiento();
    ticketsSimulados[6].actualizaCotizacion(cotizacion5);
    ticketsSimulados[6].pagoAdelantado=ticketsSimulados[6].cotizacion.total*0.5;
    ticketsSimulados[6].pagoPendiente=ticketsSimulados[6].cotizacion.total*0.5;

    ticketsSimulados[7].agregarRevision(revision6);
    ticketsSimulados[7].autorizarMantenimiento();
    ticketsSimulados[7].agregarMantenimiento(mantenimiento1);
    ticketsSimulados[7].actualizaCotizacion(cotizacion6);
    ticketsSimulados[7].pagoAdelantado=ticketsSimulados[7].cotizacion.total*0.5;
    ticketsSimulados[7].pagoPendiente=ticketsSimulados[7].cotizacion.total*0.5;

    ticketsSimulados[8].agregarRevision(revision7);
    ticketsSimulados[8].autorizarMantenimiento();
    ticketsSimulados[8].agregarMantenimiento(mantenimiento2);
    ticketsSimulados[8].actualizaCotizacion(cotizacion7);
    ticketsSimulados[8].totalPago=ticketsSimulados[8].cotizacion.total;


    if (usuarioEncontrado) {
        const sucursalAleatoria = sucursales[Math.floor(Math.random() * sucursales.length)];
        mostrarTicketsEnCurso(); // Mostrar directamente los tickets en curso
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: `Bienvenido, ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellidoPaterno}`,
            footer: `Sucursal: ${sucursalAleatoria.nombre}`
        });
    } else { //para el ejercicio dejaremos pasar a todos
        /*
        Swal.fire({
            icon: 'error',
            title: 'Error de inicio de sesión',
            text: 'Usuario o contraseña incorrectos.'
        });*/
        const sucursalAleatoria = sucursales[Math.floor(Math.random() * sucursales.length)];
        mostrarTicketsEnCurso(); // Mostrar directamente los tickets en curso
        
        
        usuarioEncontrado = new Usuario(usuariosSimulados.length,'Jhon','Doe','','DNI','00000000','','','jdoe@email.com');
        usuariosSimulados.push(usuarioEncontrado);
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: `Bienvenido, ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellidoPaterno}`,
            footer: `Sucursal: ${sucursalAleatoria.nombre}`
        });
    }
}

function registrarTicket() {
    Swal.fire({
        title: 'Registrar Ticket',
        width: '70%', // Ajuste del ancho del cuadro de diálogo
        html: `
            <form id="form-registrar-ticket">
                <div class="form-group">
                    <label for="tipo-cliente">¿Cliente nuevo o existente?</label><br>
                    <input type="radio" id="cliente-existente" name="tipoCliente" value="existente" required checked>
                    <label for="cliente-existente">Existente</label>
                    <input type="radio" id="cliente-nuevo" name="tipoCliente" value="nuevo" required>
                    <label for="cliente-nuevo">Nuevo</label>
                </div>
                <div id="datos-cliente-nuevo" style="display: none;">
                    <h4>Datos del Cliente Nuevo</h4>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="ticket-nombre">Nombre:</label>
                                <input type="text" class="form-control" id="ticket-nombre" placeholder="Nombre del cliente">
                            </div>
                            <div class="form-group">
                                <label for="ticket-apellido-paterno">Apellido Paterno:</label>
                                <input type="text" class="form-control" id="ticket-apellido-paterno" placeholder="Apellido Paterno">
                            </div>
                            <div class="form-group">
                                <label for="ticket-apellido-materno">Apellido Materno:</label>
                                <input type="text" class="form-control" id="ticket-apellido-materno" placeholder="Apellido Materno">
                            </div>
                            <div class="form-group">
                                <label for="ticket-tipo-documento">Tipo de Documento:</label>
                                <select class="form-control" id="ticket-tipo-documento" required>
                                    <option value="">Seleccionar tipo de documento</option>
                                    ${tipoDocumentos.map(tipoDocumento => `<option value="${tipoDocumento}">${tipoDocumento}</option>`).join('')}
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="ticket-num-documento">Número de Documento:</label>
                                <input type="text" class="form-control" id="ticket-num-documento" placeholder="Número de Documento">
                            </div>
                            <div class="form-group">
                                <label for="ticket-distrito">Distrito:</label>
                                <input type="text" class="form-control" id="ticket-distrito" placeholder="Distrito">
                            </div>
                            <div class="form-group">
                                <label for="ticket-direccion">Dirección:</label>
                                <input type="text" class="form-control" id="ticket-direccion" placeholder="Dirección">
                            </div>
                            <div class="form-group">
                                <label for="ticket-correo">Correo:</label>
                                <input type="email" class="form-control" id="ticket-correo" placeholder="Correo electrónico">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="datos-cliente-existente" >
                    <h4>Datos del Cliente Existente</h4>
                    <div class="form-group">
                        <label for="ticket-correo-existente">Correo Electrónico:</label>
                        <input type="text" class="form-control" id="ticket-correo-existente" placeholder="Ingrese correo electrónico">
                    </div>
                </div>
                <br>
                <h4>Datos del Celular</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ticket-celular">Celular:</label>
                            <input type="text" class="form-control" id="ticket-celular" placeholder="Número de celular" required>
                        </div>
                        <div class="form-group">
                            <label for="ticket-marca">Marca:</label>
                            <select class="form-control" id="ticket-marca" required>
                                <option value="">Seleccionar marca</option>
                                ${marcas.map(marca => `<option value="${marca.nombre}">${marca.nombre}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="ticket-modelo">Modelo:</label>
                            <input type="text" class="form-control" id="ticket-modelo" placeholder="Modelo de celular" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ticket-numSerie">Número de Serie:</label>
                            <input type="text" class="form-control" id="ticket-numSerie" placeholder="Número de Serie" required>
                        </div>
                        <div class="form-group">
                            <label for="ticket-IMEI">IMEI:</label>
                            <input type="text" class="form-control" id="ticket-IMEI" placeholder="IMEI" required>
                        </div>
                        <div class="form-group">
                            <label for="ticket-falla">Descripción de la Falla:</label>
                            <textarea class="form-control" id="ticket-falla" placeholder="Descripción de la falla" required></textarea>
                        </div>
                    </div>
                </div>
            </form>
        `,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Registrar',
        focusConfirm: false,
        preConfirm: () => {
            const tipoCliente = document.querySelector('input[name="tipoCliente"]:checked').value;
            let cliente;

            if (tipoCliente === 'nuevo') {
                const nombre = document.getElementById('ticket-nombre').value;
                const apellidoPaterno = document.getElementById('ticket-apellido-paterno').value;
                const apellidoMaterno = document.getElementById('ticket-apellido-materno').value;
                const tipoDocumento = document.getElementById('ticket-tipo-documento').value;
                const numDocumento = document.getElementById('ticket-num-documento').value;
                const distrito = document.getElementById('ticket-distrito').value;
                const direccion = document.getElementById('ticket-direccion').value;
                const correo = document.getElementById('ticket-correo').value;

                if (!nombre || !apellidoPaterno || !tipoDocumento || !numDocumento || !distrito || !direccion || !correo) {
                    Swal.showValidationMessage('Por favor, complete todos los campos para el nuevo cliente.');
                    return false;
                }

                cliente = new Usuario(clientesSimulados.length, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, numDocumento, distrito, direccion, correo);
                clientesSimulados.push(cliente);
            } else {
                // Cliente existente, validar solo campo principal
                const correoExistente = document.getElementById('ticket-correo-existente').value;
                cliente = clientesSimulados.find(cliente => cliente.correo === correoExistente);

                if (!cliente) {
                    Swal.showValidationMessage('No se encontró ningún cliente con el correo proporcionado.');
                    return false;
                }
            }

            const numCelular = document.getElementById('ticket-celular').value;
            const modelo = document.getElementById('ticket-modelo').value;
            const marca = document.getElementById('ticket-marca').value;
            const numSerie = document.getElementById('ticket-numSerie').value;
            const IMEI = document.getElementById('ticket-IMEI').value;
            const falla = document.getElementById('ticket-falla').value;
            // Validar si el celular está bloqueado
            const celularBloqueado = verificarBloqueo(numSerie,IMEI); 

            if (celularBloqueado) {
                Swal.showValidationMessage('El celular está bloqueado. No se puede registrar el ticket.');
                return false;
            }



            const celular = new Celular(1,numCelular,marca,modelo,IMEI,numSerie)
            const ticket = new Ticket(
                ticketsSimulados.length +1,
                'Pendiente Revisión',
                usuarioEncontrado,
                celular,
                cliente,
                falla
            );

            ticketsSimulados.push(ticket);

            return {
                ticket: ticket
            };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Ticket Registrado',
                text: 'El ticket ha sido registrado correctamente.'
            }).then(() => {
                mostrarTicketsEnCurso(); // Actualizar la lista de tickets después de registrar uno nuevo
            });
        }
    });

    // Mostrar campos correspondientes según la selección de cliente nuevo o existente
    document.getElementById('cliente-nuevo').addEventListener('change', function () {
        if (this.checked) {
            document.getElementById('datos-cliente-nuevo').style.display = 'block';
            document.getElementById('datos-cliente-existente').style.display = 'none';
        }
    });

    document.getElementById('cliente-existente').addEventListener('change', function () {
        if (this.checked) {
            document.getElementById('datos-cliente-existente').style.display = 'block';
            document.getElementById('datos-cliente-nuevo').style.display = 'none';
        }
    });
}
    
// Función para mostrar la lista de tickets en curso
function mostrarTicketsEnCurso() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h2>Seguimiento de Tickets</h2>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <button class="btn btn-primary" onclick="registrarTicket()">Registrar Ticket</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Número de Ticket</th>
                            <th scope="col">Nombre y Apellido del Cliente</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ticketsSimulados.map(ticket => `
                            <tr>
                                <td>${ticket.idTicket}</td>
                                <td>${ticket.cliente.nombre + ' ' + ticket.cliente.apellidoPaterno + ' ' + ticket.cliente.apellidoMaterno}</td>
                                <td>${ticket.estado}</td>
                                <td>
                                    ${ticket.estado === 'Pendiente Revisión' || ticket.estado === 'Autorizada' ? 
                                        `<button class="btn btn-info" onclick="mostrarTecnicosDisponibles(${ticket.idTicket})">Asignar Técnico</button>` : ''}
                                    ${ticket.estado === 'En Revisión' ? 
                                        `<button class="btn btn-info" onclick="terminarRevision(${ticket.idTicket})">Terminar Revisión</button>` : ''}
                                    ${ticket.estado === 'Revisión Atendida' ? 
                                        `<button class="btn btn-info" onclick="solicitarAutorizacion(${ticket.idTicket})">Solicitar Autorización</button>` : ''}
                                    ${ticket.estado === 'Pendiente Autorización' ? 
                                        `<button class="btn btn-info" onclick="autorizar(${ticket.idTicket})">Autorizar</button>` : ''}
                                    ${ticket.estado === 'Pendiente Reparación' ? 
                                        `<button class="btn btn-info" onclick="iniciarReparacion(${ticket.idTicket})">Iniciar Reparación</button>` : ''}
                                    ${ticket.estado === 'En Reparación' ? 
                                        `<button class="btn btn-info" onclick="editarCotizacion(${ticket.idTicket})">Editar</button>` : ''}        
                                    ${ticket.estado === 'En Reparación' ? 
                                        `<button class="btn btn-info" onclick="terminarReparacion(${ticket.idTicket})">Terminar Reparación</button>` : ''}          
                                    ${ticket.estado === 'Reparación Atendida' ? 
                                        `<button class="btn btn-info" onclick="procesarPago(${ticket.idTicket})">Procesar Pago</button>` : ''}                                                                 
                                    <button class="btn btn-info" onclick="verDetalleTicket(${ticket.idTicket})">Ver Detalle</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}


// Función para ver el detalle de un ticket
function verDetalleTicket(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado) {
        // Construir el contenido del detalle del ticket
        const contenidoDetalle = `
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-left">
                        <h4>Detalle del Ticket</h4>
                        <p><strong>Estado:</strong> ${ticketSeleccionado.estado}</p>
                        <p><strong>Fecha de Creación:</strong> ${ticketSeleccionado.fechaRegistro}</p>
                        <p><strong>Usuario de Creación:</strong> ${ticketSeleccionado.usuarioRegistro.nombre+ ' ' + ticketSeleccionado.usuarioRegistro.apellidoPaterno}</p>
                    </div>
                </div>
            </div>
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-left">
                        <h5><strong>Datos del Cliente</strong></h5>
                        <p><strong>Nombre:</strong> ${ticketSeleccionado.cliente.nombre}</p>
                        <p><strong>Apellido Paterno:</strong> ${ticketSeleccionado.cliente.apellidoPaterno}</p>
                        <p><strong>Apellido Materno:</strong> ${ticketSeleccionado.cliente.apellidoMaterno}</p>
                        <br>
                        <h5><strong>Datos del Celular</strong></h5>
                        <p><strong>Número Celular:</strong> ${ticketSeleccionado.celular.numero}</p>
                        <p><strong>Marca:</strong> ${ticketSeleccionado.celular.marca}</p>
                        <p><strong>Modelo:</strong> ${ticketSeleccionado.celular.modelo}</p>
                        <p><strong>Número de Serie:</strong> ${ticketSeleccionado.celular.numSerie}</p>
                        <p><strong>IMEI:</strong> ${ticketSeleccionado.celular.IMEI}</p>
                        <p><strong>Bloqueado:</strong> ${ticketSeleccionado.celular.bloqueado ? 'Sí' : 'No'}</p>
                    </div>
                    <div class="col-md-6 text-left">
                        <h5><strong>Información del Diagnóstico</strong></h5>
                        ${ticketSeleccionado.revision && ticketSeleccionado.revision.tecnico ? `<p><strong>Técnico:</strong> ${ticketSeleccionado.revision.tecnico.nombre + ' ' + ticketSeleccionado.revision.tecnico.apellidoPaterno}</p>` : ''}
                        ${ticketSeleccionado.revision && ticketSeleccionado.revision.tipoDiagnostico ? `<p><strong>Diagnóstico:</strong> ${ticketSeleccionado.revision.tipoDiagnostico}</p>` : ''}
                        ${ticketSeleccionado.revision && ticketSeleccionado.revision.comentarios ? `<p><strong>Comentarios:</strong> ${ticketSeleccionado.revision.comentarios}</p>` : ''}
                        <br>
                        <h5><strong>Información del Mantenimiento</strong></h5>
                        ${ticketSeleccionado.mantenimiento && ticketSeleccionado.mantenimiento.tecnico ? `<p><strong>Técnico:</strong> ${ticketSeleccionado.mantenimiento.tecnico.nombre + ' ' + ticketSeleccionado.mantenimiento.tecnico.apellidoPaterno}</p>` : ''}
                        ${ticketSeleccionado.mantenimiento && ticketSeleccionado.mantenimiento.tipoMantenimiento ? `<p><strong>Mantenimiento:</strong> ${ticketSeleccionado.mantenimiento.tipoMantenimiento}</p>` : ''}
                        ${ticketSeleccionado.mantenimiento && ticketSeleccionado.mantenimiento.observaciones ? `<p><strong>Observaciones:</strong> ${ticketSeleccionado.mantenimiento.observaciones}</p>` : ''}
                        <p><strong>Autorizado:</strong> ${ticketSeleccionado.autorizado ? 'Sí' : 'No'}</p>
                        <p><strong>Cotización (S/):</strong> ${ticketSeleccionado.cotizacion.total}</p>
                        <br>
                        <h5><strong>Información del Pago</strong></h5>
                        <p><strong>Pago Adelantado (S/):</strong> ${ticketSeleccionado.pagoAdelantado}</p>
                        <p><strong>Pago Pendiente (S/):</strong> ${ticketSeleccionado.pagoPendiente}</p>
                        <p><strong>Total de Pago (S/):</strong> ${ticketSeleccionado.totalPago}</p>
                        ${ticketSeleccionado.tipoPago ? `<p><strong>Tipo de Pago:</strong> ${ticketSeleccionado.tipoPago}</p>` : ''}
                    </div>
                </div>
            </div>
        `;

        // Mostrar el detalle del ticket 
        Swal.fire({
            title: `Ticket ${ticketSeleccionado.idTicket}`,
            html: `${contenidoDetalle}`,
            showCloseButton: true,
            showConfirmButton: false, 
            showCancelButton: false,
            focusConfirm: false,
            customClass: 'swal-wide'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se encontró el ticket seleccionado.'
        });
    }
}

// Función para mostrar los técnicos disponibles con el skill requerido
function mostrarTecnicosDisponibles(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado) {
        const tecnicosDisponibles = tecnicosSimulados.filter(tecnico =>
            tecnico.skills.some(skill => skill.marca === ticketSeleccionado.celular.marca)
        );

        Swal.fire({
            title: 'Asignar Técnico',
            html:
              `<select id="swal-select-tecnico" class="swal2-select">
                  ${tecnicosDisponibles.map(tecnico => `<option value="${tecnico.idUsuario}">${tecnico.nombre} ${tecnico.apellidoPaterno}</option>`).join('')}
               </select>`,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Asignar',
            preConfirm: () => {
                const idTecnicoSeleccionado = parseInt(Swal.getPopup().querySelector('#swal-select-tecnico').value);
                const tecnicoSeleccionado = tecnicosSimulados.find(tecnico => tecnico.idUsuario === idTecnicoSeleccionado);

                // Cambiar estado del ticket
                if (ticketSeleccionado.estado ==='Pendiente Revisión'){
                    ticketSeleccionado.estado = 'En Revisión';
                    const nuevaRevision = {
                        tecnico: tecnicoSeleccionado,
                        fecha: getDate()  
                    };
                    ticketSeleccionado.agregarRevision(nuevaRevision);
                }else{
                    if (ticketSeleccionado.estado ==='Autorizada'){
                        ticketSeleccionado.estado = 'Pendiente Reparación';
                        const nuevoMantenimiento = {
                            tecnico: tecnicoSeleccionado,
                            fecha: getDate()  
                        };
                        ticketSeleccionado.agregarMantenimiento(nuevoMantenimiento);
                    }
                }
                



                Swal.fire({
                    icon: 'success',
                    title: 'Técnico asignado correctamente',
                    text: `Técnico asignado: ${tecnicoSeleccionado.nombre} ${tecnicoSeleccionado.apellidoPaterno}`
                }).then(() => {
                    mostrarTicketsEnCurso(); // Actualizar la lista de tickets
                });
            }
        });
    }
}

// Funciones para los botones 
// Función para terminar la revisión de un ticket
function terminarRevision(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado && ticketSeleccionado.estado === 'En Revisión') {
        let cotizacion = new Cotizacion(
            cotizaciones.length, // Supón que tienes una función para generar IDs de cotización
            0, // Precio inicial, se actualizará con el total calculado
            0, // IGV inicial, se actualizará con el total calculado
            0 // Total inicial, se actualizará con el total calculado
        );

        Swal.fire({
            title: 'Finalizar Revisión',
            width: '70%', // Ajuste del ancho del cuadro de diálogo
            html: `
                <table id="swal-table-detalle" class="table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Detalle</th>
                            <th>Precio Unitario (S/)</th>
                            <th>IGV (18%)</th>
                            <th>Total (S/)</th>
                            <th>Acciones</th> <!-- Columna para botón de eliminación -->
                        </tr>
                    </thead>
                    <tbody></tbody> <!-- Cuerpo de la tabla vacío -->
                </table>
                <button id="swal-btn-agregar" class="btn btn-primary">Agregar detalle</button>
                <hr>
                <div>
                    <strong>Total Cotización (S/): </strong><span id="swal-total-cotizacion">0.00</span>
                </div>
            `,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Terminar Revisión',
            focusConfirm: false,
            preConfirm: () => {
                // Actualizar el objeto Cotizacion con los detalles y el total calculado
                cotizacion.detallesCotizacion = obtenerDetallesCotizacion();
                cotizacion.total = parseFloat(calcularTotalCotizacion());
                cotizacion.precio = (cotizacion.total / 1.18).toFixed(2);
                cotizacion.igv = (cotizacion.precio * 0.18).toFixed(2);
                cotizaciones.push(cotizacion);

                // Actualizar estado del ticket y registrar cotización
                ticketSeleccionado.estado = 'Revisión Atendida';
                ticketSeleccionado.cotizacion = cotizacion;

                Swal.fire({
                    icon: 'success',
                    title: 'Revisión finalizada correctamente',
                    html: `Cotización registrada`
                }).then(() => {
                    mostrarTicketsEnCurso(); // Actualizar la lista de tickets después de finalizar la revisión
                });
            }
        });

        // Función para calcular el costo total de la cotización
        function calcularTotalCotizacion() {
            let total = 0;
            const detalles = obtenerDetallesCotizacion();
            detalles.forEach(detalle => {
                total += parseFloat(detalle.total);
            });

            return total.toFixed(2);
        }

        // Función para obtener los detalles de la cotización ingresados por el usuario
        function obtenerDetallesCotizacion() {
            const detalles = [];

            document.querySelectorAll('#swal-table-detalle tbody tr').forEach((tr, index) => {
                const tipo = tr.querySelector('.tipo').value;
                const detalle = tr.querySelector('.detalle').value;
                const precio = tr.querySelector('.precio-unitario').value;
                const igv = (precio * 0.18).toFixed(2);
                const total = (parseFloat(precio) + parseFloat(igv)).toFixed(2);

                if (precio) {
                    const idDetalle = index + 1; // Generar ID de detalle (puedes cambiar la lógica de generación según necesites)
                    const nuevoDetalle = new DetalleCotizacion(idDetalle, precio, detalle, tipo, detalle.toLowerCase());
                    detalles.push(nuevoDetalle);
                }
            });

            return detalles;
        }

        // Evento para agregar un nuevo detalle a la tabla
        document.getElementById('swal-btn-agregar').addEventListener('click', () => {
            agregarFilaDetalle();
        });

        // Función para agregar una nueva fila de detalle
        function agregarFilaDetalle() {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>
                    <select class="form-control swal-select tipo">
                        <option value="Servicio">Servicio</option>
                        <option value="Repuesto">Repuesto</option>
                    </select>
                </td>
                <td>
                    <select class="form-control swal-select detalle">
                        <!-- Opciones se llenarán dinámicamente -->
                    </select>
                </td>
                <td><input class="form-control swal-input precio-unitario" type="number" min="0" step="0.10" placeholder="Precio unitario"></td>
                <td><span class="igv">0.00</span></td>
                <td><span class="total">0.00</span></td>
                <td><button class="btn btn-danger swal-btn-eliminar">Eliminar</button></td>
            `;
            document.querySelector('#swal-table-detalle tbody').appendChild(newRow);

            const tipoSelect = newRow.querySelector('.tipo');
            const detalleSelect = newRow.querySelector('.detalle');

            // Evento para actualizar las opciones del select de detalle según el tipo seleccionado
            tipoSelect.addEventListener('change', () => {
                actualizarOpcionesDetalle(tipoSelect, detalleSelect);
            });

            // Inicializar las opciones del select de detalle según el tipo seleccionado por defecto
            actualizarOpcionesDetalle(tipoSelect, detalleSelect);

            // Actualizar totales al cambiar el precio unitario
            newRow.querySelector('.precio-unitario').addEventListener('input', () => {
                actualizarTotales(newRow);
            });

            // Evento para eliminar fila
            newRow.querySelector('.swal-btn-eliminar').addEventListener('click', () => {
                document.querySelector('#swal-table-detalle tbody').removeChild(newRow);
                // Recalcular totales al eliminar fila
                document.getElementById('swal-total-cotizacion').textContent = calcularTotalCotizacion();
            });

            // Calcular totales iniciales
            actualizarTotales(newRow);
        }

        // Función para actualizar los totales de IGV y total al cambiar el precio unitario
        function actualizarTotales(row) {
            const precioUnitario = parseFloat(row.querySelector('.precio-unitario').value);
            let igv = 0;
            let total = 0;
            if (!isNaN(precioUnitario)) {
                igv = (precioUnitario * 0.18).toFixed(2);
                total = (precioUnitario + parseFloat(igv)).toFixed(2);
            }

            row.querySelector('.igv').textContent = igv;
            row.querySelector('.total').textContent = total;

            // Actualizar total general de la cotización
            document.getElementById('swal-total-cotizacion').textContent = calcularTotalCotizacion();
        }

        // Función para actualizar las opciones del select de detalle según el tipo seleccionado
        function actualizarOpcionesDetalle(tipoSelect, detalleSelect) {
            const servicios = ['Seleccionar','Limpieza', 'Cambio de pantalla', 'Cambio de batería', 'Cambio de bocina'];
            const repuestos = ['Seleccionar','Pantalla', 'Batería', 'Bocina'];

            let opciones = [];
            if (tipoSelect.value === 'Servicio') {
                opciones = servicios;
            } else if (tipoSelect.value === 'Repuesto') {
                opciones = repuestos;
            }

            // Limpiar las opciones actuales
            detalleSelect.innerHTML = '';
            // Agregar las nuevas opciones
            opciones.forEach(opcion => {
                const optionElement = document.createElement('option');
                optionElement.value = opcion;
                optionElement.textContent = opcion;
                detalleSelect.appendChild(optionElement);
            });
        }

        // Agregar la primera fila de detalle al abrir el modal
        agregarFilaDetalle();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se puede finalizar la revisión. El ticket no está en estado "En Revisión".'
        });
    }
}



function solicitarAutorizacion(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado && ticketSeleccionado.cotizacion) {
        const cotizacion = ticketSeleccionado.cotizacion;
        const detallesHTML = cotizacion.detallesCotizacion.map(detalle => `
            <tr>
                <td>${detalle.tipo}</td>
                <td>${detalle.descripcion}</td>
                <td>${detalle.precio}</td>
                <td>${detalle.igv}</td>
                <td>${detalle.total}</td>
            </tr>
        `).join('');

        const totalCotizacion = parseFloat(cotizacion.total);
        const adelanto = (totalCotizacion * 0.50).toFixed(2);

        Swal.fire({
            title: 'Solicitar Autorización',
            width: '70%', // Ajuste del ancho del cuadro de diálogo
            html: `
                <table class="table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Detalle</th>
                            <th>Precio Unitario (S/)</th>
                            <th>IGV (18%)</th>
                            <th>Total (S/)</th>
                        </tr>
                    </thead>
                    <tbody>${detallesHTML}</tbody>
                </table>
                <hr>
                <div>
                    <strong>Total Cotización (S/): </strong><span>${totalCotizacion.toFixed(2)}</span><br>
                    <strong>Adelanto (50%): </strong><span>${adelanto}</span><br><br>
                    <p>Para proceder con el trabajo, se debe pagar el 50% de la cotización y el cliente debe firmar una autorización escrita.</p>
                </div>
            `,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Solicitar Autorización',
            focusConfirm: false,
            preConfirm: () => {
                // Actualizar estado del ticket
                ticketSeleccionado.estado = 'Pendiente Autorización';

                Swal.fire({
                    icon: 'success',
                    title: 'Autorización Confirmada',
                    text: 'El estado del ticket ha sido actualizado a "Solicitar Autorización".'
                }).then(() => {
                    mostrarTicketsEnCurso(); // Actualizar la lista de tickets después de la autorización
                });
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se puede solicitar autorización. El ticket no tiene una cotización registrada.'
        });
    }
}


function autorizar(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado && ticketSeleccionado.cotizacion) {
        const cotizacion = ticketSeleccionado.cotizacion;
        const detallesHTML = cotizacion.detallesCotizacion.map(detalle => `
            <tr>
                <td>${detalle.tipo}</td>
                <td>${detalle.descripcion}</td>
                <td>${detalle.precio}</td>
                <td>${detalle.igv}</td>
                <td>${detalle.total}</td>
            </tr>
        `).join('');

        const totalCotizacion = parseFloat(cotizacion.total);
        const adelanto = (totalCotizacion * 0.50).toFixed(2);

        Swal.fire({
            title: 'Solicitar Autorización',
            width: '70%', // Ajuste del ancho del cuadro de diálogo
            html: `
                <table class="table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Detalle</th>
                            <th>Precio Unitario (S/)</th>
                            <th>IGV (18%)</th>
                            <th>Total (S/)</th>
                        </tr>
                    </thead>
                    <tbody>${detallesHTML}</tbody>
                </table>
                <hr>
                <div>
                    <strong>Total Cotización (S/): </strong><span>${totalCotizacion.toFixed(2)}</span><br>
                    <strong>Adelanto (50%): </strong><span>${adelanto}</span><br><br>
                    <p>Confirme la firma de la autorización y pago</p>
                </div>
            `,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar Autorización',
            focusConfirm: false,
            preConfirm: () => {
                // Actualizar estado del ticket
                ticketSeleccionado.estado = 'Autorizada';
                ticketSeleccionado.pagoAdelantado = 0.5 * ticketSeleccionado.cotizacion.total;
                ticketSeleccionado.pagoPendiente = 0.5 * ticketSeleccionado.cotizacion.total;
                Swal.fire({
                    icon: 'success',
                    title: 'Autorización Confirmada',
                    text: 'El estado del ticket ha sido actualizado a "Autorizada".'
                }).then(() => {
                    mostrarTicketsEnCurso(); // Actualizar la lista de tickets después de la autorización
                });
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se puede solicitar autorización. El ticket no tiene una cotización registrada.'
        });
    }
}


function iniciarReparacion(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado) {
        ticketSeleccionado.estado = 'En Reparación';

        Swal.fire({
            icon: 'success',
            title: 'Reparación Iniciada',
            text: `El ticket con ID ${idTicket} ahora está en estado "En Reparación".`
        }).then(() => {
            mostrarTicketsEnCurso(); // Actualizar la lista de tickets después de iniciar la reparación
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se encontró el ticket seleccionado.'
        });
    }
}
function editarCotizacion(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado && ticketSeleccionado.cotizacion) {
        const cotizacion = ticketSeleccionado.cotizacion;

        Swal.fire({
            title: 'Editar Cotización',
            width: '70%', // Ajuste del ancho del cuadro de diálogo
            html: `
                <table id="swal-table-detalle" class="table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Detalle</th>
                            <th>Precio Unitario (S/.)</th>
                            <th>IGV (18%)</th>
                            <th>Total (S/.)</th>
                            <th>Acciones</th> <!-- Columna para botón de eliminación -->
                        </tr>
                    </thead>
                    <tbody>
                        ${cotizacion.detallesCotizacion.map(detalle => `
                            <tr>
                                <td>
                                    <select class="form-control swal-select tipo">
                                        <option value="Servicio" ${detalle.tipo === 'Servicio' ? 'selected' : ''}>Servicio</option>
                                        <option value="Repuesto" ${detalle.tipo === 'Repuesto' ? 'selected' : ''}>Repuesto</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control swal-select detalle">
                                        ${getDetallesOptions(detalle.tipo).map(option => `
                                            <option value="${option}" ${detalle.descripcion === option ? 'selected' : ''}>${option}</option>
                                        `).join('')}
                                    </select>
                                </td>
                                <td><input class="form-control swal-input precio-unitario" type="number" min="0" step="0.10" value="${detalle.precio}"></td>
                                <td><span class="igv">${detalle.igv}</span></td>
                                <td><span class="total">${detalle.total}</span></td>
                                <td><button class="btn btn-danger swal-btn-eliminar">Eliminar</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <button id="swal-btn-agregar" class="btn btn-primary">Agregar detalle</button>
                <hr>
                <div>
                    <strong>Total Cotización (S/.): </strong><span id="swal-total-cotizacion">${cotizacion.total}</span>
                </div>
            `,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Guardar Cambios',
            focusConfirm: false,
            preConfirm: () => {
                // Obtener los detalles actualizados
                const nuevosDetalles = obtenerDetallesCotizacion();
                const nuevoTotal = parseFloat(calcularTotalCotizacion());

                // Actualizar la cotización con los nuevos detalles
                cotizacion.detallesCotizacion = nuevosDetalles;
                cotizacion.total = nuevoTotal;
                cotizacion.precio = (nuevoTotal / 1.18).toFixed(2);
                cotizacion.igv = (cotizacion.precio * 0.18).toFixed(2);

                Swal.fire({
                    icon: 'success',
                    title: 'Cotización Actualizada',
                    text: 'Los detalles de la cotización han sido actualizados correctamente.'
                }).then(() => {
                    mostrarTicketsEnCurso(); // Actualizar la lista de tickets después de guardar los cambios
                });
            }
        });

        // Función para obtener las opciones de detalles basadas en el tipo seleccionado
        function getDetallesOptions(tipo) {
            if (tipo === 'Servicio') {
                return ['Limpieza', 'Cambio de pantalla', 'Cambio de batería', 'Cambio de bocina'];
            } else if (tipo === 'Repuesto') {
                return ['Pantalla', 'Batería', 'Bocina'];
            } else {
                return [];
            }
        }

        // Función para calcular el costo total de la cotización
        function calcularTotalCotizacion() {
            let total = 0;
            const detalles = obtenerDetallesCotizacion();

            detalles.forEach(detalle => {
                total += parseFloat(detalle.total);
            });

            return total.toFixed(2);
        }

        // Función para obtener los detalles de la cotización ingresados por el usuario
        function obtenerDetallesCotizacion() {
            const detalles = [];

            document.querySelectorAll('#swal-table-detalle tbody tr').forEach((tr, index) => {
                const tipo = tr.querySelector('.tipo').value;
                const descripcion = tr.querySelector('.detalle').value;
                const precio = parseFloat(tr.querySelector('.precio-unitario').value);
                const igv = parseFloat(tr.querySelector('.igv').textContent);
                const total = parseFloat(tr.querySelector('.total').textContent);

                if (!isNaN(precio)) {
                    const idDetalle = index + 1; // Generar ID de detalle (puedes cambiar la lógica de generación según necesites)
                    const nuevoDetalle = new DetalleCotizacion(idDetalle, precio, descripcion, tipo);
                    detalles.push(nuevoDetalle);
                }
            });

            return detalles;
        }

        // Evento para agregar un nuevo detalle a la tabla
        document.getElementById('swal-btn-agregar').addEventListener('click', () => {
            agregarFilaDetalle();
        });

        // Función para agregar una nueva fila de detalle
        function agregarFilaDetalle() {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>
                    <select class="form-control swal-select tipo">
                        <option value="Servicio">Servicio</option>
                        <option value="Repuesto">Repuesto</option>
                    </select>
                </td>
                <td>
                    <select class="form-control swal-select detalle">
                        <option value="Limpieza">Limpieza</option>
                        <option value="Cambio de pantalla">Cambio de pantalla</option>
                        <option value="Cambio de batería">Cambio de batería</option>
                        <option value="Cambio de bocina">Cambio de bocina</option>
                        <option value="Pantalla">Pantalla</option>
                        <option value="Batería">Batería</option>
                        <option value="Bocina">Bocina</option>
                    </select>
                </td>
                <td><input class="form-control swal-input precio-unitario" type="number" min="0" step="0.10" placeholder="Precio unitario"></td>
                <td><span class="igv">0.00</span></td>
                <td><span class="total">0.00</span></td>
                <td><button class="btn btn-danger swal-btn-eliminar">Eliminar</button></td>
            `;
            document.querySelector('#swal-table-detalle tbody').appendChild(newRow);

            // Actualizar opciones de detalles al cambiar el tipo
            newRow.querySelector('.tipo').addEventListener('change', (event) => {
                const tipo = event.target.value;
                const detalleSelect = newRow.querySelector('.detalle');
                detalleSelect.innerHTML = getDetallesOptions(tipo).map(option => `
                    <option value="${option}">${option}</option>
                `).join('');
            });

            // Actualizar totales al cambiar el precio unitario
            newRow.querySelector('.precio-unitario').addEventListener('input', () => {
                actualizarTotales(newRow);
            });

            // Evento para eliminar fila
            newRow.querySelector('.swal-btn-eliminar').addEventListener('click', () => {
                document.querySelector('#swal-table-detalle tbody').removeChild(newRow);
                // Recalcular totales al eliminar fila
                document.getElementById('swal-total-cotizacion').textContent = calcularTotalCotizacion();
            });

            // Calcular totales iniciales
            actualizarTotales(newRow);
        }

        // Función para actualizar los totales de IGV y total al cambiar el precio unitario
        function actualizarTotales(row) {
            const precioUnitario = parseFloat(row.querySelector('.precio-unitario').value);
            let igv = 0;
            let total = 0;
            if (!isNaN(precioUnitario)) {
                igv = (precioUnitario * 0.18).toFixed(2);
                total = (precioUnitario + parseFloat(igv)).toFixed(2);
            }

            row.querySelector('.igv').textContent = igv;
            row.querySelector('.total').textContent = total;

            // Actualizar total general de la cotización
            document.getElementById('swal-total-cotizacion').textContent = calcularTotalCotizacion();
        }

        // Agregar la primera fila de detalle al abrir el modal
        agregarFilaDetalle();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se encontró la cotización del ticket seleccionado.'
        });
    }
}

function terminarReparacion(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado) {
        ticketSeleccionado.estado = 'Reparación Atendida';

        Swal.fire({
            icon: 'success',
            title: 'Reparación Terminada',
            text: `El ticket con ID ${idTicket} ahora está en estado "Reparación Atendida".`
        }).then(() => {
            mostrarTicketsEnCurso(); // Actualizar la lista de tickets después de terminar la reparación
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se encontró el ticket seleccionado.'
        });
    }
}

function procesarPago(idTicket) {
    const ticketSeleccionado = ticketsSimulados.find(ticket => ticket.idTicket === idTicket);

    if (ticketSeleccionado) {
        Swal.fire({
            title: 'Procesar Pago',
            html: `
                <label for="tipoPago">Seleccione el tipo de pago:</label>
                <select id="tipoPago" class="form-control">
                    <option value="POS">POS</option>
                    <option value="Efectivo">Efectivo</option>
                </select>
            `,
            showCancelButton: true,
            confirmButtonText: 'Confirmar Pago',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const tipoPago = document.getElementById('tipoPago').value;
                return tipoPago;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const tipoPago = result.value;
                ticketSeleccionado.tipoPago = tipoPago;
                ticketSeleccionado.pagoAdelantado = 0;
                ticketSeleccionado.pagoPendiente = 0;
                ticketSeleccionado.totalPago = ticketSeleccionado.cotizacion.total;
                ticketSeleccionado.estado = 'Cerrado';

                Swal.fire({
                    icon: 'success',
                    title: 'Pago Procesado',
                    text: `El ticket con ID ${idTicket} ahora está en estado "Cerrado". Tipo de pago: ${tipoPago}`
                }).then(() => {
                    mostrarTicketsEnCurso(); // Actualizar la lista de tickets después de procesar el pago
                });
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se encontró el ticket seleccionado.'
        });
    }
}

function verificarBloqueo(numSerie, IMEI){
    const random = Math.random();
    
    // Simula el bloqueo con una probabilidad del 20%
    if (random <= 0.2) {
        return true; // Celular bloqueado
    } else {
        return false; // Celular no bloqueado
    }
}

// Función para mostrar la pantalla de inicio de sesión al cargar la página
$(document).ready(function() {
    Swal.fire({
        title: 'Ingrese sus credenciales',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Usuario">' +
          '<input id="swal-input2" type="password" class="swal2-input" placeholder="Contraseña">',
        focusConfirm: false,
        preConfirm: () => {
            const usuario = Swal.getPopup().querySelector('#swal-input1').value;
            const contraseña = Swal.getPopup().querySelector('#swal-input2').value;
            iniciarSesion(usuario, contraseña); // Llamar función de inicio de sesión
        }
    });
});

function getDate(){
    to_day = new Date();
    day = to_day.getDate();
    month = to_day.getMonth()+1;
    year =  to_day.getFullYear();
    return String(day+'/'+month+'/'+year);
}