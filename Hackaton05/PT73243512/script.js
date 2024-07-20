class Sucursal {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
    }
  }
  
  class Tecnico {
    constructor(nombre, especialidades) {
      this.nombre = nombre;
      this.especialidades = especialidades;
    }
  }
  
  class Telefono {
    constructor(numeroSerie, imei, marca, modelo) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.marca = marca;
      this.modelo = modelo;
    }
  }
  
  class Reparacion {
    constructor(telefono, sucursal, tecnico) {
      this.telefono = telefono;
      this.sucursal = sucursal;
      this.tecnico = tecnico;
      this.estado = " Se encuentra en proceso de revisión.";
    }
  }
  const sucursalesStorage = localStorage.getItem('sucursales');
  if (sucursalesStorage) {
    sucursales = JSON.parse(sucursalesStorage);
  } else {
    sucursales = [
      new Sucursal("Sucursal 1", "Direccion 1"),
      new Sucursal("Sucursal 2", "Direccion 2"),
      new Sucursal("Sucursal 3", "Direccion 3")
    ];
    localStorage.setItem('sucursales', JSON.stringify(sucursales));
  }

  localStorage.setItem('sucursales', JSON.stringify(sucursales))
  const tecnicosStorage = localStorage.getItem('tecnicos');

if (tecnicosStorage) {
  tecnicos = JSON.parse(tecnicosStorage);
} else {
  tecnicos = [
    new Tecnico("Tecnico 1", ["iPhone", "Samsung"]),
    new Tecnico("Tecnico 2", ["Huawei", "Xiaomi"])
  ];
  localStorage.setItem('tecnicos', JSON.stringify(tecnicos));
}
  
const reparacionesStorage = localStorage.getItem('reparaciones');
if (reparacionesStorage) {
  reparaciones = JSON.parse(reparacionesStorage);
} else {
  reparaciones = [];
}
  
  document.getElementById("crear-reparacion-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const telefonoNumeroSerie = document.getElementById("telefono-numero-serie").value;
    const telefonoImei = document.getElementById("telefono-imei").value;
    const telefonoMarca = document.getElementById("telefono-marca").value;
    const telefonoModelo = document.getElementById("telefono-modelo").value;
    const sucursal = sucursales.find((s) => s.nombre === document.getElementById("sucursal").value);
    const tecnico = tecnicos.find((t) => t.nombre === document.getElementById("tecnico").value);
    let crearReparacion = true; 
  
    if (telefonoImei === "12345" && telefonoNumeroSerie === "123") {
     
      document.getElementById("alert-container").style.display = "block";
  
      document.getElementById("alert-close").addEventListener("click", function() {
        document.getElementById("alert-container").style.display = "none";
        crearReparacion = false; 
      });
  
      crearReparacion = false; 
    }

    if (crearReparacion) {
      const telefono = new Telefono(telefonoNumeroSerie, telefonoImei, telefonoMarca, telefonoModelo);
      const reparacion = new Reparacion(telefono, sucursal, tecnico);
    
      reparaciones.push(reparacion);
      localStorage.setItem('reparaciones', JSON.stringify(reparaciones));
      mostrarReparaciones();
      mostrarDatosIngresados(reparacion);
    }
  
    document.getElementById('telefono-numero-serie').value = '';
    document.getElementById('telefono-imei').value = '';
    document.getElementById('telefono-marca').value = '';
    document.getElementById('telefono-modelo').value = '';
  });
  
  function mostrarReparaciones() {
    const reparacionesUl = document.getElementById("reparaciones-ul");
  

    reparacionesUl.innerHTML = '';
  
    reparaciones.forEach((reparacion) => {
      const li = document.createElement("li");
      li.textContent = `El celular ${reparacion.telefono.marca} - ${reparacion.telefono.modelo} - ${reparacion.estado}`;
      reparacionesUl.appendChild(li);
    });
    
  }
  
  function mostrarDatosIngresados(reparacion) {
    const telefonoNumeroSerieSpan = document.getElementById("telefono-numero-serie-span");
    const telefonoImeiSpan = document.getElementById("telefono-imei-span");
    const telefonoMarcaSpan = document.getElementById("telefono-marca-span");
    const telefonoModeloSpan = document.getElementById("telefono-modelo-span");
    const sucursalSpan = document.getElementById("sucursal-span");
    const tecnicoSpan = document.getElementById("tecnico-span");
  
    telefonoNumeroSerieSpan.textContent = reparacion.telefono.numeroSerie;
    telefonoImeiSpan.textContent = reparacion.telefono.imei;
    telefonoMarcaSpan.textContent = reparacion.telefono.marca;
    telefonoModeloSpan.textContent = reparacion.telefono.modelo;
    sucursalSpan.textContent = reparacion.sucursal.nombre;
    tecnicoSpan.textContent = reparacion.tecnico.nombre;
  }
