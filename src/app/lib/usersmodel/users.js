import mongoose from "mongoose";

const usersModel = new mongoose.Schema({
    frname: String,
    lsname: String,
    email: String,
    password: String,
});

export const Users = mongoose.models.users || mongoose.model('users', usersModel);