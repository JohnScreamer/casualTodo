import { useState } from "react";
import { InitForm } from "../../Constants/InitForm";
import { useAppDispatch } from "../../Hooks/hooks";
import { FetchAddTodo } from "../../Redux/Slice/ToDoReducer";
import s from "./ToDoForm.module.scss";
const ToDoForm = () => {
    const dispatch = useAppDispatch();
    const [form, setForm] = useState(InitForm);
    const handlerForm = (value: string, formType: string) => {
        setForm((state) => ({ ...state, [formType]: value }));
    };
    const handlerAddTodo = () => {
        dispatch(
            FetchAddTodo({
                id: new Date().getTime(),
                postTime: new Date().getTime(),
                text: form.text,
                title: form.title,
                isDone: false,
            })
        );
        setForm(InitForm);
    };
    return (
        <div className={s.textWrapper}>
            {/* <label htmlFor="title"></label>
            <input
                type="text"
                value={form.title}
                onChange={(e) => handlerForm(e.target.value, "title")}
                id="title"
            /> */}
            <div>
                <textarea
                    name=""
                    id="text"
                    value={form.text}
                    onChange={(e) => handlerForm(e.target.value, "text")}
                    className={s.input}
                ></textarea>
                <button className={s.submit} onClick={handlerAddTodo}>
                    add todo
                </button>
            </div>
        </div>
    );
};

export default ToDoForm;
