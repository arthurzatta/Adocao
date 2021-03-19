import User from '../models/User';

// Criar um usuario, editar os dados, deletar os dados, listar os dados
class UserController {
  async create(request, response) {
    const userExist = await User.findOne({ where: { email: request.body.email } });

    if (userExist) {
      return response.status(400).json({ error: 'User already exists.' });
    }

    const user = await User.create(request.body);

    return response.json(user);
  }

  async list(request, response) {
    const userData = await User.findAll();

    return response.json(userData);
  }
  async getById(request, response) {
    const user = await User.findByPk(request.params.id);

    return response.json(user);
  }

  async update(request, response) {
    const userData = await User.findByPk(request.userId);

    if (!userData) {
      return response.status(400).json({ error: 'User not find' });
    }

    const user = await userData.update(request.body);

    return response.json(user);
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
      cascade: true,
    });

    return response.status(200).json({ success: 'Instance removed' });
  }
}

export default new UserController();
