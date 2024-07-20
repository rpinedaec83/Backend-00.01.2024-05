

const marcas = ['Apple', 'Samsung', 'Xiaomi'];

const tipoDocumentos = ['DNI', 'Pasaporte', 'RUC', 'Carnet de Extranjería'];

const cotizaciones = [];

// Datos simulados
const contacto = new Usuario(0, 'rpineda', 'Roberto', 'Pineda', 'Lopez','DNI', '42126547','San Isidro', 'Ca. Tradiciones 220', 'rpineda@email.com');

contacto.cambiarPassword('123456');

const sucursales = [
    new Sucursal(1, 'Sucursal 1', 'Jr. La Arboleda 892, Surco', contacto),
    new Sucursal(2, 'Sucursal 2', 'Av. Javier Prado 342, San Isidro', contacto),
    new Sucursal(3, 'Sucursal 3', 'Av. La Mar 389, San Miguel', contacto)
];

const usuariosSimulados = [
    contacto,
    new Usuario(1, 'tlannister', 'Tyrion', 'Lannister', '', 'DNI', '12345678', 'Lima', 'Av. Principal 123', 'tlannister@email.com'),
    new Usuario(2, 'jsnow' ,'Jon', 'Snow', '', 'DNI', '23456789', 'Lima', 'Av. Principal 234', 'jsnow@email.com'),
    new Usuario(3, 'astark' ,'Arya', 'Stark', '', 'DNI', '34567890', 'Lima', 'Av. Principal 345', 'astark@email.com'),
    new Usuario(4, 'dtargaryen' ,'Daenerys', 'Targaryen', '', 'DNI', '45678901', 'Lima', 'Av. Principal 456', 'dtargaryen@email.com'),
 ];

 const clientesSimulados = [
    new Usuario(5, '','Rhaenyra', 'Targaryen', '', 'DNI', '87654321', 'Lima', 'Av. Javier Prado 123', 'rtargaryen@email.com'),
    new Usuario(6, '','Aemond', 'Targaryen', '', 'DNI', '76543218', 'Lima', 'Av. Javier Prado 234', 'atargaryen@email.com'),
    new Usuario(7, '','Helaena ', 'Targaryen', '', 'DNI', '65432187', 'Lima', 'Av. Javier Prado 345', 'htargaryen@email.com'),
    new Usuario(8, '','Daemon', 'Targaryen', '', 'DNI', '54321876', 'Lima', 'Av. Javier Prado 456', 'datargaryen@email.com'),
    new Usuario(9, '','Aegon', 'Targaryen', '', 'DNI', '43218765', 'Lima', 'Av. Javier Prado 567', 'aedtargaryen@email.com'),
    new Usuario(10, '','Viserys', 'Targaryen', '', 'DNI', '32187654', 'Lima', 'Av. Javier Prado 678', 'vtargaryen@email.com'),
    new Usuario(11, '','Jaehaera', 'Targaryen', '', 'DNI', '21876543', 'Lima', 'Av. Javier Prado 789', 'jtargaryen@email.com'),
    new Usuario(12, '','Jaehaerys', 'Targaryen', '', 'DNI', '18765432', 'Lima', 'Av. Javier Prado 890', 'jatargaryen@email.com'),
    new Usuario(13, '','Maelor', 'Targaryen', '', 'DNI', '87654320', 'Lima', 'Av. Javier Prado 901', 'mtargaryen@email.com')
 ];

const tecnicosSimulados = [
    new Tecnico(14, 'ohightower','Otto', 'Hightower', '', 'DNI', '14725836', 'Lima', 'Av. La Mar 741', 'ohightower@email.com',1200),
    new Tecnico(15, 'cvelaryon','Corlys', 'Velaryon', '', 'DNI', '96385274', 'Lima', 'Av. La Mar 258', 'cvelaryon@email.com',1000),
    new Tecnico(16, 'ecargyll','Erryk', 'Cargyll', '', 'DNI', '85214796', 'Lima', 'Av. La Mar 625', 'ecargyll@email.com',1100),
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
let revision8 = new Revision(8,tecnicosSimulados[0]);

revision2.tipoDiagnostico = 'Pantalla rota'; revision2.comentarios = 'Se debe reemplazar la pantalla';
revision3.tipoDiagnostico = 'Batería dañana'; revision3.comentarios = 'Se debe reemplazar la batería';
revision4.tipoDiagnostico = 'Bocina dañana'; revision4.comentarios = 'Se debe reemplazar las bocinas';
revision5.tipoDiagnostico = 'Pantalla rota'; revision5.comentarios = 'Se debe reemplazar la pantalla';
revision6.tipoDiagnostico = 'Pantalla rota'; revision6.comentarios = 'Se debe reemplazar la pantalla';
revision7.tipoDiagnostico = 'Pantalla rota'; revision7.comentarios = 'Se debe reemplazar la pantalla';
revision8.tipoDiagnostico = 'Batería dañana'; revision8.comentarios = 'Se debe reemplazar la batería';


tecnicosSimulados[1].agregarSkill(new Skill(1, 'Apple', 'Reemplazo de Pantalla'));
tecnicosSimulados[1].agregarSkill(new Skill(2, 'Apple', 'Reemplazo de Batería'));
tecnicosSimulados[1].agregarSkill(new Skill(3, 'Apple', 'Reemplazo de Bocina'));
tecnicosSimulados[1].agregarSkill(new Skill(4, 'Samsung', 'Reemplazo de Pantalla'));
tecnicosSimulados[1].agregarSkill(new Skill(5, 'Samsung', 'Reemplazo de Batería'));
tecnicosSimulados[1].agregarSkill(new Skill(6, 'Samsung', 'Reemplazo de Bocina'));
tecnicosSimulados[2].agregarSkill(new Skill(1, 'Xiaomi', 'Reemplazo de Pantalla'));
tecnicosSimulados[2].agregarSkill(new Skill(2, 'Xiaomi', 'Reemplazo de Batería'));
tecnicosSimulados[2].agregarSkill(new Skill(3, 'Xiaomi', 'Reemplazo de Bocina'));

let mantenimiento1 = new Mantenimiento(1,tecnicosSimulados[1]);
let mantenimiento2 = new Mantenimiento(2,tecnicosSimulados[1]);
let mantenimiento3 = new Mantenimiento(3,tecnicosSimulados[2]);
let mantenimiento4 = new Mantenimiento(4,tecnicosSimulados[2]);

mantenimiento3.tipoMantenimiento = 'Reemplazo de pantalla'; mantenimiento3.observaciones = 'Se reemplazó la pantalla correctamente';
mantenimiento4.tipoMantenimiento = 'Reemplazo de batería'; mantenimiento4.observaciones = 'Se reemplazó la batería correctamente';


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

let cotizacion8 = new Cotizacion(6, 90.00, 16.20, 106.20);
cotizacion8.detallesCotizacion.push(new DetalleCotizacion(1, 45.00, 'Cambio de bocina', 'Servicio', 'Cambio de bocina'));
cotizacion8.detallesCotizacion.push(new DetalleCotizacion(2, 45.00, 'Bateria', 'Repuesto', 'Bateria'));

cotizaciones.push(cotizacion1, cotizacion2, cotizacion3, cotizacion4, cotizacion5, cotizacion6, cotizacion7);

ticketsSimulados[1].agregarRevision(revision1);

ticketsSimulados[2].agregarRevision(revision2);
ticketsSimulados[2].actualizaCotizacion(cotizacion2);

ticketsSimulados[3].agregarRevision(revision3);
ticketsSimulados[3].actualizaCotizacion(cotizacion3);

ticketsSimulados[4].agregarRevision(revision4);
ticketsSimulados[4].autorizarMantenimiento();
ticketsSimulados[4].actualizaCotizacion(cotizacion4);
ticketsSimulados[4].pagoAdelantado=ticketsSimulados[4].cotizacion.total*0.5;
ticketsSimulados[4].pagoPendiente=ticketsSimulados[4].cotizacion.total*0.5;

ticketsSimulados[5].agregarRevision(revision5);
ticketsSimulados[5].autorizarMantenimiento();
ticketsSimulados[5].actualizaCotizacion(cotizacion5);
ticketsSimulados[5].agregarMantenimiento(mantenimiento1);
ticketsSimulados[5].pagoAdelantado=ticketsSimulados[5].cotizacion.total*0.5;
ticketsSimulados[5].pagoPendiente=ticketsSimulados[5].cotizacion.total*0.5;

ticketsSimulados[6].agregarRevision(revision6);
ticketsSimulados[6].autorizarMantenimiento();
ticketsSimulados[6].agregarMantenimiento(mantenimiento2);
ticketsSimulados[6].actualizaCotizacion(cotizacion6);
ticketsSimulados[6].pagoAdelantado=ticketsSimulados[6].cotizacion.total*0.5;
ticketsSimulados[6].pagoPendiente=ticketsSimulados[6].cotizacion.total*0.5;

ticketsSimulados[7].agregarRevision(revision7);
ticketsSimulados[7].autorizarMantenimiento();
ticketsSimulados[7].agregarMantenimiento(mantenimiento3);
ticketsSimulados[7].actualizaCotizacion(cotizacion7);
ticketsSimulados[7].pagoAdelantado=ticketsSimulados[7].cotizacion.total*0.5;
ticketsSimulados[7].pagoPendiente=ticketsSimulados[7].cotizacion.total*0.5;

ticketsSimulados[8].agregarRevision(revision8);
ticketsSimulados[8].autorizarMantenimiento();
ticketsSimulados[8].agregarMantenimiento(mantenimiento4);
ticketsSimulados[8].actualizaCotizacion(cotizacion8);
ticketsSimulados[8].totalPago=ticketsSimulados[8].cotizacion.total;
ticketsSimulados[8].agregarTipoPago('POS');


let loginform = document.getElementById('login-form');


loginform.addEventListener('submit',function login(e){
    e.preventDefault();

    let txtusername = document.getElementById('txtusername');
    let txtpassword = document.getElementById('txtpassword');
    let chbrememberme = document.getElementById('chbrememberme');
    let msjerror = document.getElementById('msjerror');

    let usuarioEncontrado = usuariosSimulados.find(usuario => usuario.username === txtusername.value && usuario.password === txtpassword.value);
    
    if (usuarioEncontrado) {
        usuarioEncontrado.cambiarPassword('******')
        if (typeof (Storage) !== 'undefined') {
            //Almacenamiento en local storage
            if (!localStorage.getItem('marcas')){
                localStorage.setItem('marcas', JSON.stringify(marcas));
            }
            if (!localStorage.getItem('tipoDocumentos')){
                localStorage.setItem('tipoDocumentos', JSON.stringify(tipoDocumentos));
            }

            //Almacenamiento en session storage
            sessionStorage.setItem('usuario', JSON.stringify(usuarioEncontrado)); 

            if(chbrememberme.checked){
                sessionStorage.setItem('login', JSON.stringify({login:true}));
            }
            else{
                sessionStorage.setItem('login', JSON.stringify({login:false}));
            }


            const sucursal = sucursales[Math.floor(Math.random() * sucursales.length)];
            sucursal.setClientes(clientesSimulados);
            sucursal.setTecnicos(tecnicosSimulados);
            sucursal.setTickets(ticketsSimulados);
            
            sessionStorage.setItem('sucursal', JSON.stringify(sucursal));

            sessionStorage.setItem('cotizaciones', JSON.stringify(cotizaciones));

            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: `Bienvenido, ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellidoPaterno}`,
                footer: `Sucursal: ${sucursal.nombre}`
            }).then(() => {
                window.location.replace('./index.html');
            });
        } else {
            return msjerror.innerText = 'Ha ocurrido un problema';
        }
    } else {
        return msjerror.innerText = 'Usuario o Password incorrecto';
    }

});


 