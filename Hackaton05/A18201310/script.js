//Registro de numeros de serie e IMEIs bloqueados
const numerosReportados = Object.freeze({
    numerosDeSerie: {
        111111111: true,
        222222222: true,
        333333333: true,
        444444444: true,
        555555555: true,
    },
    imeis: {
        111111111: true,
        222222222: true,
        333333333: true,
        444444444: true,
        555555555: true,
    }
});

//ARRAY DE CLIENTES
let clientes = [];

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById('dueno').value = '';
    document.getElementById('modeloDeTelefono').value = '';
    document.getElementById('numeroDeSerie').value = '';
    document.getElementById('imei').value = '';
    document.getElementById('bateria').value = '';
    document.getElementById('pantalla').value = '';
    document.getElementById('camara').value = '';
    document.getElementById('botones').value = '';
}






//MODELO DEL CLIENTE - CLASE PADRE
class Cliente{
    constructor(dueno, modeloDeTelefono, numeroDeSerie, imei, bateria, pantalla, camara, botones){
        this.dueno = dueno;
        this.modeloDeTelefono = modeloDeTelefono;
        this.numeroDeSerie = numeroDeSerie;
        this.imei = imei;
        this.bateria = bateria;
        this.pantalla = pantalla;
        this.camara = camara;
        this.botones = botones;
        this.diagnostico = [];
    }
}

//Función para guardar los datos del formulario
function guardarDatos(){
    //capturar los datos del formulario
    let dueno = document.getElementById('dueno').value;
    let modeloDeTelefono = document.getElementById('modeloDeTelefono').value;
    let numeroDeSerie = document.getElementById('numeroDeSerie').value;
    let imei = document.getElementById('imei').value;
    let bateria = document.getElementById('bateria').value;
    let pantalla = document.getElementById('pantalla').value;
    let camara = document.getElementById('camara').value;
    let botones = document.getElementById('botones').value;

    // Verificar si el número de serie o IMEI están bloqueados
    if (numerosReportados.numerosDeSerie[numeroDeSerie] || numerosReportados.imeis[imei]) {
        swal("Error", "El número de serie o IMEI están bloqueados.", "error");
        return; // Salir de la función si están bloqueados
    }

    //crear una instancia del Cliente con los datos
    let cliente = new Cliente(dueno, modeloDeTelefono, numeroDeSerie, imei, bateria, pantalla, camara, botones);

    //almacenarlo en el array de los clientes
    clientes.push(cliente);

    // Mostrar mensaje de éxito con SweetAlert
    // Mostrar mensaje de éxito con SweetAlert
    swal("Datos guardados", "El móvil ha sido registrado correctamente.",  "success")
    .then(() => {
        // Limpiar los campos del formulario después de cerrar el mensaje
        limpiarCampos();
        mostrarDatos(cliente);
    });

    // Mostrar en consola para verificar
    console.log("Clientes guardados:");
    console.log(clientes);
}

// Función para mostrar los datos en la sección de mostrar datos
function mostrarDatos(cliente) {
    const mostrarDatosDiv = document.getElementById('mostrarDatos');
    mostrarDatosDiv.innerHTML = `
        <h2>Datos del móvil registrado</h2>
        <ul>
            <li><strong>Dueño:</strong> ${cliente.dueno}</li>
            <li><strong>Modelo de Teléfono:</strong> ${cliente.modeloDeTelefono}</li>
            <li><strong>Número de Serie:</strong> ${cliente.numeroDeSerie}</li>
            <li><strong>IMEI:</strong> ${cliente.imei}</li>
            <li><strong>Batería:</strong> ${cliente.bateria ? 'Bien' : 'Mal'}</li>
            <li><strong>Pantalla:</strong> ${cliente.pantalla ? 'Bien' : 'Mal'}</li>
            <li><strong>Cámara:</strong> ${cliente.camara ? 'Bien' : 'Mal'}</li>
            <li><strong>Botones:</strong> ${cliente.botones ? 'Bien' : 'Mal'}</li>
        </ul>
    `;
}



//Evento para el boton GUARDAR DATOS
document.getElementById('guardar').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir la acción predeterminada del enlace
    guardarDatos();
});


//MODELO DEL DIAGNOSTICO
class Diagnostico extends Cliente{
    constructor(cliente){
        this.cliente = cliente;
    }

    reparar(){
        if (!this.cliente.bateria) {
            this.cliente.diagnostico.push('Batería');
            this.cliente.bateria = true;
        }
        if (!this.cliente.pantalla) {
            this.cliente.diagnostico.push('Pantalla');
            this.cliente.pantalla = true;
        }
        if (!this.cliente.camara) {
            this.cliente.diagnostico.push('Cámara');
            this.cliente.camara = true;
        }
        if (!this.cliente.botones) {
            this.cliente.diagnostico.push('Botones');
            this.cliente.botones = true;
        }
    }
}