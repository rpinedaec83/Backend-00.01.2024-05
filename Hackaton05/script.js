class Telefono {
    constructor(numeroSerie, imei, marca) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.marca = marca;
      this.estado = 'Ingresado';
      this.diagnostico = null;
      this.autorizacion = false;
      this.abono = 0;
    }
  
    realizarDiagnostico(diagnostico) {
      this.diagnostico = diagnostico;
      this.estado = 'Diagnosticado';
    }
  
    autorizarReparacion(autorizacion, abono) {
      if (autorizacion && abono >= 50) {
        this.autorizacion = true;
        this.abono = abono;
        this.estado = 'Autorizado';
        return true;
      }
      return false;
    }
  
    actualizarEstado(nuevoEstado) {
      this.estado = nuevoEstado;
    }
  }
  
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  
    puedeReparar(marca) {
      return this.skills.includes(marca);
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
      this.repuestos = [];
      this.costoTotal = 0;
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
      this.costoTotal += repuesto.precio;
    }
  
    finalizarReparacion() {
      this.telefono.actualizarEstado('Reparado');
    }
  }
  
  class SistemaReparacion {
    constructor() {
      this.telefonosReportados = new Set();
      this.reparaciones = [];
    }
  
    registrarTelefonoReportado(numeroSerie, imei) {
      this.telefonosReportados.add(`${numeroSerie}-${imei}`);
    }
  
    ingresarTelefono(numeroSerie, imei, marca) {
      if (this.telefonosReportados.has(`${numeroSerie}-${imei}`)) {
        throw new Error('Teléfono reportado, no se puede acceder al servicio');
      }
      return new Telefono(numeroSerie, imei, marca);
    }
  
    asignarTecnico(telefono, tecnicos) {
      const tecnicoDisponible = tecnicos.find(tecnico => tecnico.puedeReparar(telefono.marca));
      if (!tecnicoDisponible) {
        throw new Error('No hay técnicos disponibles para esta marca');
      }
      return new Reparacion(telefono, tecnicoDisponible);
    }
  }
  const sistema = new SistemaReparacion();
  sistema.registrarTelefonoReportado('ABC123', '123456789');
  const tecnico1 = new Tecnico('Juan', ['Samsung', 'Apple']);
  const tecnico2 = new Tecnico('Ana', ['Huawei', 'Xiaomi']);
  try {
    const telefono = sistema.ingresarTelefono('XYZ789', '987654321', 'Samsung');
    telefono.realizarDiagnostico('Pantalla rota');
    if (telefono.autorizarReparacion(true, 60)) {
      const reparacion = sistema.asignarTecnico(telefono, [tecnico1, tecnico2]);
      reparacion.agregarRepuesto(new Repuesto('Pantalla Samsung', 100));
      reparacion.agregarRepuesto(new Repuesto('Batería', 50));
      reparacion.finalizarReparacion();
      console.log('Estado final del teléfono:', telefono.estado);
      console.log('Costo total de la reparación:', reparacion.costoTotal);
    }
  } catch (error) {
    console.error(error.message);
  }