import axios from "axios";
import { ITodo } from "../Redux/Slice/ToDoReducer";

const baseURL = axios.create({
    baseURL: "http://localhost:3000/",
});

export const Get_Todo = (data: object) => {
    return baseURL.get("todo", { params: data });
};
export const PostTodo = (todo: ITodo) => {
    return baseURL.post("todo", { ...todo });
};
export const PatchStatusTodo = (todo: ITodo) => {
    return baseURL.put(`todo/${todo.id}`, {
        ...todo,
        isDone: todo.isDone,
    });
};
export const DeleteTodo = (id: number) => {
    return baseURL.delete(`todo/${id}`);
};
export const PatchTextTodo = (todo: ITodo) => {
    return baseURL.put(`todo/${todo.id}`, {
        ...todo,
        text: todo.text,
    });
};
