class Telefono {
  constructor(numeroSerie, IMEI, marca, modelo) {
    this.numeroSerie = numeroSerie;
    this.IMEI = IMEI;
    this.marca = marca;
    this.modelo = modelo;
    this.reportado = false;
    this.estado = 'Ingresado';
  }
}

class Tecnico {
  constructor(nombre, skills) {
    this.nombre = nombre;
    this.skills = skills;
  }
}

class Repuesto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Reparacion {
  constructor(telefono, tecnico) {
    this.telefono = telefono;
    this.tecnico = tecnico;
    this.diagnostico = '';
    this.autorizacion = false;
    this.abono = 0;
    this.repuestos = [];
    this.costoTotal = 0;
  }

  agregarDiagnostico(diagnostico) {
    this.diagnostico = diagnostico;
    this.telefono.estado = 'Diagnosticado';
  }

  autorizarReparacion(autorizacion) {
    this.autorizacion = autorizacion;
    if (autorizacion) {
      this.telefono.estado = 'Autorizado';
    }
  }

  realizarAbono(monto) {
    this.abono = monto;
    if (this.abono >= this.costoTotal * 0.5) {
      this.telefono.estado = 'En reparación';
    }
  }

  agregarRepuesto(repuesto) {
    this.repuestos.push(repuesto);
    this.costoTotal += repuesto.precio;
  }

  finalizarReparacion() {
    this.telefono.estado = 'Reparado';
  }
}

class SistemaReparaciones {
  constructor() {
    this.reparaciones = [];
    this.tecnicos = [];
  }

  agregarReparacion(reparacion) {
    if (!reparacion.telefono.reportado) {
      this.reparaciones.push(reparacion);
      this.guardarEnStorage();
      return true;
    }
    return false;
  }

  agregarTecnico(tecnico) {
    this.tecnicos.push(tecnico);
    this.guardarEnStorage();
  }

  obtenerTecnicoAdecuado(marca) {
    return this.tecnicos.find(tecnico => tecnico.skills.includes(marca));
  }

  guardarEnStorage() {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('reparaciones', JSON.stringify(this.reparaciones));
      localStorage.setItem('tecnicos', JSON.stringify(this.tecnicos));
    } else {
      console.log('WebStorage no está soportado en este navegador');
    }
  }

  cargarDeStorage() {
    if (typeof(Storage) !== "undefined") {
      const reparacionesGuardadas = JSON.parse(localStorage.getItem('reparaciones'));
      const tecnicosGuardados = JSON.parse(localStorage.getItem('tecnicos'));
      
      if (reparacionesGuardadas) this.reparaciones = reparacionesGuardadas;
      if (tecnicosGuardados) this.tecnicos = tecnicosGuardados;
    } else {
      console.log('WebStorage no está soportado en este navegador');
    }
  }
}

// Primero, incluye aquí todas las clases que definimos anteriormente (Telefono, Tecnico, Repuesto, Reparacion, SistemaReparaciones)

const sistema = new SistemaReparaciones();
sistema.cargarDeStorage();

function actualizarSelects() {
    const telefonoSelect = document.getElementById('telefonoSelect');
    const tecnicoSelect = document.getElementById('tecnicoSelect');
    const reparacionSelect = document.getElementById('reparacionSelect');

    telefonoSelect.innerHTML = '';
    tecnicoSelect.innerHTML = '';
    reparacionSelect.innerHTML = '';

    sistema.reparaciones.forEach((reparacion, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${reparacion.telefono.marca} ${reparacion.telefono.modelo}`;
        telefonoSelect.appendChild(option);
        reparacionSelect.appendChild(option.cloneNode(true));
    });

    sistema.tecnicos.forEach((tecnico, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = tecnico.nombre;
        tecnicoSelect.appendChild(option);
    });
}

document.getElementById('telefonoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const telefono = new Telefono(
        document.getElementById('numeroSerie').value,
        document.getElementById('IMEI').value,
        document.getElementById('marca').value,
        document.getElementById('modelo').value
    );
    const tecnico = sistema.obtenerTecnicoAdecuado(telefono.marca);
    if (tecnico) {
        const reparacion = new Reparacion(telefono, tecnico);
        sistema.agregarReparacion(reparacion);
        actualizarSelects();
        document.getElementById('output').textContent = 'Teléfono ingresado y reparación creada';
    } else {
        document.getElementById('output').textContent = 'No hay técnico disponible para esta marca';
    }
});

document.getElementById('tecnicoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tecnico = new Tecnico(
        document.getElementById('nombreTecnico').value,
        document.getElementById('skills').value.split(',').map(skill => skill.trim())
    );
    sistema.agregarTecnico(tecnico);
    actualizarSelects();
    document.getElementById('output').textContent = 'Técnico ingresado';
});

document.getElementById('reparacionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const telefonoIndex = document.getElementById('telefonoSelect').value;
    const tecnicoIndex = document.getElementById('tecnicoSelect').value;
    const reparacion = new Reparacion(
        sistema.reparaciones[telefonoIndex].telefono,
        sistema.tecnicos[tecnicoIndex]
    );
    sistema.agregarReparacion(reparacion);
    actualizarSelects();
    document.getElementById('output').textContent = 'Reparación creada';
});

document.getElementById('actualizarReparacionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const reparacionIndex = document.getElementById('reparacionSelect').value;
    const reparacion = sistema.reparaciones[reparacionIndex];
    
    const diagnostico = document.getElementById('diagnostico').value;
    if (diagnostico) reparacion.agregarDiagnostico(diagnostico);

    const autorizacion = document.getElementById('autorizacion').checked;
    reparacion.autorizarReparacion(autorizacion);

    const abono = parseFloat(document.getElementById('abono').value);
    if (!isNaN(abono)) reparacion.realizarAbono(abono);

    const nombreRepuesto = document.getElementById('nombreRepuesto').value;
    const precioRepuesto = parseFloat(document.getElementById('precioRepuesto').value);
    if (nombreRepuesto && !isNaN(precioRepuesto)) {
        const repuesto = new Repuesto(nombreRepuesto, precioRepuesto);
        reparacion.agregarRepuesto(repuesto);
    }

    sistema.guardarEnStorage();
    actualizarSelects();
    document.getElementById('output').textContent = 'Reparación actualizada';
});

actualizarSelects();