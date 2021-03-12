import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const checkUser = await User.findOne({
      where: { id: req.userId },
    });

    if (!checkUser) {
      return res
        .status(400)
        .json({ error: 'User not find' });
    }

    const notifications = await Notification.find({
      user_id: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(10);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
    );
    return res.json(notification);
  }

  async remove(req, res) {
    await Notification.remove({ _id: req.params.id, user_id: req.userId });
    return res.status(200).json({ message: 'Notification has been removed.' });
  }
}

export default new NotificationController();
