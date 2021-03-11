import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  pet_id: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Notification', NotificationSchema);
