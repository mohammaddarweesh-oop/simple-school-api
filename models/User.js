const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 8,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false, // حقل لتحديد إذا كان المستخدم مشرفاً أم لا
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId, // استخدم ObjectId للإشارة إلى المواد
      ref: "Subject",
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
