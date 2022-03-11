const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: {
       type: String,
       required: [true, "This field is required"],
       minlength: [2, "Name must be at least 2 characters"],
   },
   age: { type: Number, required: true, min: 5, max: 100},
   role:{
       type:  String,
       enum: ["user", "admin"],
   },
   password: String,
   post:{ type:  Schema.Types.ObjectId, ref: 'Post'},
});

//Mã hóa password
userSchema.pre("save", async function (next) {
   const user = this;
   console.log(this);

   if (user.isModified("password")){
       user.password = await bcrypt.hash(user.password, 10);
   }
   next();
});

module.exports = mongoose.model("users", userSchema);
