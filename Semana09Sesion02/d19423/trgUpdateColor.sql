
USE `Veterinaria`;
DROP trigger IF EXISTS `trgUpdateColor`;

DELIMITER $$
USE `Veterinaria`$$

DELIMITER $$ 
CREATE TRIGGER trgUpdateColor AFTER UPDATE ON Color
FOR EACH ROW
BEGIN
INSERT INTO `Veterinaria`.`color_bck`
(`id`,
`descripcion`,
`activo`,
`usuarioCreacion`,
`fechaCreacion`,
`usuarioModificacion`,
`fechaModificacion`,
`accion`,
`user`)
VALUES
(OLD.id, OLD.descripcion, OLD.activo, OLD.usuarioCreacion, OLD.fechaCreacion, OLD.usuarioModificacion, OLD.fechaModificacion, 'U', CURRENT_USER() );

END
$$
DELIMITER ;