import mongoose from "mongoose";
const todosModel = new mongoose.Schema({
    name: String,
    title: String,
    desc: String,
})
export const Todos = mongoose.models.todos || mongoose.model('todos', todosModel);