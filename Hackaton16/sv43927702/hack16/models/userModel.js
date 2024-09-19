const db = require('../db/connection');
const bcrypt = require('bcrypt');

// Crear un nuevo usuario en la base de datos
exports.createUser = async (name, email, password) => {
    try {
        // Hashear la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO Users (name, email, password, created_at) VALUES (?, ?, ?, NOW())';
        const result = await db.query(query, [name, email, hashedPassword]);

        return { id: result.insertId, name, email };
    } catch (error) {
        throw error;
    }
};

// Obtener un usuario por su correo electrónico
exports.getUserByEmail = async (email) => {
    try {
        const query = 'SELECT * FROM Users WHERE email = ?';
        const [user] = await db.query(query, [email]);
        return user.length ? user[0] : null;
    } catch (error) {
        throw error;
    }
};

// Obtener un usuario por su ID
exports.getUserById = async (userId) => {
    try {
        const query = 'SELECT * FROM Users WHERE id = ?';
        const [user] = await db.query(query, [userId]);
        return user.length ? user[0] : null;
    } catch (error) {
        throw error;
    }
};

// Actualizar la información de un usuario
exports.updateUser = async (userId, name, email) => {
    try {
        const query = 'UPDATE Users SET name = ?, email = ? WHERE id = ?';
        const result = await db.query(query, [name, email, userId]);

        if (result.affectedRows === 0) {
            throw new Error('User not found or no changes made');
        }

        return { id: userId, name, email };
    } catch (error) {
        throw error;
    }
};

// Eliminar un usuario por su ID
exports.deleteUser = async (userId) => {
    try {
        const query = 'DELETE FROM Users WHERE id = ?';
        const result = await db.query(query, [userId]);

        if (result.affectedRows === 0) {
            throw new Error('User not found');
        }

        return { success: true };
    } catch (error) {
        throw error;
    }
};

// Comparar la contraseña ingresada con la almacenada en la base de datos
exports.comparePassword = async (inputPassword, storedPassword) => {
    try {
        return await bcrypt.compare(inputPassword, storedPassword);
    } catch (error) {
        throw error;
    }
};

