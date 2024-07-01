const IMEI_REPORTED_STOLEN = '123456789012345';

class Telefono {
  constructor(numeroSerie, IMEI, marca) {
    this.numeroSerie = numeroSerie;
    this.IMEI = IMEI;
    this.marca = marca;
    this.diagnostico = null;
    this.costoReparacion = 0;
    this.autorizado = false;
    this.abono = 0;
    this.tecnico = null;
    this.repuestos = [];
    this.estado = 'Ingresado';
    this.entregado = false;
    this.saldoRestante = 0;
  }

  validarIMEI() {
    return this.IMEI !== IMEI_REPORTED_STOLEN;
  }

  registrarDiagnostico(diagnostico, costo) {
    this.diagnostico = diagnostico;
    this.costoReparacion = parseFloat(costo); // Convertir a número
    this.estado = 'Diagnóstico Realizado';
  }

  autorizarReparacion(autorizado, abono) {
    if (autorizado && parseFloat(abono) >= this.costoReparacion / 2) {
      this.autorizado = true;
      this.abono = parseFloat(abono); // Convertir a número
      this.estado = 'Autorizado para Reparación';
    } else {
      alert('El abono debe ser al menos el 50% del costo de reparación.');
    }
  }

  asignarTecnico(tecnico) {
    this.tecnico = tecnico;
    this.estado = 'Técnico Asignado';
  }

  agregarRepuesto(repuesto, costo) {
    this.repuestos.push({ repuesto, costo: parseFloat(costo) }); // Convertir costo a número
    this.costoReparacion += parseFloat(costo);
    this.estado = 'Repuestos Agregados';
  }

  finalizarReparacion() {
    this.saldoRestante = this.costoReparacion - this.abono;
    if (this.saldoRestante > 0) {
      alert(`Debe pagar el restante: ${this.saldoRestante.toFixed(2)} soles.`);
    } else {
      const cambio = this.abono - this.costoReparacion;
      alert(`Su cambio es: ${cambio.toFixed(2)} soles.`);
      this.estado = 'Reparación Completada';
    }
  }

  pagarSaldoRestante(pago, entregado) {
    const pagoRestante = parseFloat(pago);
    this.abono += pagoRestante;
    this.entregado = entregado;
    if (this.abono >= this.costoReparacion) {
      this.estado = 'Cancelado y Entregado';
      alert('La reparación ha sido completada y el equipo está listo para entrega.');
    } else {
      this.saldoRestante = this.costoReparacion - this.abono;
      alert(`Falta por pagar: ${this.saldoRestante.toFixed(2)} soles.`);
    }
  }

  mostrarEstado() {
    return `
      Estado del teléfono: ${this.estado}
      Diagnóstico: ${this.diagnostico ? this.diagnostico : 'N/A'}
      Costo de la Reparación: ${this.costoReparacion ? this.costoReparacion.toFixed(2) : 'N/A'}
      Autorizado: ${this.autorizado ? 'Sí' : 'No'}
      Abono: ${this.abono.toFixed(2)}
      Saldo Restante: ${this.saldoRestante.toFixed(2)}
      Técnico: ${this.tecnico ? this.tecnico : 'N/A'}
      Repuestos: ${this.repuestos.map(rep => `${rep.repuesto} (Costo: ${rep.costo.toFixed(2)})`).join(', ') || 'N/A'}
      Entregado: ${this.entregado ? 'Sí' : 'No'}
    `;
  }
}

const telefonoForm = document.getElementById('telefonoForm');
const diagnosticoSection = document.getElementById('diagnosticoSection');
const diagnosticoForm = document.getElementById('diagnosticoForm');
const autorizacionSection = document.getElementById('autorizacionSection');
const autorizacionForm = document.getElementById('autorizacionForm');
const tecnicoSection = document.getElementById('tecnicoSection');
const tecnicoForm = document.getElementById('tecnicoForm');
const repuestosSection = document.getElementById('repuestosSection');
const repuestosForm = document.getElementById('repuestosForm');
const finalizarSection = document.getElementById('finalizarSection');
const finalizarForm = document.getElementById('finalizarForm');
const pagoSection = document.getElementById('pagoSection');
const pagoForm = document.getElementById('pagoForm');
const telefonoStatusDiv = document.getElementById('telefonoStatus');

let telefono;
let tecnicos = [
  { nombre: 'Técnico 1', skills: ['iPhone', 'Android'] },
  { nombre: 'Técnico 2', skills: ['iPhone'] },
  { nombre: 'Técnico 3', skills: ['Android', 'Tablet'] },
  { nombre: 'Técnico 4', skills: ['iPhone', 'Tablet'] },
  { nombre: 'Técnico 5', skills: ['Android', 'iPad'] },
];

telefonoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const numeroSerie = document.getElementById('numeroSerie').value;
  const IMEI = document.getElementById('IMEI').value;
  const marca = document.getElementById('marca').value;

  telefono = new Telefono(numeroSerie, IMEI, marca);

  if (!telefono.validarIMEI()) {
    alert('El teléfono ha sido reportado como robado');
    telefono.estado = 'Robado';
    telefonoStatusDiv.innerHTML = `
      <p>Número de Serie: ${telefono.numeroSerie}</p>
      <p>IMEI: ${telefono.IMEI}</p>
      <p>${telefono.mostrarEstado()}</p>
    `;
  } else {
    telefono.estado = 'Validado';
    diagnosticoSection.style.display = 'block';
  }
});

diagnosticoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const diagnostico = document.getElementById('diagnostico').value;
  const costo = document.getElementById('costo').value;

  telefono.registrarDiagnostico(diagnostico, costo);
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();

  autorizacionSection.style.display = 'block';
});

autorizacionForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const autorizacion = document.getElementById('autorizacion').checked;
  const abono = document.getElementById('abono').value;

  telefono.autorizarReparacion(autorizacion, abono);
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();

  if (telefono.autorizado) {
    tecnicoSection.style.display = 'block';
    fillTecnicosDropdown();
  }
});

function fillTecnicosDropdown() {
  const tecnicoDropdown = document.getElementById('tecnico');
  tecnicoDropdown.innerHTML = '';
  tecnicos.forEach(t => {
    const option = document.createElement('option');
    option.value = t.nombre;
    option.textContent = t.nombre;
    tecnicoDropdown.appendChild(option);
  });
}

tecnicoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const tecnicoSeleccionado = document.getElementById('tecnico').value;

  telefono.asignarTecnico(tecnicoSeleccionado);
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();

  repuestosSection.style.display = 'block';
  pagoSection.style.display = 'block';
});

repuestosForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const repuesto = document.getElementById('repuesto').value;
  const costoRepuesto = document.getElementById('costoRepuesto').value;

  telefono.agregarRepuesto(repuesto, costoRepuesto);
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();
});

finalizarForm.addEventListener('submit', function(event) {
  event.preventDefault();

  telefono.finalizarReparacion();
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();

  if (telefono.estado === 'Reparación Completada') {
    pagoSection.style.display = 'block';
    document.getElementById('saldoRestante').textContent = `Saldo Restante: ${telefono.saldoRestante.toFixed(2)} soles.`;
  }
});

pagoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const pagoRestante = document.getElementById('pagoRestante').value;
  const entregado = document.getElementById('entregado').checked;

  telefono.pagarSaldoRestante(pagoRestante, entregado);
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();

  if (telefono.estado === 'Cancelado y Entregado') {
    pagoSection.style.display = 'none';
    alert('El equipo ha sido entregado.');
  }
});
