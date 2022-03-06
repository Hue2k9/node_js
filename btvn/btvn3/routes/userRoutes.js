const express = require("express");
const userRouter = express.Router();

const users = require("../database/users");

userRouter.get("/",(req,res)=>{
    res.json(users);
});

userRouter.post("/", (req, res) => {
    let user = req.body;
    users.push(user);
    res.send("Nguoi su dung duoc them thanh cong");
});

userRouter.put("/:id",(req, res) => {
   let {id} = req.params;
   let getId = (user) => user.id ==id;
   let index = users.findIndex(getId);
   if (index===-1) return res.send("Not found id");
   users[index].name = req.body.name;
   users[index].address = req.body.address;
   users[index].email = req.body.email;
   res.send("Cap nhat thanh cong");
});

userRouter.delete("/:id", (req,res) => {
   let {id}=req.params;
   let getId=(user) =>user.id==id;
   let index = users.findIndex(getId);
   if (index ===-1) return res.send("Not found id");
   users.splice(index,1);
   res.send("Xoa thanh cong");
});

module.exports = userRouter;



