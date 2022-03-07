const express = require("express");
const users = require("../database/users");
const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
    res.json(users);
    } catch(err){
       res.status(404).json({
           status: "fail",
           message: err,
       });
    }
}

const addUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
    res.json(user);
    } catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}

const getUser = async(req, res) => {
   try{
    let {id}=req.params;
    const user = await User.findById(id);
    res.json(user);
   } catch(err){
    res.status(404).json({
        status: "fail",
        message: err,
    });
   }
}

const updateUser = async(req, res) => {
   try{
    let {id} = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    res.send("Update successful");
   } catch(err){
    res.status(404).json({
        status: "fail",
        message: err,
    });
  }
}
const deleteUser = async(req, res) => {
    try{
        let {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    res.send("Delete successful");
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
};