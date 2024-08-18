const db = require("../models");
const Especie = db.especies;

exports.create = (req, res) => {
    const especie = {
        descripcion: req.body.descripcion,
        activo: req.body.activo !== undefined ? req.body.activo : true
    };

    Especie.create(especie).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Especie."
        });
    });
}

exports.findAll = (req, res) => {
    Especie.findAll().then((data) => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Especie."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Especie.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Especie with id=${id}.`
                });

            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Especie with id=" + id
            });
        });
}

exports.update= (req, res) => {
    const id=req.params.id;
    Especie.update(req.body,{
        where:{id:id}
    })
    .then(num=>{
        if(num==1){
            res.send({
                message: "Especie was updated successfully."  
            })
        }else{
            res.send({
                message: `Cannot update Especie with id=${id}. Maybe Especie was not found or req.body is empty!`
            }); 
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Especie with id=" + id
        });
    });
};

exports.delete=(req,res)=>{
    const id=req.params.id;

    Especie.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1) {
            res.send({
                message: "Especie was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Especie with id=${id}. Maybe Especie was not found!`
            });
        }        
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Especie with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    Especie.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Especie were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Color."
        });
      });
};