// Manejo general de errores
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Mostrar el error en la consola para facilitar el debugging
    
    // Establecer el código de estado HTTP
    const statusCode = err.statusCode || 500;
    
    // Enviar una respuesta de error al cliente
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
        // Mostrar más detalles solo en modo desarrollo
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

// Exportar el middleware
module.exports = errorHandler;
