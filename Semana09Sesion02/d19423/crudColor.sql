USE `Veterinaria`;
DROP procedure IF EXISTS `crud_color`;

DELIMITER $$
USE `Veterinaria`$$
CREATE PROCEDURE `crud_color` (in opcion int)
BEGIN
if opcion = 1 then
begin
	select * from color;
end ;

end if;
END$$

DELIMITER ;