import { useState } from "react";
import { useAppSelector } from "../Hooks/hooks";
import {
    useAddPostsMutation,
    useDeleteTodoMutation,
    useGetTodoQuery,
} from "../Redux/RTKQ/Placeholder.api";
import { useGetUsersQuery } from "../Redux/RTKQ/TestRTKQ.api";

const post = {
    postTime: new Date().getTime(),
    title: "",
    isDone: false,
};
const color: "s" = "age" as "s";

type TypeUserList = {};
const userList = [
    {
        age: 12,
        ayeColor: "black",
    },
    {
        age: 1,
        ayeColor: "blue",
    },
    {
        age: 2,
        ayeColor: "blue",
    },
    {
        age: 2,
        ayeColor: "black",
    },
];
const dataz = userList.map((el) => {
    return el[color as "age"];
});
console.log(dataz);

const RTKQ = () => {
    const todos = useGetTodoQuery("");
    const [addPost, { isLoading }] = useAddPostsMutation();
    const [deleteTodo, x] = useDeleteTodoMutation();
    const [postText, setPostText] = useState("");
    const users = useGetUsersQuery(2);
    const handlerAddPost = async () => {
        if (postText.trim().length) {
            await addPost({ ...post, text: postText }).unwrap();
            setPostText("");
        }
    };
    const handlerREmoveTodo = async (id: number) => {
        await deleteTodo(id).unwrap();
    };
    console.log(todos.isLoading);

    return (
        <main style={{ display: "flex", flexDirection: "column" }}>
            {todos.isLoading && <h1>LOADING...</h1>}
            {isLoading && <h1>LOADING...ADD</h1>}
            {x.isLoading && <h1>LOADING...DELETE</h1>}
            {users.isLoading && <h1>LOADING...USERS</h1>}
            <input
                type="text"
                value={postText}
                onChange={(e) => setPostText(e.currentTarget.value)}
            />
            <button
                style={{ width: "200px", margin: "10px" }}
                onClick={handlerAddPost}
            >
                Add post
            </button>
            <ul>
                {todos.data &&
                    todos.data.map((el: any) => (
                        <li
                            key={el.id}
                            onClick={() => handlerREmoveTodo(el.id)}
                        >
                            {el.text}
                        </li>
                    ))}
            </ul>
            <div style={{ margin: "20px" }}>
                <ul>
                    {users.data &&
                        users.data.map((el) => (
                            <li key={el.id}>
                                {el.name} <b>{el.email}</b>
                            </li>
                        ))}
                </ul>
            </div>
        </main>
    );
};

export default RTKQ;
