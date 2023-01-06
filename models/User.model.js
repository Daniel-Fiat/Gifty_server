const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    location: [{ lat: String, lng: String }],
    wishList: [{ type: String, default: [] }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
