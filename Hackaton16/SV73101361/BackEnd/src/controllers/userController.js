const User = require('../models/User');

// Obtener información del perfil del usuario
exports.getProfile = async (req, res) => {
  console.log('Entrando a getProfile'); // Verifica si la función es llamada
  try {
    const userId = req.user.id;
    console.log('ID del usuario:', userId); // Verifica que el ID del usuario sea correcto

    const user = await User.findByPk(userId, {
      attributes: ['id', 'name', 'email', 'authMethod', 'createdAt'],
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log('Error en getProfile:', error.message); // Captura el error
    res.status(500).json({ message: 'Error al obtener el perfil', error: error.message });
  }
};

// Actualizar información del perfil del usuario
exports.updateProfile = async (req, res) => {
  console.log('Entrando a updateProfile'); // Verifica si la función es llamada
  try {
    const userId = req.user.id;
    console.log('ID del usuario:', userId); // Verifica que el ID del usuario sea correcto
    const { name, email } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Actualizar datos
    user.name = name || user.name;
    user.email = email || user.email;
    await user.save();

    res.status(200).json({ message: 'Perfil actualizado', user });
  } catch (error) {
    console.log('Error en updateProfile:', error.message); // Captura el error
    res.status(500).json({ message: 'Error al actualizar el perfil', error: error.message });
  }
};
