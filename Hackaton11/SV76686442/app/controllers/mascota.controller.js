const db=require("../models");
const Mascota=db.mascota;
const Vacuna=db.vacunas;

exports.create=(req,res)=>{
    const mascota={
        nombre: req.body.nombre,
        fechaNacimiento:req.body.fechaNacimiento,
        peso:req.body.peso,
        activo: req.body.activo !== undefined ? req.body.activo : true,
        razaId:req.body.razaId,
        especieId:req.body.especieId,
        sexoId:req.body.sexoId,
        colorId:req.body.colorId,
        propietarioId:req.body.propietarioId
    };

    console.log(mascota);

    Mascota.create(mascota).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Mascota."
        });
    })
}

exports.findAll=(req, res) => {
    Mascota.findAll().then((data)=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Mascota."
        });
    });   
};

exports.findOne=(req, res) => {
    const id=req.params.id;
    Mascota.findByPk(id)
        .then(data=>{ 
            if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message: `Cannot find Mascota with id=${id}.`
                });
               
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Mascota with id=" + id
            });
        });
};

exports.update=(req, res) => {
    const id=req.params.id;
    Mascota.update(req.body,{
        where: {id:id}
    })
    .then(num=>{
        if(num==1){
            res.send({
                message: "Mascota was updated successfully."  
            })            
        }else{
            res.send({
                message: `Cannot update Mascota with id=${id}. Maybe Mascota was not found or req.body is empty!`
            });             
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Mascota with id=" + id
        });
    });   
};

exports.delete=(req,res)=>{
    const id=req.params.id;

    Mascota.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1) {
            res.send({
                message: "Mascota was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Mascota with id=${id}. Maybe Mascota was not found!`
            });
        }    
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Mascota with id=" + id
        });
    });
};

exports.deleteAll=(req, res) => {
    Mascota.destroy({
        where:{},
        truncate:false
    })
    .then(nums=>{
        res.send({ message: `${nums} Mascota were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Mascota."
      });
    });
};

exports.addVacuna = (req, res) => {
    const mascotaId = req.body.mascotaId;
    const vacunaId = req.body.vacunaId;

    Mascota.findByPk(mascotaId)
        .then((mascota) => {
            if (!mascota) {
                res.status(400).send({

                    message:
                        "No se encontro la mascota"
                });
            }
            Vacuna.findByPk(vacunaId).then((vacuna) => {
                if (!vacuna) {
                    console.log("Vacuna not found!");
                    return null;
                }

                mascota.addVacuna(vacuna);
                res.send({ message:
                    "Se registro la vacuna de la mascota"});
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vacuna."
            });
        });
};

exports.findAllVacuna = (req, res) => {
    Mascota.findAll({
        include: [
            {
                model: Vacuna,
                as: "vacunas",
                attributes: ["id","descripcion"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error"
            });
        });
};

exports.findOneVacuna = (req, res) => {
    const id=req.params.id;
    Mascota.findOne({
        where:{id:id},
        include: [
            {
                model: Vacuna,
                as: "vacunas",
                attributes: ["id","descripcion"],
                through: {
                    attributes: [],
                }
            },
        ],
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error"
            });
        });
};


exports.updateVacunas = (req, res) => {
    const mascotaId = req.params.id;
    const vacunasIds = req.body.vacunasIds; 

    Mascota.findByPk(mascotaId)
        .then((mascota) => {
            if (!mascota) {
                return res.status(404).send({
                    message: "Mascota not found."
                });
            }

            Vacuna.findAll({
                where: {
                    id: vacunasIds
                }
            }).then((vacunas) => {
                if (vacunas.length === 0) {
                    return res.status(404).send({
                        message: "No vacunas found with the given IDs."
                    });
                }

                mascota.setVacunas(vacunas)  
                    .then(() => {
                        res.send({
                            message: "Vaccines updated successfully."
                        });
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while updating vaccines."
                        });
                    });
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving vaccines."
                });
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the Mascota."
            });
        });
};


exports.removeVacuna = (req, res) => {
    const mascotaId = req.params.mascotaId;
    const vacunaId = req.params.vacunaId;

    Mascota.findByPk(mascotaId)
        .then(mascota => {
            if (!mascota) {
                return res.status(404).send({
                    message: "Mascota not found."
                });
            }

            Vacuna.findByPk(vacunaId)
                .then(vacuna => {
                    if (!vacuna) {
                        return res.status(404).send({
                            message: "Vacuna not found."
                        });
                    }

                    mascota.removeVacuna(vacuna)
                        .then(() => {
                            res.send({
                                message: "Vacuna removed from Mascota successfully."
                            });
                        })
                        .catch(err => {
                            res.status(500).send({
                                message: err.message || "Some error occurred while removing the vacuna."
                            });
                        });
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while retrieving the vacuna."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the Mascota."
            });
        });
};

exports.removeAllVacunas = (req, res) => {
    const mascotaId = req.params.id;

    Mascota.findByPk(mascotaId)
        .then(mascota => {
            if (!mascota) {
                return res.status(404).send({
                    message: "Mascota not found."
                });
            }

            mascota.setVacunas([]) 
                .then(() => {
                    res.send({
                        message: "All vacunas removed from Mascota successfully."
                    });
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while removing the vacunas."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the Mascota."
            });
        });
};










