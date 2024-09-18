module.exports = (err, req, res, next) => {
    console.error(err.stack); // Muestra el error en la consola para depuración
  
    // Si el error tiene un código de estado, úsalo; de lo contrario, usa 500 (Internal Server Error)
    const statusCode = err.statusCode || 500;
  
    // Envía la respuesta con el mensaje de error
    res.status(statusCode).json({
      success: false,
      message: err.message || 'Error en el servidor',
      // Si estás en un entorno de desarrollo, puedes devolver el stack completo del error
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  };
  