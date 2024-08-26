const db = require("../models");
const Color = db.colors;

exports.create = (req, res) => {
    const color = {
        descripcion: req.body.descripcion,
        activo: req.body.activo !== undefined ? req.body.activo : true
    };

    Color.create(color).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Color."
        });
    });
}

exports.findAll = (req, res) => {
    Color.findAll().then((data) => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Color."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Color.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Color with id=${id}.`
                });

            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Color with id=" + id
            });
        });
}

exports.update= (req, res) => {
    const id=req.params.id;
    Color.update(req.body,{
        where:{id:id}
    })
    .then(num=>{
        if(num==1){
            res.send({
                message: "Color was updated successfully."  
            })
        }else{
            res.send({
                message: `Cannot update Color with id=${id}. Maybe Color was not found or req.body is empty!`
            }); 
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Color with id=" + id
        });
    });
};

exports.delete=(req,res)=>{
    const id=req.params.id;

    Color.destroy({
        where: {id:id}
    })
    .then(num=>{
        if (num == 1) {
            res.send({
                message: "Color was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Color with id=${id}. Maybe Color was not found!`
            });
        }        
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    Color.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Color were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Color."
        });
      });
};