USE `Veterinaria`;
DROP procedure IF EXISTS `crud_color`;

DELIMITER $$
USE `Veterinaria`$$
CREATE PROCEDURE `crud_color` (in opcion int, in pDescripcion varchar(100), in pActivo bit,in pId int, in pUsuario int)
BEGIN
if opcion = 1 then
begin
	select * from color where activo = 1;
end ;
elseif opcion = 2 then
begin
	insert into color(descripcion, usuarioCreacion)
    values(pDescripcion, pUsuario);
end ;
elseif opcion = 3 then
begin
	update color set
    descripcion =ifnull( pDescripcion, descripcion),
    activo = ifnull(pActivo,activo),
    usuarioModificacion = pUsuario,
    fechaModificacion = current_timestamp()
    where id = pId;
end ;
elseif opcion = 4  then
begin
	update color set
    activo = 0,
    usuarioModificacion = pUsuario,
    fechaModificacion = current_timestamp()
    where id = pId;
end ;
end if;
END$$

DELIMITER ;