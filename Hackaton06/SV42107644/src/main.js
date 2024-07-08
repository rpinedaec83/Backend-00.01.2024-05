


let $table = $('#table');

function clienteFormatter(value, row, index) {
    return `${row.cliente.nombre} ${row.cliente.apellidoPaterno}`;
}

function tecnicoFormatter(value, row, index) {
    switch (row.estado) {
        case 'Pendiente Revisión': return '';
        case 'En Revisión':
        case 'Revisión Atendida':
        case 'Pendiente Autorización':
        case 'Autorizada': return row.revision && row.revision.tecnico ? `${row.revision.tecnico.nombre} ${row.revision.tecnico.apellidoPaterno}` : '';
        case 'Pendiente Reparación':
        case 'En Reparación':
        case 'Reparación Atendida':
        case 'Cerrado': return row.mantenimiento && row.mantenimiento.tecnico ? `${row.mantenimiento.tecnico.nombre} ${row.mantenimiento.tecnico.apellidoPaterno}` : '';
    }
    return '';
}

function diagnosticoFormatter(value, row, index) {
    switch (row.estado) {
        case 'Pendiente Revisión':
        case 'En Revisión': return '';
        case 'Revisión Atendida':
        case 'Pendiente Autorización':
        case 'Autorizada':
        case 'Pendiente Reparación':
        case 'En Reparación':
        case 'Reparación Atendida':
        case 'Cerrado': return row.revision && row.revision.tipoDiagnostico ? `${row.revision.tipoDiagnostico}` : '';
    }
    return '';
}

function cotizacionFormatter(value, row, index) {
    switch (row.estado) {
        case 'Pendiente Revisión':
        case 'En Revisión':return '';
        case 'Revisión Atendida': 
        case 'Pendiente Autorización':
        case 'Autorizada':
        case 'Pendiente Reparación':
        case 'En Reparación':
        case 'Reparación Atendida':
        case 'Cerrado': return row.cotizacion && row.cotizacion.total !== undefined ? `S/. ${row.cotizacion.total.toFixed(2)}` : '';
    }
    return '';
}


function accionFormatter(value, row, index) {
    return [
        '<a class="detalle" href="javascript:void(0)" title="Ver Detalle">',
        '<i class="fas fa-eye"></i>',
        '</a>&nbsp;&nbsp;&nbsp;&nbsp;',
        '<a class="cotizacion" href="javascript:void(0)" title="Ver Cotización">',
        '<i class="fas fa-file-invoice-dollar"></i>',
        '</a>&nbsp;&nbsp;&nbsp;&nbsp;',
        '<a class="cerrar" href="javascript:void(0)" title="Cerrar Ticket">',
        '<i class="fas fa-times-circle"></i>',
        '</a>'
    ].join('')
}
window.accionEvents = {
    'click .detalle': function (e, value, row, index) {
        verDetalle(row);
    },
    'click .cotizacion': function (e, value, row, index) {
        verCotizacion(row);
    },
    'click .cerrar': function (e, value, row, index) {
        cerrarTicket(row);
    }
}


const System = function () {
    login = JSON.parse(sessionStorage.getItem("login"));
    if (login == null) {
        window.location.replace("../login.html");
    }

    objSessionSucursal = sessionStorage.getItem("sucursal");
    if (objSessionSucursal != null) {
        sucursal = JSON.parse(objSessionSucursal);
        $table.bootstrapTable();
        $table.bootstrapTable('load', sucursal.tickets);
    }


}();

function verDetalle(row) {
    sessionStorage.setItem('ticket', JSON.stringify(row));
    window.location.replace('./detail.html');  
}

function verCotizacion(ticket) {

    if (ticket && ticket.cotizacion) {
        const cotizacion = ticket.cotizacion;
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

        Swal.fire({
            title: 'Detalle de Cotización',
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
                    <strong>Pago Adelantado (S/): </strong><span>${ticket.pagoAdelantado.toFixed(2)}</span><br>
                    <strong>Pago Pendiente (S/): </strong><span>${ticket.pagoPendiente.toFixed(2)}</span><br><br>

                    <strong>Total Cotización (S/): </strong><span>${totalCotizacion.toFixed(2)}</span><br>
                </div>
            `,
            showCancelButton: false,
            confirmButtonText: 'Cerrar',
            focusConfirm: false,
         });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No hay información para mostrar'
        });
    }
}

function cerrarTicket(ticket) {
    if (ticket) {
        Swal.fire({
            title: 'Cerrar Ticket',
            html: `
                <label for="motivo">Motivo de cierre:</label>
                <input type="text" id="motivo" class="form-control" placeholder="Ingrese el motivo de cierre">
            `,
            showCancelButton: true,
            confirmButtonText: 'Cerrar Ticket',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const motivo = document.getElementById('motivo').value;
                if (!motivo) {
                    Swal.showValidationMessage('Debe ingresar un motivo de cierre');
                } else {
                    return motivo; // Retornar el motivo para usarlo en la siguiente confirmación
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const motivoCierre = result.value;

                Swal.fire({
                    title: '¿Está seguro?',
                    text: `Está a punto de cerrar el ticket con ID ${ticket.idTicket}.\nMotivo: ${motivoCierre}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Confirmar Cierre',
                    cancelButtonText: 'Cancelar'
                }).then((confirmacion) => {
                    if (confirmacion.isConfirmed) {
                        // Realizar acciones de cierre del ticket
                        ticket.estado = 'Cerrado';
                        ticket.motivoCierre = motivoCierre;

                        // Actualizar datos en sessionStorage
                        const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
                        if (index !== -1) {
                            sucursal.tickets[index] = ticket;
                        }
                        sessionStorage.setItem('sucursal', JSON.stringify(sucursal));

                        // Actualizar la tabla
                        $table.bootstrapTable('load', sucursal.tickets);

                        Swal.fire({
                            icon: 'success',
                            title: 'Ticket Cerrado',
                            text: `El ticket con ID ${ticket.idTicket} ha sido cerrado correctamente.`
                        });
                    }
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

$("#btnRegistrarTicket").on("click", function (event) {
    event.preventDefault();

    objLocalTipoDocumentos = localStorage.getItem('tipoDocumentos');
    if (objLocalTipoDocumentos) {
        tipoDocumentos = JSON.parse(objLocalTipoDocumentos);
    }else{
        tipoDocumentos = ['DNI', 'Pasaporte', 'RUC', 'Carnet de Extranjería'];
    }
    
    objLocalMarcas = localStorage.getItem('marcas');
    if(objLocalMarcas) {
        marcas = JSON.parse(objLocalMarcas);
    }else{
        marcas = ['Apple', 'Samsung', 'Xiaomi'];
    }

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
                                ${marcas.map(marca => `<option value="${marca}">${marca}</option>`).join('')}
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

                cliente = new Usuario(sucursal.clientes.length, nombre, apellidoPaterno, apellidoMaterno, tipoDocumento, numDocumento, distrito, direccion, correo);
                sucursal.clientes.push(cliente);
            } else {
                // Cliente existente, validar solo campo principal
                const correoExistente = document.getElementById('ticket-correo-existente').value;
                cliente = sucursal.clientes.find(cliente => cliente.correo === correoExistente);

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
            } else {
                objSessionUser = sessionStorage.getItem('usuario');
                if (objSessionUser) {
                    usuario = JSON.parse(objSessionUser);
                } else {
                    Swal.showValidationMessage('Usuario no autenticado. Por favor, inicie sesión nuevamente.');
                    return false;
                }

                const celular = new Celular(1, numCelular, marca, modelo, IMEI, numSerie);
                const ticket = new Ticket(
                    sucursal.tickets.length + 1,
                    'Pendiente Revisión',
                    usuario,
                    celular,
                    cliente,
                    falla
                );

                sucursal.tickets.push(ticket);
                sessionStorage.setItem('sucursal', JSON.stringify(sucursal));
                return true;
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Ticket Registrado',
                text: 'El ticket ha sido registrado correctamente.'
            }).then(() => {
                $table.bootstrapTable('load', sucursal.tickets);
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
});


function verificarBloqueo(numSerie, IMEI){
    const random = Math.random();
    
    // Simula el bloqueo con una probabilidad del 20%
    if (random <= 0.2) {
        return true; // Celular bloqueado
    } else {
        return false; // Celular no bloqueado
    }
} 