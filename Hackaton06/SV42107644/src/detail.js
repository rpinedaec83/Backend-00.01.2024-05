
let txtIdTicket = document.getElementById('idTicket');
let txtEstado = document.getElementById('estado');
let txtFechaRegistro = document.getElementById('fechaRegistro');
let txtUsuarioRegistro = document.getElementById('usuarioRegistro');
let txtMotivoCierre = document.getElementById('motivoCierre');

let txtNombreCliente = document.getElementById('nombreCliente');
let txtApellidoPaternoCliente = document.getElementById('apellidoPaternoCliente');
let txtApellidoMaternoCliente = document.getElementById('apellidoMaternoCliente');

let txtNumeroCelular = document.getElementById('numeroCelular');
let txtMarcaCelular = document.getElementById('marcaCelular');
let txtModeloCelular = document.getElementById('modeloCelular');
let txtNumeroSerieCelular = document.getElementById('numeroSerieCelular');
let txtIMEICelular = document.getElementById('imeiCelular');
let txtBloqueadoCelular = document.getElementById('bloqueadoCelular');

let txtTecnicoRevision = document.getElementById('tecnicoRevision');
let txtTipoDiagnosticoRevision = document.getElementById('tipoDiagnosticoRevision');
let txtComentariosRevision = document.getElementById('comentariosRevision');

let txtTecnicoMantenimiento = document.getElementById('tecnicoMantenimiento');
let txtTipoMantenimiento = document.getElementById('tipoMantenimiento');
let txtObservacionesMantenimiento = document.getElementById('observacionesMantenimiento');
let txtAutorizado = document.getElementById('autorizado');
let txtTotalCotizacion = document.getElementById('totalCotizacion');

let txtPagoAdelantado = document.getElementById('pagoAdelantado');
let txtPagoPendiente = document.getElementById('pagoPendiente');
let txtTotalPago = document.getElementById('totalPago');
let txtTipoPago = document.getElementById('tipoPago');

let ticket;

objSessionTicket = sessionStorage.getItem('ticket');

if (objSessionTicket !== undefined) {

    ticket = JSON.parse(objSessionTicket);

    txtIdTicket.innerText = ticket.idTicket;
    txtEstado.innerText = ticket.estado;
    txtFechaRegistro.innerText = ticket.fechaRegistro;
    txtUsuarioRegistro.innerText = ticket.usuarioRegistro.nombre + ' ' + ticket.usuarioRegistro.apellidoPaterno;
    if (ticket.motivoCierre) txtMotivoCierre.innerText = ticket.motivoCierre;

    if (ticket.cliente) {
        txtNombreCliente.innerText = ticket.cliente.nombre;
        txtApellidoPaternoCliente.innerText = ticket.cliente.apellidoPaterno;
        txtApellidoMaternoCliente.innerText = ticket.cliente.apellidoMaterno;
    }

    comentariosCliente.innerText = ticket.cometariosCliente;

    if (ticket.celular) {
        txtNumeroCelular.innerText = ticket.celular.numero;
        txtMarcaCelular.innerText = ticket.celular.marca;
        txtModeloCelular.innerText = ticket.celular.modelo;
        txtNumeroSerieCelular.innerText = ticket.celular.numSerie;
        txtIMEICelular.innerText = ticket.celular.IMEI;
        txtBloqueadoCelular.innerText = ticket.celular.bloqueado ? 'Si' : 'No';
    }

    if (ticket.revision) {
        if (ticket.revision.tecnico) {
            txtTecnicoRevision.innerText = ticket.revision.tecnico.nombre + ' ' + ticket.revision.tecnico.apellidoPaterno;
        }
        txtTipoDiagnosticoRevision.innerText = ticket.revision.tipoDiagnostico;
        txtComentariosRevision.innerText = ticket.revision.comentarios;
    }


    if (ticket.mantenimiento) {
        if (ticket.mantenimiento.tecnico) {
            txtTecnicoMantenimiento.innerText = ticket.mantenimiento.tecnico.nombre + ' ' + ticket.mantenimiento.tecnico.apellidoPaterno;
        }
        txtTipoMantenimiento.innerText = ticket.mantenimiento.tipoMantenimiento;
        txtObservacionesMantenimiento.innerText = ticket.mantenimiento.observaciones;
    }

    txtAutorizado.innerText = ticket.autorizado ? 'Si' : 'No';
    if (ticket.cotizacion) {
        txtTotalCotizacion.innerText = ticket.cotizacion.total;
    }

    txtPagoAdelantado.innerText = ticket.pagoAdelantado;
    txtPagoPendiente.innerText = ticket.pagoPendiente;
    txtTotalPago.innerText = ticket.totalPago;
    txtTipoPago.innerText = ticket.tipoPago;

}


$(document).ready(function () {
    function refresh(ticket) {
        $('#botones-container').empty();
        if (ticket) {
            switch (ticket.estado) {
                case 'Pendiente Revisión':
                case 'Autorizada':
                    $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnAsignarTecnico">Asignar Tecnico</button>&nbsp;');
                    break;
                case 'En Revisión':
                    $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnTerminarRevision">Terminar Revision</button>&nbsp;');
                    break;
                case 'Revisión Atendida':
                    $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnSolicitarAutorizacion">Solicitar Autorización</button>&nbsp;');
                    break;
                case 'Pendiente Autorización':
                    $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnAutorizar">Autorizar</button>&nbsp;');
                    break
                case 'Pendiente Reparación':
                    $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnIniciarReparacion">Iniciar Reparación</button>&nbsp;');
                    break
                case 'En Reparación':
                    $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnEditarCotizacion">Editar Cotización</button>&nbsp;');
                    $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnTerminarReparacion">Terminar Reparación</button>&nbsp;');
                    break
                case 'Reparación Atendida':
                    $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnProcesarPago">Procesar Pago</button>&nbsp;');
                    break
            }
        }


        $('#botones-container').append('<button class="btn btn-primary mt-3" id="btnRegresar">Regresar</button>');

    }
    refresh(ticket);
    // Eventos de botones
    $('#botones-container').on('click', '#btnAsignarTecnico', function (event) {
        event.preventDefault();
        mostrarTecnicosDisponibles(ticket)
    });

    $('#botones-container').on('click', '#btnTerminarRevision', function (event) {
        event.preventDefault();
        terminarRevision(ticket)
    });

    $('#botones-container').on('click', '#btnSolicitarAutorizacion', function (event) {
        event.preventDefault();
        solicitarAutorizacion(ticket)
    });

    $('#botones-container').on('click', '#btnAutorizar', function (event) {
        event.preventDefault();
        autorizar(ticket)
    });

    $('#botones-container').on('click', '#btnIniciarReparacion', function (event) {
        event.preventDefault();
        iniciarReparacion(ticket)
    });

    $('#botones-container').on('click', '#btnEditarCotizacion', function (event) {
        event.preventDefault();
        editarCotizacion(ticket)
    });

    $('#botones-container').on('click', '#btnTerminarReparacion', function (event) {
        event.preventDefault();
        terminarReparacion(ticket)
    });

    $('#botones-container').on('click', '#btnProcesarPago', function (event) {
        event.preventDefault();
        procesarPago(ticket)
    });

    $('#botones-container').on('click', '#btnRegresar', function (event) {
        event.preventDefault();
        window.location.replace('./index.html');
    });





    function mostrarTecnicosDisponibles(ticket) {

        if (ticket) {
            objSessionSucursal = sessionStorage.getItem('sucursal');
            sucursal = JSON.parse(objSessionSucursal);

            const tecnicosDisponibles = sucursal.tecnicos.filter(tecnico =>
                tecnico.skills.some(skill => skill.marca === ticket.celular.marca)
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
                    const tecnicoSeleccionado = sucursal.tecnicos.find(tecnico => tecnico.idUsuario === idTecnicoSeleccionado);

                    // Cambiar estado del ticket
                    if (ticket.estado === 'Pendiente Revisión') {
                        ticket.estado = 'En Revisión';

                        const nuevaRevision = {
                            tecnico: tecnicoSeleccionado,
                            fecha: getDate()
                        };
                        ticket.revision = nuevaRevision;
                        txtTecnicoRevision.innerText = ticket.revision.tecnico.nombre + ' ' + ticket.revision.tecnico.apellidoPaterno;
                    } else {
                        if (ticket.estado === 'Autorizada') {
                            ticket.estado = 'Pendiente Reparación';
                            const nuevoMantenimiento = {
                                tecnico: tecnicoSeleccionado,
                                fecha: getDate()
                            };
                            ticket.mantenimiento = nuevoMantenimiento;
                            txtTecnicoMantenimiento.innerText = ticket.mantenimiento.tecnico.nombre + ' ' + ticket.mantenimiento.tecnico.apellidoPaterno;
                        }
                    }
                    txtEstado.innerText = ticket.estado;

                    sessionStorage.setItem('ticket', JSON.stringify(ticket));

                    const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
                    if (index !== -1) {
                        sucursal.tickets[index] = ticket
                    };

                    sessionStorage.setItem('sucursal', JSON.stringify(sucursal));

                    Swal.fire({
                        icon: 'success',
                        title: 'Técnico asignado correctamente',
                        text: `Técnico asignado: ${tecnicoSeleccionado.nombre} ${tecnicoSeleccionado.apellidoPaterno}`
                    }).then(() => {
                        refresh(ticket);;
                    });
                }
            });
        }
    }

    function terminarRevision(ticket) {
        let cotizaciones = [];
        if (ticket && ticket.estado === 'En Revisión') {
            objSessionSucursal = sessionStorage.getItem('sucursal');

            objSessionCotizaciones = sessionStorage.getItem('cotizaciones');
            if (objSessionCotizaciones) cotizaciones = JSON.parse(objSessionCotizaciones);

            sucursal = JSON.parse(objSessionSucursal);
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
                    <div style="margin-bottom: 10px; display: flex; align-items: center;">
                        <label for="swal-diagnostico" style="width: 110px; margin-right: 10px;">Diagnóstico</label>
                        <select id="swal-diagnostico" class="swal2-select" style="flex: 1;">
                            <option value="">Seleccionar</option>
                            <option value="Pantalla rota">Pantalla rota</option>
                            <option value="Batería dañada">Batería dañada</option>
                            <option value="Problema de software">Problema de software</option>
                            <option value="Falla en bocina">Falla en bocina</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <label for="swal-comentarios" style="width: 110px; margin-right: 10px;">Comentarios</label>
                        <textarea id="swal-comentarios" class="swal2-textarea" placeholder="Ingrese los comentarios" style="flex: 1;"></textarea>
                    </div>
                    <hr>
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
                    cotizacion.precio = cotizacion.total / 1.18;
                    cotizacion.igv = cotizacion.precio * 0.18;
                    cotizaciones.push(cotizacion);

                    ticket.revision.tipoDiagnostico = document.getElementById('swal-diagnostico').value;
                    ticket.revision.comentarios = document.getElementById('swal-comentarios').value;


                    // Actualizar estado del ticket y registrar cotización
                    ticket.estado = 'Revisión Atendida';
                    txtEstado.innerText = ticket.estado;
                    ticket.cotizacion = cotizacion;
                    txtTipoDiagnosticoRevision.innerText = ticket.revision.tipoDiagnostico;
                    txtComentariosRevision.innerText = ticket.revision.comentarios;
                    txtTotalCotizacion.innerText = ticket.cotizacion.total;

                    sessionStorage.setItem('ticket', JSON.stringify(ticket));

                    const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
                    if (index !== -1) {
                        sucursal.tickets[index] = ticket;
                    };

                    sessionStorage.setItem('sucursal', JSON.stringify(sucursal));

                    Swal.fire({
                        icon: 'success',
                        title: 'Revisión finalizada correctamente',
                        html: `Cotización registrada`
                    }).then(() => {
                        refresh(ticket);
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
                const servicios = ['Seleccionar', 'Limpieza', 'Cambio de pantalla', 'Cambio de batería', 'Cambio de bocina'];
                const repuestos = ['Seleccionar', 'Pantalla', 'Batería', 'Bocina'];

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

    function solicitarAutorizacion(ticket) {

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
                    ticket.estado = 'Pendiente Autorización';
                    txtEstado.innerText = ticket.estado;

                    sessionStorage.setItem('ticket', JSON.stringify(ticket));
                    objSessionSucursal = sessionStorage.getItem('sucursal');
                    sucursal = JSON.parse(objSessionSucursal);
                    const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
                    if (index !== -1) {
                        sucursal.tickets[index] = ticket
                    };

                    sessionStorage.setItem('sucursal', JSON.stringify(sucursal));
                    Swal.fire({
                        icon: 'success',
                        title: 'Autorización Confirmada',
                        text: 'El estado del ticket ha sido actualizado a "Solicitar Autorización".'
                    }).then(() => {
                        refresh(ticket); // Actualizar la lista de tickets después de la autorización
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

    function autorizar(ticket) {

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
                    ticket.estado = 'Autorizada';
                    ticket.autorizado = true;
                    ticket.pagoAdelantado = 0.5 * ticket.cotizacion.total;
                    ticket.pagoPendiente = 0.5 * ticket.cotizacion.total;

                    txtEstado.innerText = ticket.estado;
                    txtAutorizado.innerText = ticket.autorizado ? 'Si' : 'No';

                    sessionStorage.setItem('ticket', JSON.stringify(ticket));
                    objSessionSucursal = sessionStorage.getItem('sucursal');
                    sucursal = JSON.parse(objSessionSucursal);
                    const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
                    if (index !== -1) {
                        sucursal.tickets[index] = ticket
                    };

                    sessionStorage.setItem('sucursal', JSON.stringify(sucursal));
                    Swal.fire({
                        icon: 'success',
                        title: 'Autorización Confirmada',
                        text: 'El estado del ticket ha sido actualizado a "Autorizada".'
                    }).then(() => {
                        refresh(ticket);
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

    function iniciarReparacion(ticket) {

        if (ticket) {
            ticket.estado = 'En Reparación';
            txtEstado.innerText = ticket.estado;
            sessionStorage.setItem('ticket', JSON.stringify(ticket));
            objSessionSucursal = sessionStorage.getItem('sucursal');
            sucursal = JSON.parse(objSessionSucursal);
            const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
            if (index !== -1) {
                sucursal.tickets[index] = ticket
            };

            sessionStorage.setItem('sucursal', JSON.stringify(sucursal));

            Swal.fire({
                icon: 'success',
                title: 'Reparación Iniciada',
                text: `El ticket con ID ${ticket.idTicket} ahora está en estado "En Reparación".`
            }).then(() => {
                refresh(ticket); // Actualizar la lista de tickets después de iniciar la reparación
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró el ticket seleccionado.'
            });
        }
    }

    function editarCotizacion(ticket) {
        if (ticket && ticket.cotizacion) {
            const cotizacion = ticket.cotizacion;

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
                    cotizacion.precio = nuevoTotal / 1.18;
                    cotizacion.igv = cotizacion.precio * 0.18;

                    ticket.cotizacion = cotizacion;
                    txtTotalCotizacion.innerText = ticket.cotizacion.total;

                    // Actualizar datos en sessionStorage
                    sessionStorage.setItem('ticket', JSON.stringify(ticket));
                    const objSessionSucursal = sessionStorage.getItem('sucursal');
                    let sucursal = JSON.parse(objSessionSucursal);
                    const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
                    if (index !== -1) {
                        sucursal.tickets[index] = ticket;
                    }
                    sessionStorage.setItem('sucursal', JSON.stringify(sucursal));

                    Swal.fire({
                        icon: 'success',
                        title: 'Cotización Actualizada',
                        text: 'Los detalles de la cotización han sido actualizados correctamente.'
                    }).then(() => {
                        refresh(ticket); // Actualizar la lista de tickets después de guardar los cambios
                    });
                }
            });
            inicializarEventosInput();


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


                    if (!isNaN(precio)) {
                        const idDetalle = index + 1;
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
            function inicializarEventosInput() {
                document.querySelectorAll('#swal-table-detalle tbody tr').forEach(row => {
                    row.querySelector('.precio-unitario').addEventListener('input', () => {
                        actualizarTotales(row);
                    });
                });
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
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró la cotización del ticket seleccionado.'
            });
        }
    }

    function terminarReparacion(ticket) {
        Swal.fire({
            title: 'Finalizar Reparación',
            width: '70%', // Ajuste del ancho del cuadro de diálogo
            html: `
                <div style="margin-bottom: 10px; display: flex; align-items: center;">
                    <label for="swal-mantenimiento" style="width: 125px; margin-right: 10px;">Mantenimiento</label>
                    <select id="swal-mantenimiento" class="swal2-select" style="flex: 1;">
                        <option value="">Seleccionar</option>
                        <option value="Cambio de Pantalla">Cambio de Pantalla</option>
                        <option value="Reemplazo de Batería">Reemplazo de Batería</option>
                        <option value="Reinstalación de software">Reinstalación de software</option>
                        <option value="Reemplazo de bocina">Reemplazo de bocina</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <label for="swal-observaciones" style="width: 125px; margin-right: 10px;">Observaciones</label>
                    <textarea id="swal-observaciones" class="swal2-textarea" placeholder="Ingrese sus observaciones" style="flex: 1;"></textarea>
                </div>
        `,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Finalizar Reparación',
            focusConfirm: false,
            preConfirm: () => {
                // Actualizar el objeto Cotizacion con los detalles y el total calculado
                ticket.mantenimiento.tipoMantenimiento = document.getElementById('swal-mantenimiento').value;
                ticket.mantenimiento.observaciones = document.getElementById('swal-observaciones').value;

                ticket.estado = 'Reparación Atendida';
                txtEstado.innerText = ticket.estado;
                txtTipoMantenimiento.innerText = ticket.mantenimiento.tipoMantenimiento;
                txtObservacionesMantenimiento.innerText = ticket.mantenimiento.observaciones;

                sessionStorage.setItem('ticket', JSON.stringify(ticket));
                objSessionSucursal = sessionStorage.getItem('sucursal');
                sucursal = JSON.parse(objSessionSucursal);
                const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
                if (index !== -1) {
                    sucursal.tickets[index] = ticket
                };

                sessionStorage.setItem('sucursal', JSON.stringify(sucursal));

                Swal.fire({
                    icon: 'success',
                    title: 'Reparación terminada',
                    text: `El ticket con ID ${ticket.idTicket} ahora está en estado "Reparación Atendida".`,
                    html: `Mantenimiento registrado`
                }).then(() => {
                    refresh(ticket);
                });
            }
        });
    }

    function procesarPago(ticket) {
        if (ticket) {
            Swal.fire({
                title: 'Procesar Pago',
                html: `
                    <label for="tipoPago">Seleccione el tipo de pago:</label>
                    <select id="swal-tipoPago" class="form-control">
                        <option value="POS">POS</option>
                        <option value="Efectivo">Efectivo</option>
                    </select>
                `,
                showCancelButton: true,
                confirmButtonText: 'Confirmar Pago',
                cancelButtonText: 'Cancelar',
                preConfirm: () => {
                    const tipoPago = document.getElementById('swal-tipoPago').value;

                    ticket.tipoPago = tipoPago;
                    ticket.pagoAdelantado = 0;
                    ticket.pagoPendiente = 0;
                    ticket.totalPago = ticket.cotizacion.total;
                    ticket.estado = 'Cerrado';
                    ticket.motivoCierre = 'Atención de ticket finalizada';

                    txtEstado.innerText = ticket.estado;
                    txtPagoAdelantado.innerText = ticket.pagoAdelantado;
                    txtPagoPendiente.innerText = ticket.pagoPendiente;
                    txtTotalPago.innerText = ticket.totalPago;
                    txtTipoPago.innerText = ticket.tipoPago;
                    txtMotivoCierre.innerText = ticket.motivoCierre;

                    sessionStorage.setItem('ticket', JSON.stringify(ticket));
                    objSessionSucursal = sessionStorage.getItem('sucursal');
                    sucursal = JSON.parse(objSessionSucursal);
                    const index = sucursal.tickets.findIndex(tk => tk.idTicket === ticket.idTicket);
                    if (index !== -1) {
                        sucursal.tickets[index] = ticket
                    };

                    sessionStorage.setItem('sucursal', JSON.stringify(sucursal));

                    Swal.fire({
                        icon: 'success',
                        title: 'Pago Procesado',
                        text: `El ticket con ID ${ticket.idTicket} ahora está en estado "Cerrado". Tipo de pago: ${tipoPago}`
                    }).then(() => {
                        refresh(ticket);
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

}); 