const db= require("../models");
const Nacionalidad= db.nacionalidads;

exports.create = (req, res) => {
    const nacionalidad = {
        descripcion: req.body.descripcion,
        activo: req.body.activo !== undefined ? req.body.activo : true
    };

    Nacionalidad.create(nacionalidad).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Nacionalidad."
        });
    });
}

exports.findAll = (req, res) => {
    Nacionalidad.findAll().then((data) => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Nacionalidad."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Nacionalidad.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Nacionalidad with id=${id}.`
                });

            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Nacionalidad with id=" + id
            });
        });
}

exports.update= (req, res) => {
    const id=req.params.id;
    Nacionalidad.update(req.body,{
        where:{id:id}
    })
    .then(num=>{
        if(num==1){
            res.send({
                message: "Nacionalidad was updated successfully."  
            })
        }else{
            res.send({
                message: `Cannot update Nacionalidad with id=${id}. Maybe Nacionalidad was not found or req.body is empty!`
            }); 
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Nacionalidad with id=" + id
        });
    });
};

exports.delete=(req,res)=>{
    const id=req.params.id;

    Nacionalidad.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1) {
            res.send({
                message: "Nacionalidsd was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Nacionalidad with id=${id}. Maybe Nacionalidad was not found!`
            });
        }        
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Nacionalidad with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    Nacionalidad.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Nacionalidad were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Nacionalidad."
        });
      });
};