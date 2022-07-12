import { FC, useRef, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonUncheckedSharpIcon from "@mui/icons-material/RadioButtonUncheckedSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import {
    FetchDeleteTodo,
    FetchStatusTodo,
    FetchTextTodo,
    ITodo,
} from "../../Redux/Slice/ToDoReducer";
import s from "./ToDo.module.scss";
import { selectFirstLoad } from "../../Selectors/Selectors";
type ToDoCard = {
    todo: ITodo;
};

const ToDo: FC<ToDoCard> = ({ todo }) => {
    const dispatch = useAppDispatch();
    const [text, setText] = useState(todo.text);
    const todoRef = useRef(null);
    const handlerDelete = () => {
        dispatch(FetchDeleteTodo(todo.id));
    };
    const handlerStatus = () => {
        dispatch(FetchStatusTodo({ ...todo, isDone: !todo.isDone }));
    };
    const handlerEdit = () => {
        setEditStatus(true);
    };
    const handlerSave = () => {
        if (text.trim().length) {
            dispatch(FetchTextTodo({ ...todo, text }));
            setEditStatus(false);
        }
    };
    const [editStatus, setEditStatus] = useState(false);

    return (
        <>
            {editStatus ? (
                <div className={s.todo} ref={todoRef}>
                    <button onClick={handlerStatus} className={s.done}>
                        {todo.isDone ? (
                            <CheckCircleSharpIcon />
                        ) : (
                            <RadioButtonUncheckedSharpIcon />
                        )}
                    </button>
                    <textarea
                        value={text}
                        className={s.editInput}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className={s.edit} onClick={handlerSave}>
                        <SaveAsIcon />
                    </button>
                    <button onClick={handlerDelete}>
                        <DeleteIcon />
                    </button>
                </div>
            ) : (
                <div className={s.todo}>
                    <button onClick={handlerStatus} className={s.done}>
                        {todo.isDone ? (
                            <CheckCircleSharpIcon />
                        ) : (
                            <RadioButtonUncheckedSharpIcon />
                        )}
                    </button>
                    <p>{todo.text}</p>
                    <button className={s.edit} onClick={handlerEdit}>
                        <EditIcon />
                    </button>
                    <button onClick={handlerDelete}>
                        <DeleteIcon />
                    </button>
                </div>
            )}
        </>
    );
};

export default ToDo;
