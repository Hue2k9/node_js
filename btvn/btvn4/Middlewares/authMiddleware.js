const User = require("../Models/User");

module.exports.authorization = async function (req, res, next) {
    let {id} = req.params;
    let user = await User.findById(id);

    if (!user)
       return res.send("User does not exist");
       
    if (user.role !== "admin")
       return res.send("User does not have permission");
    next();
};