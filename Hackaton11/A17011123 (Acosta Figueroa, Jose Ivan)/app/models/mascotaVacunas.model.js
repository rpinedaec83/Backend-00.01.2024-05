module.exports = (sequelize, DataType) => {
    const MascotaVacunas = sequelize.define("mascotaVacunas", {
        idMascota: {
            type: DataType.INTEGER,
            allowNull: false
        },
        idVacuna: {
            type: DataType.INTEGER,
            allowNull: false
        },
        fechaVacunacion: {
            type: DataType.DATE,
            allowNull: false
        }
    });

    return MascotaVacunas;
};
