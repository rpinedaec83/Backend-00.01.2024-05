db.gestion_personal.insertOne({
    nombre: "Juan Pérez",
    puesto: "Carpintero",
    fecha_ingreso: ISODate("2023-01-15T00:00:00.000Z"),
    salario: 1500
  })
  db.insumos.insertOne({
    fecha: ISODate("2024-08-01T00:00:00.000Z"),
    tipo_insumo: "clavo",
    cantidad: 2000,
    precio: 120.00 // Asegúrate de usar formato decimal
  })
  
  db.materia_prima.insertOne({
    fecha_compra: ISODate("2024-08-01T00:00:00.000Z"),
    nombre_proveedor: "Proveedor A",
    cantidad: 1000,
    tipo_material: "Madera",
    costo: 5000
  })
  
  db.produccion.insertOne({
    producto: "Armario",
    cantidad: 10,
    fechaProduccion: ISODate("2024-08-03T00:00:00.000Z"),
    materiaPrima: [
      ObjectId("66ae9f82856789039933ed16")
    ],
    insumos: [
      ObjectId("66aea193856789039933ed17")
    ],
    personal: [
      ObjectId("66aeae6c856789039933ed19")
    ]
  })
  