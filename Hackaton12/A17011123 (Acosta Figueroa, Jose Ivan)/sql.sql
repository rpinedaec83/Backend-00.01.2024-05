USE listacompras;

CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha DATE,
    es_completado BOOLEAN DEFAULT FALSE
);