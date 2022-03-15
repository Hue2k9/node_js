const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "This field is required"],
    minlength: [2, "Name must be at least 2 characters"],
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  age: Number,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: String,
});

//Mã hóa password
userSchema.pre("save", async function (next) {
  const user = this;
  console.log(this);

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

module.exports = mongoose.model("users", userSchema);
