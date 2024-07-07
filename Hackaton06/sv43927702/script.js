let IMEI_REPORTED_STOLEN = ["54214", "123456789", "87654321"];
localStorage.setItem("celReport", JSON.stringify(IMEI_REPORTED_STOLEN));

const GundamStore = function () {
    login = JSON.parse(sessionStorage.getItem("login"));
    if (login == null) {
        window.location.replace("/Hackaton06/sv43927702/login.html");
    }
    objLocalGundams = localStorage.getItem("gundams");
    if (objLocalGundams != null) {
        arrGundams = JSON.parse(objLocalGundams);
    }
    // $table.bootstrapTable();
    // $table.bootstrapTable('load', arrGundams);
    // modificarCSS();
}();
let tecnicos = [
  { nombre: 'Técnico 1', skills: ['iPhone', 'Android'] },
  { nombre: 'Técnico 2', skills: ['iPhone'] },
  { nombre: 'Técnico 3', skills: ['Android', 'Tablet'] },
  { nombre: 'Técnico 4', skills: ['iPhone', 'Tablet'] },
  { nombre: 'Técnico 5', skills: ['Android', 'iPad'] },
];
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

    validarimei(imei) {
        let reportedIMEIs = JSON.parse(localStorage.getItem("celReport"));
        let resultado = reportedIMEIs.find(elemento => elemento === imei);
        return resultado !== undefined ? "reportado" : "no reportado";
    }
    mostrarEstado() {
      
        return  `
          Estado del teléfono: ${this.estado}
          Diagnóstico: ${this.diagnostico ? this.diagnostico : 'N/A'}
          Costo de la Reparación: ${this.costoReparacion ? this.costoReparacion.toFixed(2) : 'N/A'}
          Autorizado: ${this.autorizado ? 'Sí' : 'No'}
          Abono: ${this.abono.toFixed(2)}
          Saldo Restante: ${this.saldoRestante.toFixed(2)}
          Técnico: ${this.tecnico ? this.tecnico : 'N/A'}
          Repuestos: ${this.repuestos.map(rep => `${rep.repuesto} (Costo: ${rep.costo.toFixed(2)})`).join(', ') || 'N/A'}
          Entregado: ${this.entregado ? 'Sí' : 'No'}
        `;}
        registrarDiagnostico(diagnostico, costo) {
            this.diagnostico = diagnostico;
            this.costoReparacion = parseFloat(costo);
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
        

}

// Crear una instancia de Telefono para usar el método validarimei
let telefono = new Telefono();
sessionStorage.setItem("tel",JSON.stringify(telefono));

// Probar el método validarimei
console.log(telefono);
//sessionStorage.setItem("telefono",JSON.stringify(Telefono));
const telefonoForm = document.getElementById('telefonoForm');
const telefonoStatusDiv = document.getElementById('telefonoStatus');
const diagnosticoForm=document.getElementById("diagnosticoForm");
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



telefonoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const numeroSerie = document.getElementById('numeroSerie').value;
    const IMEI = document.getElementById('IMEI').value;
    const marca = document.getElementById('marca').value;
    telefono = new Telefono(numeroSerie, IMEI, marca);
 if(telefono.validarimei(IMEI) === "reportado"){
 alert("reportado");
 }else{ telefono.estado = 'Validado';
    diagnosticoSection.style.display = 'block';
    let seccion1=JSON.parse(sessionStorage.getItem("tel"));
    seccion1.IMEI=IMEI;
    seccion1.numeroSerie=numeroSerie;
    seccion1.marca=marca;
    console.log(seccion1);

    telefonoStatusDiv.innerHTML = telefono.mostrarEstado();
}

});

diagnosticoForm.addEventListener('submit',function(event){
    event.preventDefault();
    const diagnostico = document.getElementById('diagnostico').value;
    const costo = document.getElementById('costo').value;

    telefono.registrarDiagnostico(diagnostico, costo);
    
    telefonoStatusDiv.innerHTML = telefono.mostrarEstado();
    let seccion2=JSON.parse(sessionStorage.getItem("tel"));
    autorizacionSection.style.display = 'block';
    seccion2.diagnostico=diagnostico;
    seccion2.costo=costo;

})
autorizacionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const autorizacion = document.getElementById('autorizacion').checked;
    const abono = document.getElementById('abono').value;
  telefono.autorizarReparacion(autorizacion, abono);
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();
  if (telefono.autorizado) {
    tecnicoSection.style.display = 'block';
    let seccion3=JSON.parse(sessionStorage.getItem("tel"));
    seccion3.autorizacion=autorizacion;
    seccion3.abono=abono;
    fillTecnicosDropdown();
  }

})
tecnicoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const tecnicoSeleccionado = document.getElementById('tecnico').value;

  telefono.asignarTecnico(tecnicoSeleccionado);
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();

  repuestosSection.style.display = 'block';
  let seccion4=JSON.parse(sessionStorage.getItem("tel"));
  seccion4.tecnico=tecnicoSeleccionado;
  pagoSection.style.display = 'block';
});
repuestosForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const repuesto = document.getElementById('repuesto').value;
  const costoRepuesto = document.getElementById('costoRepuesto').value;

  telefono.agregarRepuesto(repuesto, costoRepuesto);
  let seccion5=JSON.parse(sessionStorage.getItem("tel"));
  seccion5.repuesto=repuesto;
  seccion5.costoRepuesto=costoRepuesto;
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();
});

finalizarForm.addEventListener('submit', function(event) {
  event.preventDefault();

  telefono.finalizarReparacion();
  telefonoStatusDiv.innerHTML = telefono.mostrarEstado();

  if (telefono.estado === 'Reparación Completada') {
    let seccion6=JSON.parse(sessionStorage.getItem("tel"));
    seccion6.saldoRestante=telefono.saldoRestante.toFixed(2);
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