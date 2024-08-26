const db = require("../models");
const Ubigeo = db.ubigeos;

exports.create = (req, res) => {
    const ubigeo = {
        ubigeo:req.body.ubigeo,
        departamento:req.body.departamento,
        provincia:req.body.provincia,
        distrito: req.body.distrito,
        activo: req.body.activo !== undefined ? req.body.activo : true
    };

    Ubigeo.create(ubigeo).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Ubigeo."
        });
    });
}

exports.findAll = (req, res) => {
    Ubigeo.findAll().then((data) => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Ubigeo."
            });
        });
};

exports.findOne = (req, res) => {
    const ubigeo = req.params.ubigeo;
    Ubigeo.findByPk(ubigeo)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Ubigeo with ubigeo=${ubigeo}.`
                });

            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Ubigeo with ubigeo=" + ubigeo
            });
        });
}

exports.update= (req, res) => {
    const ubigeo=req.params.ubigeo;
    Ubigeo.update(req.body,{
        where:{ubigeo:ubigeo}
    })
    .then(num=>{
        if(num==1){
            res.send({
                message: "Ubigeo was updated successfully."  
            })
        }else{
            res.send({
                message: `Cannot update Ubigeo with ubigeo=${ubigeo}. Maybe Ubigeo was not found or req.body is empty!`
            }); 
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Ubigeo with ubigeo=" + ubigeo
        });
    });
};

exports.delete=(req,res)=>{
    const ubigeo=req.params.ubigeo;

    Ubigeo.destroy({
        where: {ubigeo:ubigeo}
    })
    .then(num=>{
        if (num == 1) {
            res.send({
                message: "Ubigeo was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Ubigeo with ubigeo=${ubigeo}. Maybe Ubigeo was not found!`
            });
        }        
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Ubigeo with ubigeo=" + ubigeo
        });
    });
};

exports.deleteAll = (req, res) => {
    Ubigeo.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Ubigeo were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Ubigeo."
        });
      });
};