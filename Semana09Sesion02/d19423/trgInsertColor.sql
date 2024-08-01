
USE `Veterinaria`;
DROP trigger IF EXISTS `trgInsertColor`;

DELIMITER $$
USE `Veterinaria`$$

DELIMITER $$ 
CREATE TRIGGER trgInsertColor AFTER INSERT ON Color
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
(NEW.id, new.descripcion, new.activo, new.usuarioCreacion, new.fechaCreacion, new.usuarioModificacion, new.fechaModificacion, 'I', CURRENT_USER() );

END
$$
DELIMITER ;