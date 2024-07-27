CREATE TABLE `color_bck` (
  `id` int NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `activo` bit(1) NOT NULL ,
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  `accion` char(1) not null,
  `user` varchar(100) not null
)
