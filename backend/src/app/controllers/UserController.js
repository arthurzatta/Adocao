import User from '../models/User';

// Criar um usuario, editar os dados, deletar os dados, listar os dados
class UserController {
  async create(request, response) {
    const userExist = await User.findOne({ where: { email: request.body.email } });

    if (userExist) {
      return response.status(400).json({ error: 'User already exists.' });
    }

    const {
      id, name, phone, email, password,
    } = await User.create(request.body);

    return response.json({
      id,
      name,
      email,
      phone,
      password,
    });
  }

  async list(request, response) {
    const userData = await User.findAll();

    return response.json(userData);
  }

  async update(request, response) {
    const userData = await User.findByPk(request.userId);

    if (!userData) {
      return response.status(400).json({ error: 'User not find' });
    }

    console.log(userData);

    const {
      name, email, phone, state, city,
    } = await userData.update(request.body);

    return response.json({
      name, email, phone, state, city,
    });
  }

  async remove(request, response) {
    const userData = await User.findByPk(request.userId);

    if (!userData) {
      return response.status(400).json({ error: 'User not find' });
    }

    User.destroy({
      schema: 'users',
      where: {
        id: request.userId,
      },
      // Opçoes setadas para deletar instancias de outras tabelas que possuem o idUser
      truncate: true,
      cascade: true,
    });

    return response.status(200).json({ success: 'Instance removed' });
  }
}

export default new UserController();
