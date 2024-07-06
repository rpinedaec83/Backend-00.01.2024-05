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


//MODELO DEL CLIENTE
class Cliente{
    constructor(dueno, modeloDeCelular, numeroDeSerie, imei, bateria, pantalla, camara, botones){
        this.dueno = dueno;
        this.modeloDeCelular = modeloDeCelular;
        this.numeroDeSerie = numeroDeSerie;
        this.imei = imei;
        this.bateria = bateria;
        this.pantalla = pantalla;
        this.camara = camara;
        this.botones = botones;
    }
}
//LISTA DE TECNICOS
let tecnicos = [
    {
        nombre: "Jose",
        segundoNombre: "Carlos",
        especialidad: "Iphone",
        tiempoExperiencia: 3,
        movilesArreglados: 51,
    },
    {
        nombre: "Mario",
        segundoNombre: "Andres",
        especialidad: "Samsung",
        tiempoExperiencia: 2,
        movilesArreglados: 40,
    },
    {
        nombre: "Sharon",
        segundoNombre: "Karina",
        especialidad: "Nokia",
        tiempoExperiencia: 4,
        movilesArreglados: 33,
    },
    {
        nombre: "Rafael",
        segundoNombre: "Matias",
        especialidad: "Motorola",
        tiempoExperiencia: 6,
        movilesArreglados: 78,
    },
    {
        nombre: "Carlos",
        segundoNombre: "Alberto",
        especialidad: "LG",
        tiempoExperiencia: 3,
        movilesArreglados: 45,
    },
    {
        nombre: "Sandro",
        segundoNombre: "Antonio",
        especialidad: "Huawei",
        tiempoExperiencia: 3,
        movilesArreglados: 51,
    },
    {
        nombre: "Diego",
        segundoNombre: "Javier",
        especialidad: "Sony",
        tiempoExperiencia: 3,
        movilesArreglados: 51,
    },
    {
        nombre: "Matias",
        segundoNombre: "Alfredo",
        especialidad: "Xiaomi",
        tiempoExperiencia: 3,
        movilesArreglados: 51,
    }
]



//Funcion para mostrar todos los tecnicos
function mostrarTecnicos(){
    const lista = document.getElementById('mostrarTecnicos');
    tecnicos.forEach(tecnico => {
        const tecnicoDiv = document.createElement('div');
        tecnicoDiv.innerHTML = `
            <h3>Técnico: ${tecnico.nombre} ${tecnico.segundoNombre}.</h3>
            <p>Especialidad: ${tecnico.especialidad}.</p>
            <p>Tiempo de Experiencia: ${tecnico.tiempoExperiencia} años.</p>
            <p>Móviles Arreglados: ${tecnico.movilesArreglados}.</p>
            <hr>
        `;
        lista.appendChild(tecnicoDiv);
    })
}
window.onload = mostrarTecnicos;

//Funcion para mostrar el tecnico que coincida con el modelo del equipo del cliente
function mostrarTecnicoEspecialista(cliente, contenedor){
    // const tecnicoAdecuado = tecnicos.find(tecnico => tecnico.especialidad.toLowerCase() === modeloDeCelular.toLowerCase());
    const tecnicoAdecuado = tecnicos.find(tecnico => tecnico.especialidad.toLowerCase() === cliente.modeloDeCelular.toLowerCase());

    if (tecnicoAdecuado) {
        swal("Técnico Recomendado", `El técnico recomendado para reparar un ${cliente.modeloDeCelular} es ${tecnicoAdecuado.nombre} ${tecnicoAdecuado.segundoNombre}.`, "info");

        //Lista de componentes malos
        let componentesMal = [];
        if (cliente.bateria === 'false') componentesMal.push('Batería');
        if (cliente.pantalla === 'false') componentesMal.push('Pantalla');
        if (cliente.camara === 'false') componentesMal.push('Cámara');
        if (cliente.botones === 'false') componentesMal.push('Botones');
        //Creamos el HTML para mostrar los componentes que están mal
        let componentesMalHTML = '';
        if(componentesMal.length > 0){
            componentesMalHTML = `
                <p>Componentes para reparar:</p>
                <ul>
                    ${componentesMal.map(componente => `<li>${componente}</li>`).join('')}
                </ul>
            `;
        }

        const tecnicoInfo = `
            <h3>Técnico recomendado para reparar: ${tecnicoAdecuado.nombre} ${tecnicoAdecuado.segundoNombre}</h3>
            <p>Especialidad: ${tecnicoAdecuado.especialidad}</p>
            <p>Tiempo de Experiencia: ${tecnicoAdecuado.tiempoExperiencia}</p>
            <p>Móviles Reparados: ${tecnicoAdecuado.movilesArreglados}</p>
            ${componentesMalHTML}
            <hr>
        `;
        contenedor.insertAdjacentHTML('beforeend', tecnicoInfo);
    } else {
        swal("Técnico No Encontrado", `No se encontró un técnico especializado para reparar un ${modeloDeCelular}.`, "warning");
    }
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById('dueno').value = '';
    document.getElementById('modeloDeCelular').value = '';
    document.getElementById('numeroDeSerie').value = '';
    document.getElementById('imei').value = '';
    document.getElementById('bateria').value = 'true';
    document.getElementById('pantalla').value = 'true';
    document.getElementById('camara').value = 'true';
    document.getElementById('botones').value = 'true';
}

//Funcion para mostrar el primer diagnostico
function mostrarDatos(cliente){
    const mostrarDatosAdd = document.getElementById('mostrarDatos');
    mostrarDatosAdd.innerHTML = ''; //limpia el codigo anterior
    mostrarDatosAdd.insertAdjacentHTML('beforeend', `
        <h2>Diagnóstico N°1 del móvil:</h2>
        <ul>
            <li><strong>Dueño: </strong>${cliente.dueno}</li>
            <li><strong>Modelo de Móvil: </strong>${cliente.modeloDeCelular}</li>
            <li><strong>Número de serie: </strong>${cliente.numeroDeSerie}</li>
            <li><strong>IMEI: </strong>${cliente.imei}</li>
            <li><strong>Batería: </strong>${cliente.bateria === 'true' ? 'Bien' : 'Mal'}</li>
            <li><strong>Pantalla: </strong>${cliente.pantalla === 'true' ? 'Bien' : 'Mal'}</li>
            <li><strong>Cámara: </strong>${cliente.camara === 'true' ? 'Bien' : 'Mal'}</li>
            <li><strong>Botones: </strong>${cliente.botones === 'true' ? 'Bien' : 'Mal'}</li>
        </ul>
        <p>Ingrese autorización con abonado de 50% para reparar su celular</p>
        <label>Ingrese firma: </label>
        <input type="text" id="autorizacion" placeholder="Ingrese firma">
        <br>
        <label for="monto">Ingrese el abonado del 50% (Monto total 100soles.):</label>
        <input type="number" id="monto" name="monto" min="1" max="100">
        <button id="validar">Validar y Guardar</button>
    `);

    //Mostrar el tecnico especialista adecuado
    mostrarTecnicoEspecialista(cliente, mostrarDatosAdd);

    document.getElementById('validar').addEventListener('click', function(event){
        event.preventDefault(); // impide la acción predeterminada del botón
        validarGuardarYReparar(cliente);
    });

    
}


// Funcion para guardar los datos del formulario
function guardarDatos(){
    let dueno = document.getElementById('dueno').value;
    let modeloDeCelular = document.getElementById('modeloDeCelular').value;
    let numeroDeSerie = document.getElementById('numeroDeSerie').value;
    let imei = document.getElementById('imei').value;
    let bateria = document.getElementById('bateria').value;
    let pantalla = document.getElementById('pantalla').value;
    let camara = document.getElementById('camara').value;
    let botones = document.getElementById('botones').value;

    //verificamos si el numero de SERIE o IMEI estan bloqueados
    if (numerosReportados.numerosDeSerie[numeroDeSerie] || numerosReportados.imeis[imei]){
        swal("Error", "El número de serie o IMEI están bloqueados.", "error");
        return;
    }
    if (!(bateria === 'false' || pantalla === 'false' || camara === 'false' || botones === 'false')) {
        swal("Error", "Al menos uno de los componentes debe estar en mal estado.", "error");
        return;
    }

    //Creamos una instancia de Cliente
    let cliente = new Cliente(dueno, modeloDeCelular, numeroDeSerie, imei, bateria, pantalla, camara, botones);

    //Lo guardamos en la lista de clientes
    clientes.push(cliente);

    swal("Datos guardados", "El móvil se registro exitosamente.", "success")
    .then(() => {
        limpiarCampos();
        mostrarDatos(cliente);
    })

    //Vemos por consola
    console.log(clientes);
}

// Funcion para validar y guardar la autorización con el abonado del formulario 
function validarGuardarYReparar(cliente) {
    let autorizacion = document.getElementById('autorizacion').value;
    let monto = document.getElementById('monto').value;

    if (autorizacion !== cliente.dueno) {
        swal("Error", "La firma debe coincidir con el nombre del dueño.", "error");
        return;
    }

    if (monto < 50) {
        swal("Error", "El monto minimo es del 50%.", "error");
        return;
    }

    // Si todas las validaciones son exitosas, guardar los datos
    swal("Datos validados y guardados", "El diagnóstico y autorización han sido registrados exitosamente, empezamos a reparar el equipo móvil", "success");

    //Actualizar el estado de los componentes a "Bien"
    cliente.bateria = 'true';
    cliente.pantalla = 'true';
    cliente.camara = 'true';
    cliente.botones = 'true';

    // Mostrar el HTML con los componentes reparados y el input para el monto restante
    const mostrarDatosAdd = document.getElementById('mostrarDatos');
    mostrarDatosAdd.innerHTML = ''; // Limpiar el contenido anterior
    mostrarDatosAdd.insertAdjacentHTML('beforeend', `
        <h2>Reparación Completa</h2>
        <p>Todos los componentes han sido reparados:</p>
        <ul>
            <li>Batería: Bien</li>
            <li>Pantalla: Bien</li>
            <li>Cámara: Bien</li>
            <li>Botones: Bien</li>
        </ul>
        <label for="montoRestante">Ingrese el monto restante para completar el pago (Total: 100 soles):</label>
        <input type="number" id="montoRestante" name="montoRestante" min="1" max="${100 - monto}">
        <button id="pagarResto">Pagar resto de la reparación</button>
    `);

    document.getElementById('pagarResto').addEventListener('click', function(event){
        event.preventDefault(); // Impide la acción predeterminada del botón
        let montoRestante = document.getElementById('montoRestante').value;
        if (parseInt(monto) + parseInt(montoRestante) >= 100) {
            swal("Reparación Exitosa", "La reparación ha sido completada y el monto total ha sido pagado.", "success");
        } else {
            swal("Error", "El monto total no ha sido completado. Por favor, ingrese el monto restante.", "error");
        }
    });
}

//Evento para el boton de GUARDAR DATOS
document.getElementById('guardar').addEventListener('click', function(event){
    event.preventDefault(); //impide la acción prederteminada del enlae
    guardarDatos();
});