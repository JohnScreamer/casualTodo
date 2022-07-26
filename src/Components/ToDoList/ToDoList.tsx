import { useAppSelector } from "../../Hooks/hooks";
import { selectFirstLoad, toDoWithPagination } from "../../Selectors/Selectors";
import ToDo from "../ToDo/ToDo";
import ErrorIcon from "@mui/icons-material/Error";
import s from "./ToDoList.module.scss";
import CustomSkeleton from "../CustomSkeleton/CustomSkeleton";

const ToDoList = () => {
    const toDos = useAppSelector(toDoWithPagination);
    const toDoArr = toDos.map((todo) => <ToDo key={todo.id} todo={todo} />);
    const firstLoad = useAppSelector(selectFirstLoad);

    const loadingSkeleton = Array(8)
        .fill(null)
        .map((el, i) => <CustomSkeleton key={i} />);

    if (firstLoad) {
        return (
            <div className={s.SkeletonWrapper}>
                <div style={{ height: "55px" }}></div>
                {loadingSkeleton}
            </div>
        );
    }

    if (toDos.length === 0) {
        return (
            <div className={s.wrapper}>
                <ErrorIcon sx={{ width: "100px", height: "100px" }} />
                <p>Add todo</p>
            </div>
        );
    }
    return <div>{toDoArr}</div>;
};

export default ToDoList;
