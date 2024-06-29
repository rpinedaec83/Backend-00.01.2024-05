const Reserva = function () //a
{
    let Ciudad;
    let Nombre;
    let arrAviones = [];

    function configurar(){
        $("#aerolinea").text(Nombre);
        $("#ciudad").text(Ciudad);
        crearAviones();
    }

    function crearAviones() {
        let objAvion = new Aviones("LIM-009", "Airbus 320 Neo", 186, 90, 502.69);
        arrAviones.push(objAvion);
        let objAvion1 = new Aviones("UIO-011", "Airbus 319", 124, 62, 502.69);
        arrAviones.push(objAvion1);
    }

    function eventos() {
        console.log("Escuchando los eventos")
        $("#reservar").on("click", reservar);
        $("#reservar2").on("click", reservar2);
      
    }

    function dibujarReserva(reserva){
        console.log(reserva);
        $("#idaNombre").val(reserva.avionIda.arrPasajeros[0].nombres);
        $("#idaApellido").val(reserva.avionIda.arrPasajeros[0].apellidos);
        $("#idaFecha").val(reserva.fechaIda);
        $("#idaVuelo").val(reserva.avionIda.matricula);
        $("#idaOrigen").val(reserva.origen);
        

        $("#retNombre").val(reserva.avionVuelta.arrPasajeros[0].nombres);
        $("#retApellido").val(reserva.avionVuelta.arrPasajeros[0].apellidos);
        $("#retFecha").val(reserva.fechaVuelta);
        $("#retVuelo").val(reserva.avionVuelta.matricula);
        $("#retDestino").val(reserva.destino);
        
        $("#divReserva").show();

    }

   
                
              

                async function reservar() {
                    console.log("Empieza el proceso de reserva de vuelos");
                    $("#divReserva").hide();
                    const { value: formValues } = await Swal.fire({
                        title: "Ingresa información del telefono",
                        icon: "info",
                        html: `
                            <label class="col-md-4 control-label" for="textinput">Numero de Serie</label>  
                            <input id="origen" class="swal2-input">
                            <label class="col-md-4 control-label" for="textinput">IMEI DEL TELEFONO</label>  
                            <input id="destino" class="swal2-input">
                        `,
                        showCloseButton: true,
                        showCancelButton: true,
                        confirmButtonText: "Guardar",
                        denyButtonText: `Cancelar`,
                        preConfirm: () => {
                            const origen = document.getElementById("origen").value;
                            const destino = document.getElementById("destino").value;
                
                            const stringSERIE = "12345";
                            const stringIMEI = "123";
                
                            if (origen === stringSERIE && destino === stringIMEI) {
                                Swal.showValidationMessage("LA SERIE Y EL IMEI ESTAN COMO REPORTADOS EN EL SERVICIO");
                                return false;
                            }
                
                            return {
                                origen: origen,
                                destino: destino
                            };
                        }
                    });
                
                    if (formValues) {
                        let reserva = new Reservas(formValues.origen, formValues.destino);
                        let objPasajero = await agregarPasajeros2();
                       
                            reserva.asignarAvionIda(arrAviones[0]);
                            reserva.asignarAvionVuelta(arrAviones[1]);
                            reserva.avionIda.agregarPasajeros2(objPasajero);
                            reserva.avionVuelta.agregarPasajeros2(objPasajero);
                            dibujarReserva(reserva);
                            let pasajero3 = await agregarPasajeros3();
                    }
                }


                async function reservar2() {
                    console.log("");
                    $("#divReserva").hide();
                    const { value: formValues } = await Swal.fire({
                        title: "Ingresa información del telefono",
                        icon: "info",
                        html: `
                            <label class="col-md-4 control-label" for="textinput">Numero de Serie</label>  
                            <input id="origen" class="swal2-input">
                            <label class="col-md-4 control-label" for="textinput">IMEI DEL TELEFONO</label>  
                            <input id="destino" class="swal2-input">
                        `,
                        showCloseButton: true,
                        showCancelButton: true,
                        confirmButtonText: "Guardar",
                        denyButtonText: `Cancelar`,
                        preConfirm: () => {
                            const origen = document.getElementById("origen").value;
                            const destino = document.getElementById("destino").value;
                
                            const stringSERIE = "1234567";
                            const stringIMEI = "1234";
                
                            if (origen === stringSERIE && destino === stringIMEI) {
                                Swal.showValidationMessage("LA SERIE Y EL IMEI ESTAN COMO REPORTADOS EN EL SERVICIO");
                                return false;
                            }
                
                            return {
                                origen: origen,
                                destino: destino
                            };
                        }
                    });
                
                    if (formValues) {
                        let reserva = new Reservas(formValues.origen, formValues.destino);
                        let objPasajero = await agregarPasajeros2();
                       
                            reserva.asignarAvionIda(arrAviones[0]);
                            reserva.asignarAvionVuelta(arrAviones[1]);
                            reserva.avionIda.agregarPasajeros2(objPasajero);
                            reserva.avionVuelta.agregarPasajeros2(objPasajero);
                            dibujarReserva(reserva);
                            let pasajero3 = await agregarPasajeros3();
                    }
                }

                
    async function agregarPasajeros() {
        console.log("Agregar Pasajeros");

        const { value: formValues } = await Swal.fire({
            title: "Ingresa descripción de la primera revisión del celular",
            icon: "icon",
            html: `
            <label class="col-md-4 control-label" for="textinput">Descripción</label>  
            <input id="nombre" class="swal2-input">
                
            `,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `Cancelar`,
            preConfirm: () => {
                return {
                    nombre:  document.getElementById("nombre").value,
                    
                };
            }
        });
        if (formValues) {
            let pasajero =new Pasajeros(formValues.nombre, formValues.apellido, formValues.documento);
            return pasajero;
        }
    }

    async function agregarPasajeros3() {
        console.log("Agregar Pasajeros");

        const { value: formValues } = await Swal.fire({
            title: "CONDICIONES",
            icon: "info",
            html: `
            <label class="col-md-4 control-label" for="textinput">AUTORIZACIÓN</label>  
            <input id="nombre" class="swal2-input">
             <label class="col-md-4 control-label" for="textinput">PAGO 50%</label>  
            <input id="apellido" class="swal2-input">   
            `,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `Cancelar`,
            preConfirm: () => {
                return {
                    nombre:  document.getElementById("nombre").value,
                    apellido:  document.getElementById("apellido").value,
                };
            }
        });
        if (formValues) {
            let pasajero =new Pasajeros(formValues.nombre, formValues.apellido, formValues.documento);
            return pasajero;
        }
    }

    async function agregarPasajeros2() {
        console.log("Agregar Pasajeros");

        const { value: formValues } = await Swal.fire({
            title: "Ingresa descripción de la primera revisión del celular",
            icon: "info",
            html: `
            <label class="col-md-4 control-label" for="textinput">Descripción</label>  
            <input id="nombre" class="swal2-input">
                
            `,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `Cancelar`,
            preConfirm: () => {
                return {
                    nombre:  document.getElementById("nombre").value,
                    
                };
            }
        });
        if (formValues) {
            let pasajero =new Pasajeros(formValues.nombre, formValues.apellido, formValues.documento);
            return pasajero;
        }
    }
    return {
        init: function (parametros) {
            console.log(parametros)
            Nombre = parametros.nombre;
            Ciudad = parametros.ciudad;
            configurar();
            eventos();
        },
    };
}();

class Reservas {
    constructor(origen, destino, fechaIda, fechaVuelta) {
        this.origen = origen;
        this.destino = destino;
        this.fechaIda = fechaIda;
        this.fechaVuelta = fechaVuelta;
        this.avionIda = null;
        this.avionVuelta = null;
    }
    asignarAvionIda(avion) {
        this.avionIda = avion;
    }
    asignarAvionVuelta(avion) {
        this.avionVuelta = avion;
    }
}

class Aviones {
    constructor(matricula, modelo, nroAsientos, capacidadMinima, costoVuelo) {
        this.matricula = matricula;
        this.modelo = modelo;
        this.nroAsientos = nroAsientos;
        this.capacidadMinima = capacidadMinima;
        this.arrPasajeros = [];
        this.habilitado = false;
        this.reservado = 0;
        this.costoVuelo = costoVuelo;
    }
    agregarPasajeros(pasajero) {
        if (this.reservado >= this.capacidadMinima) {
            this.habilitado = true;
        }
        this.arrPasajeros.push(pasajero);
        this.reservado++;
    }
    agregarPasajeros2(pasajero) {
        if (this.reservado >= this.capacidadMinima) {
            this.habilitado = true;
        }
        this.arrPasajeros.push(pasajero);
        this.reservado++;
    }
    agregarPasajeros3(pasajero) {
        if (this.reservado >= this.capacidadMinima) {
            this.habilitado = true;
        }
        this.arrPasajeros.push(pasajero);
        this.reservado++;
    }
}


class Pasajeros{
    constructor(nombres, apellidos, nrodocumento){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.nrodocumento = nrodocumento
    }
}