module.exports=app=>{
     let router= require("express").Router();
     const colors=require("../controllers/color.controller.js");
     const especies=require("../controllers/especie.controller.js");
     const razas=require("../controllers/raza.controller.js");
     const sexos=require("../controllers/sexo.controller.js");
     const ubigeos=require("../controllers/ubigeo.controller.js");
     const nacionalidads=require("../controllers/nacionalidad.controller.js");
     const vacunas=require("../controllers/vacunas.controller.js");
     const propietarios=require("../controllers/propietario.controller.js");
     const mascota=require("../controllers/mascota.controller.js");

    router.post("/color", colors.create);    
    router.get("/color", colors.findAll);
    router.get("/color/:id",colors.findOne);
    router.put("/color/:id",colors.update);
    router.delete("/color/:id",colors.delete);
    router.delete("/color",colors.deleteAll);

    router.post("/especie", especies.create);    
    router.get("/especie", especies.findAll);
    router.get("/especie/:id",especies.findOne);
    router.put("/especie/:id",especies.update);
    router.delete("/especie/:id",especies.delete);
    router.delete("/especie",especies.deleteAll);

    router.post("/raza", razas.create);    
    router.get("/raza", razas.findAll);
    router.get("/raza/:id",razas.findOne);
    router.put("/raza/:id",razas.update);
    router.delete("/raza/:id",razas.delete);
    router.delete("/raza",razas.deleteAll);

    router.post("/sexo", sexos.create);    
    router.get("/sexo", sexos.findAll);
    router.get("/sexo/:id",sexos.findOne);
    router.put("/sexo/:id",sexos.update);
    router.delete("/sexo/:id",sexos.delete);
    router.delete("/sexo",sexos.deleteAll);


    router.post("/ubigeo", ubigeos.create);    
    router.get("/ubigeo", ubigeos.findAll);
    router.get("/ubigeo/:ubigeo",ubigeos.findOne);
    router.put("/ubigeo/:ubigeo",ubigeos.update);
    router.delete("/ubigeo/:ubigeo",ubigeos.delete);
    router.delete("/ubigeo",ubigeos.deleteAll);

    router.post("/nacionalidad", nacionalidads.create);    
    router.get("/nacionalidad", nacionalidads.findAll);
    router.get("/nacionalidad/:id",nacionalidads.findOne);
    router.put("/nacionalidad/:id",nacionalidads.update);
    router.delete("/nacionalidad/:id",nacionalidads.delete);
    router.delete("/nacionalidad",nacionalidads.deleteAll);

    router.post("/vacunas", vacunas.create);    
    router.get("/vacunas", vacunas.findAll);
    router.get("/vacunas/:id",vacunas.findOne);
    router.put("/vacunas/:id",vacunas.update);
    router.delete("/vacunas/:id",vacunas.delete);
    router.delete("/vacunas",vacunas.deleteAll);

    router.post("/propietario", propietarios.create); 
    router.get("/propietario",propietarios.findAll);
    router.get("/propietario/:id",propietarios.findOne);
    router.put("/propietario/:id",propietarios.update);
    router.delete("/propietario/:id",propietarios.delete);
    router.delete("/propietario",propietarios.deleteAll);

    router.post("/mascota",mascota.create);
    router.get("/mascota",mascota.findAll);
    router.get("/mascota/:id",mascota.findOne);
    router.put("/mascota/:id",mascota.update);
    router.delete("/mascota/:id",mascota.delete);
    router.delete("/mascota",mascota.deleteAll);

    router.post("/mascota/vacuna",mascota.addVacuna);
    router.get('/mascotavacuna', mascota.findAllVacuna);
    router.get('/mascotavacuna/:id', mascota.findOneVacuna);
    router.put('/mascotavacuna/:id/vacunas',mascota.updateVacunas);
    router.delete('/mascotavacuna/:mascotaId/vacunas/:vacunaId', mascota.removeVacuna);
    router.delete('/mascotavacuna/:id/vacunas', mascota.removeAllVacunas);
     app.use('/api/veterinaria',router);
}