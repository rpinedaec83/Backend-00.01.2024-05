const db = require('../db/connection');

// Obtener un producto por su ID
exports.getProductById = async (productId) => {
    try {
        const query = 'SELECT * FROM Products WHERE id = ?';
        const [product] = await db.query(query, [productId]);

        if (product.length === 0) {
            throw new Error('Product not found');
        }
        return product[0];
    } catch (error) {
        throw error;
    }
};

// Obtener todos los productos
exports.getAllProducts = async () => {
    try {
        const query = 'SELECT * FROM Products';
        const [products] = await db.query(query);
        return products;
    } catch (error) {
        throw error;
    }
};

// Crear un nuevo producto
exports.createProduct = async (name, description, price) => {
    try {
        const query = 'INSERT INTO Products (name, description, price) VALUES (?, ?, ?)';
        const result = await db.query(query, [name, description, price]);

        return { id: result.insertId, name, description, price };
    } catch (error) {
        throw error;
    }
};

// Actualizar un producto por su ID
exports.updateProduct = async (productId, name, description, price) => {
    try {
        const query = 'UPDATE Products SET name = ?, description = ?, price = ? WHERE id = ?';
        const result = await db.query(query, [name, description, price, productId]);

        if (result.affectedRows === 0) {
            throw new Error('Product not found or no changes made');
        }

        return { id: productId, name, description, price };
    } catch (error) {
        throw error;
    }
};

// Eliminar un producto por su ID
exports.deleteProduct = async (productId) => {
    try {
        const query = 'DELETE FROM Products WHERE id = ?';
        const result = await db.query(query, [productId]);

        if (result.affectedRows === 0) {
            throw new Error('Product not found');
        }

        return { success: true };
    } catch (error) {
        throw error;
    }
};

