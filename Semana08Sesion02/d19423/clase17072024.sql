-- DDL Data Definition Langage

-- use mydb;

-- drop database Veterinaria;

-- create database Veterinaria;
-- use Veterinaria;

create table usuario(
	id int primary key AUTO_INCREMENT,
    username varchar(100) unique not null,
    password varchar(100) not null,
    email varchar(100) unique not null,
    
    activo bit not null default 0,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT fk_idUsuarioC FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT fk_idUsuarioM FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id)
    
);

create table especie(
	id int primary key AUTO_INCREMENT,
    descripcion varchar(100) unique not null,
    
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id)
    
);

create table raza(
	id int primary key AUTO_INCREMENT,
    descripcion varchar(100) unique not null,
    
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id)
    
);

create table sexo(
	id int primary key AUTO_INCREMENT,
    descripcion varchar(100) unique not null,
    
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id)
    
);

create table color(
	id int primary key AUTO_INCREMENT,
    descripcion varchar(100) unique not null,
    
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id)
    
);

create table vacunas(
	id int primary key AUTO_INCREMENT,
    descripcion varchar(100) unique not null,
    
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id)
    
);

create table nacionalidad(
	id int primary key AUTO_INCREMENT,
    descripcion varchar(100) unique not null,
    
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id)
    
);

create table ubigeo(
	ubigeo varchar(6) primary key,
    departamento varchar(100) unique not null,
    provincia varchar(100) unique not null,
    distrito varchar(100) unique not null,
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id)
    
);

create table propietario(
	id int primary key AUTO_INCREMENT,
    nombres varchar(100) not null,
    apellidos varchar(100) not null,
    telefono varchar(100) not null,
    email varchar(100) unique not null,
    
    ubigeo varchar(6) not null,
    idNacionalidad int not null,
    
    
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (ubigeo) REFERENCES ubigeo(ubigeo),
    CONSTRAINT FOREIGN KEY (idNacionalidad) REFERENCES Nacionalidad(id)
);

create table mascota(
	id int primary key AUTO_INCREMENT,
    nombre varchar(100) not null,
    fechaNacimiento datetime null,
    peso decimal(5,2) not null,
    
    idEspecie int not null,
    idRaza int not null,
    idSexo int not null,
    idColor int not null,
    idPropietario int not null,
    
    activo bit not null default 1,
    usuarioCreacion int not null,
    fechaCreacion datetime not null default CURRENT_TIMESTAMP,
    usuarioModificacion int null,
    fechaModificacion datetime null,
    
    CONSTRAINT FOREIGN KEY (usuarioCreacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (usuarioModificacion) REFERENCES usuario(id),
    CONSTRAINT FOREIGN KEY (idEspecie) REFERENCES especie(id),
    CONSTRAINT FOREIGN KEY (idRaza) REFERENCES raza(id),
    CONSTRAINT FOREIGN KEY (idSexo) REFERENCES sexo(id),
    CONSTRAINT FOREIGN KEY (idColor) REFERENCES color(id),
    CONSTRAINT FOREIGN KEY (idPropietario) REFERENCES propietario(id)
    
);

create table MascotaVacunas(
	id int not null primary key AUTO_INCREMENT,
    idMascota int not null,
    idVacuna int not null,
    CONSTRAINT FOREIGN KEY (idMascota) REFERENCES mascota(id),
    CONSTRAINT FOREIGN KEY (idVacuna) REFERENCES vacunas(id)
    

);

insert into usuario( username, password, email,usuarioCreacion)
values(
'jperez','1234567890','jperez@x-codec.net', 1
);

select * from usuario;

update usuario set id = 2 where id = 4;

insert into vacunas ( descripcion, usuarioCreacion)
values( 'Antirrabica', 1);

select * from vacunas;